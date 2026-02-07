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
    let prompt;

    fetch('../dictionaries/birds.txt')
    .then(response => response.text())
    .then((data) => {
        birds = data;
        prompt = newPrompt();
    })
    .catch(error => console.error('Error fetching data:', error));


    fetch('../dictionaries/words.txt')
        .then(response => response.text())
        .then((data) => {
            words = data;
            prompt = newPrompt();
        })
        .catch(error => console.error('Error fetching data:', error));

    

    let textInput = document.querySelector('#textInput');
    textInput.addEventListener("keydown", function (e) {
        if (e.which === 13) {
            // prompt = document.querySelector('.prompt').textContent.toLowerCase();
            // const answer = document.querySelector()
            // if (answer.includes(prompt) && birds.includes(textInput.value)) {
            //     console.log("correct");
            // }
            // console.log(birds);
            // const birds = birds2.toLowerCase();

            const answer = textInput.value.toLowerCase();
            const result = birds.includes("\n" + answer + "\r");
            const checkInclude = answer.includes(prompt);
            


            if (result == true && checkInclude == true) {
                console.log("correct");
                textInput.value = "";
                prompt = newPrompt();
            }

            else {
                textInput.style.color = "red";
                setTimeout(function() {
                    textInput.style.color = "black";
                }, 500)
            }
        }
    })

    function newPrompt() {
        let prompt = bigrams[Math.floor(Math.random() * (bigrams.length + 1))][0];
        
        // trying to make it cycle through until it picks a bigram that is included in the bird list
        while (birds.includes(prompt) == false) {
            prompt = bigrams[Math.floor(Math.random() * (bigrams.length + 1))][0];
        }


        document.querySelector('.prompt').textContent = prompt.toUpperCase();
        return prompt;
    }
}