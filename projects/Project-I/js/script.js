/**
 * Word game
 * Lucie Soussana, Jake Hayduk
 * 
 * A game of making words with the bigrams given
 * 
 * Instructions:
 * - Bigrams will appear on the screen
 * - Make words using the bigrams
 * - Get a high score before time runs out!
 * 
 */

"use strict";

window.onload = setup;

function setup() {
    let birds = "";
    let words = "";
    let dinos = "";
    let prompt;
    let dictionary = "";
    let difficulty = 1;

    fetch('../dictionaries/words.txt')
    .then(response => response.text())
    .then((data) => {
        words = data;
        // set dictionary to be words as default
        dictionary = words;
        prompt = newPrompt();
    })
    .catch(error => console.error('Error fetching data:', error));

    
    fetch('../dictionaries/birds.txt')
    .then(response => response.text())
    .then((data) => {
        birds = data;
    })
    .catch(error => console.error('Error fetching data:', error));

    fetch('../dictionaries/dinosaurs.txt')
    .then(response => response.text())
    .then((data) => {
        dinos = data;
    })
    .catch(error => console.error('Error fetching data:', error));




    let textInput = document.querySelector('#textInput');
    textInput.addEventListener("keydown", function (e) {
        if (e.which === 13) {
            const dict = dictionary.toLowerCase();
            const answer = textInput.value.toLowerCase();
            const result = dict.includes("\n" + answer + "\r");
            const checkInclude = answer.includes(prompt);

            if (result == true && checkInclude == true) {
                console.log("correct");
                textInput.value = "";
                prompt = newPrompt();
            }

            else {
                textInput.style.color = "var(--tertiary)";
                setTimeout(function () {
                    textInput.style.color = "var(--primary)";
                }, 500)
            }
        }
    })

    function newPrompt() {
        prompt = bigrams[Math.floor(Math.random() * (bigrams.length - 1) / ((10 / difficulty ** 2) + 0.9))][0];

        // make it cycle through until it picks a bigram that is included in the bird list
        while (dictionary.includes(prompt) == false) {
            prompt = bigrams[Math.floor(Math.random() * (bigrams.length - 1) / ((10 / difficulty ** 2) + 0.9))][0];
        }

        // console.log((10 / difficulty ** 2) + 0.9);
        // console.log(bigrams[Math.round((bigrams.length - 1) / ((10 / difficulty ** 2) + 0.9))][0]);
        document.querySelector('.prompt').textContent = prompt.toUpperCase();
        return prompt;
    }



    document.querySelector("#dropdown").addEventListener("change", function () {
        console.log(this.value);
        

        if (this.value == "normal") {
            dictionary = words;
        }
        else if (this.value == "birds") {
            dictionary = birds;
        }
        else if (this.value == "dinosaurs") {
            dictionary = dinos;
        }

        newPrompt();
    })

    document.querySelector(".slider").addEventListener("change", function () {
        document.querySelector(".difficulty p").textContent = "difficulty: " + this.value;

        difficulty = this.value;
    })
}