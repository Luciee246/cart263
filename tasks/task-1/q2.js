"use strict";

function setup() {
    createCanvas(600, 600);

    drawEllipse();
    drawEllipse();
    drawEllipse();
}

function draw() {
    background(50, 100, 200);


}

function drawEllipse() {
    push();
    noStroke();
    x: 20;
    y: 20;
    size: 20;
    r: 200;
    g: 180;
    b: 100;
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
