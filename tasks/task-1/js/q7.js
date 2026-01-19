"use strict";

function setup() {
    createCanvas(600, 600);
    red = random(255);
    green = random(255);
    blue = random(255);
}

let radius = 30;
let red;
let green;
let blue;
let circle = true;

function draw() {
    background(0);

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            push();
            fill(red, green, blue);
            ellipse(radius * i + radius / 2, j * radius + radius / 2, radius);
            pop();
        }
    }

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            push();
            fill(red, green, blue);
            if (circle == true) {
                ellipse(radius * i + radius / 2, j * radius + radius / 2, radius);
            } else {
                rect(radius * i, j * radius, radius);
            }
            pop();
        }
    }

    function keyPressed() {
        if (keyCode === 32) {
            red = random(255);
            green = random(255);
            blue = random(255);
        }
    }

    function mousePressed() {
        if (circle == true) {
            circle = false;

        } else {
            circle = true;
        }
    }
}