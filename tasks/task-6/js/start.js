window.onload = go_all_stuff;

function go_all_stuff() {
    console.log("go");

    /* for loading the video */
    let videoEl = document.getElementById("video-birds");
    window.addEventListener("click", function () {
        if (videoEl.currentTime === 0) {
            videoEl.play()
        }
    })


    videoEl.loop = true;

    let theCanvases = document.querySelectorAll(".canvases");
    let theContexts = [];
    //add a context for each canvas and put into an array

    for (let i = 0; i < theCanvases.length; i++) {
        let context = theCanvases[i].getContext("2d");
        theContexts.push(context);
    }

    let drawingBoardA = new DrawingBoard(theCanvases[0], theContexts[0], theCanvases[0].id);
    //add a circular object to canvas A
    drawingBoardA.addObj(new CircularObj(100, 100, 20, "#FFC300", "#E6E6FA", drawingBoardA.context))
    drawingBoardA.display();


    loadfunction();
    let drawingBoardB = new DrawingBoard(theCanvases[1], theContexts[1], theCanvases[1].id);
    //add a rectangular object to canvas B
    drawingBoardB.addObj(new RectangularObj(100, 100, 50, 70, "#FF5733", "#E6E6FA", drawingBoardB.context))
    drawingBoardB.display();


    let drawingBoardC = new DrawingBoard(theCanvases[2], theContexts[2], theCanvases[2].id);
    //add a freestyle object to canvas C
    drawingBoardC.addObj(new FreeStyleObj(10, 100, 300, "#CF9FFF", "#CF9FFF", drawingBoardC.context))
    drawingBoardC.display();

    let drawingBoardD = new DrawingBoard(theCanvases[3], theContexts[3], theCanvases[3].id);
    drawingBoardD.addObj(new VideoObj(0, 0, 400, 300, videoEl, drawingBoardD.context))
    drawingBoardD.display();


    /*** RUN THE ANIMATION LOOP  */
    window.requestAnimationFrame(animationLoop);

    function animationLoop() {
        /*** CALL THE EACH CANVAS TO ANIMATE INSIDE  */
        drawingBoardA.animate();
        drawingBoardB.animate();
        drawingBoardC.animate();
        drawingBoardD.run(videoEl)
        window.requestAnimationFrame(animationLoop);
    }



    /** TASK 1:(Drawing Board A) - 
     *  1: animate the circle object(s) somehow/anyhow.. (there may be more than one)
     * You can use the mouse coordinates - the canvas ALREADY has event listeners for mouse click and mouse move
     * implemeneted, as well as the proper mouseX and mouseY (NO need to add)
     * -> ensure that any properties that are changed by the circle object occur in the update method already provided,
     * and use the member properties provided (you may add new ones ... or not :)
     * 
     * 2: add new circle objects (different sizes, positions, colors) to the canvas (board A) using some form of user interaction
     * 3: remove new circle objects from the canvas (board A) using some other form of user interaction 
     * Please for this exercise - do not add any new shapes other than the circular object...
     * 
     */


    /** TASK 2:(Drawing Board B) - 
     *  1: Affect the rectangle by input from the microphone somehow, in real time...
     *  at least two properties of the rectangle need to update and change...
     *  2: apply some arbitrary animation to the rectangle obj (change the properties in the update method provided)
     * -> the code for the microphone has NOT been added  - you need to implement it correctly...
     *  
     */

    /** TASK 3:(Drawing Board C) - 
     *  1: Affect the free-style shape by input from the microphone somehow, in real time...
     *  at least two properties of the free-style shape need to update and change...
     *  2: apply some arbitrary animation to the free-style shape (change the properties in the update method provided)
     * -> the code for the microphone has NOT been added  - you need to implement it correctly...
     *  
     */

    window.audioContext = null;
    window.analyser = null;
    window.dataArray = null;

    async function setupMic() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

        window.audioContext = new AudioContext();
        const source = window.audioContext.createMediaStreamSource(stream);

        window.analyser = window.audioContext.createAnalyser();
        window.analyser.fftSize = 256;

        source.connect(window.analyser);

        const bufferLength = window.analyser.frequencyBinCount;
        window.dataArray = new Uint8Array(bufferLength);

        console.log("MIC WORKING ");
    }

    // start mic on first click
    window.addEventListener("click", function () {
        setupMic();
    }, { once: true });




}