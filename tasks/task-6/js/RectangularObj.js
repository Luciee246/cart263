"use strict";

let audioContext;
let microphoneIn;
let analyser;

let canvas;
let ctx;

class RectangularObj {
  constructor(x, y, w, h, f_color, s_color, context) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.context = context;
  }

  display() {
    this.context.fillStyle = this.fill_color;
    this.context.fillRect(this.x, this.y, this.width, this.height);

    this.context.strokeStyle = this.stroke_color;
    this.context.lineWidth = 2;
    this.context.strokeRect(this.x, this.y, this.width, this.height);
  }

  // Visualsss
  update() {
    if (!analyser) {
      return;
    }

    analyser.fftSize = 1024;
    const bufferLength = analyser.fftSize;
    const dataArrayFreq = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArrayFreq);

    // Get mic value
    let micValue = dataArrayFreq[0] || 0;

    // Keep a minimum visible size and scale from mic value.
    const minSize = 30;
    const scale = 2;
    const newWidth = Math.max(minSize, micValue * scale);
    const newHeight = Math.max(minSize, micValue * scale);

    this.width = newWidth;
    this.height = newHeight;
  }
}


//window.onload = loadfunction

async function loadfunction() {
  console.log("window loaded");
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  analyser = audioContext.createAnalyser();

  canvas = document.getElementById("partB");
  ctx = canvas.getContext("2d");

  console.log("before mic");
  await getMicrophoneInput();
};

// Microphoneee
async function getMicrophoneInput() {
  console.log("here we are");


  try {
    console.log("before mic input"); // check if we get here before mic input
    let audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    console.log("got the audio stream"); // check if we got the audio stream
    microphoneIn = audioContext.createMediaStreamSource(audioStream);

    console.log("got the microphone input");

    const filter = audioContext.createBiquadFilter();

    // Mic to filter to analyser
    microphoneIn.connect(filter);
    filter.connect(analyser);

  } catch (err) {
    console.log("had an error getting the microphone: " + err);
  }
}