window.onload = function () {
    // get the canvas
    let canvas = document.getElementById("testCanvas");
    //get the context
    let context = canvas.getContext("2d");

    let rectSize = 50
    //a draw a rect:
    context.fillStyle = "rgba(255,0,0,255)";
    // draw a rect
    context.fillRect(canvas.width / 2, canvas.height / 2, rectSize, rectSize);
    // cut out a rect inside
    context.clearRect(canvas.width / 2 + rectSize / 4, canvas.height / 2 + rectSize / 4, rectSize / 2, rectSize / 2);

    context.fillStyle = "#8ED6FF"; // change the color we are using
    let xPos = canvas.width / 3;
    let yPos = canvas.height / 2;
    let radius = 40;
    let startAngle = 0;
    let endAngle = Math.PI * 2; //full rotation
    context.strokeStyle = "#FF0000"; // change the color we are using
    context.arc(xPos, yPos, radius, startAngle, endAngle, true);
    context.fill(); // set the fill
    context.lineWidth = 2; //change stroke
    context.stroke(); //set the stroke
};