"use strict";

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0, 0, 0);

    push();
    noStroke();
    fill(200, 180, 100);
    rect(400, 0, 600);
    pop();

    push();
    noStroke();
    fill(200, 50, 150);
    ellipse(50, 50, 40);
    pop();

    push();
    noStroke();
    fill(125, 200, 50);
    ellipse(100, 100, 80);
    pop();
}