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
 * Made with p5
 * https://p5js.org/
 */

"use strict";

window.onload = setup;

function setup() {
    let birds = document.querySelector('.birds').textContent;

    let textInput = document.querySelector('#textInput');
    textInput.addEventListener("keydown", function (e) {
        if (e.which === 13) {
            const prompt = document.querySelector('.prompt').textContent;
            // const answer = document.querySelector()
            // if (answer.includes(prompt) && birds.includes(textInput.value)) {
            //     console.log("correct");
            // }

            console.log(textInput.value.toUpperCase());
            // const birds = birds.textContent.toLowerCase();
            const answer = textInput.value.toLowerCase();
            const result = birds.includes(answer + "\n");


            if (result == true && birdsUp.includes(answer + "\n")) {
                console.log("correct");
            }
        }
    })
}