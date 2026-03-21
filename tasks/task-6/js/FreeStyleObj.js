class FreeStyleObj {
  constructor(x, y, length, f_color, s_color, context) {
    // We write instructions to set up a Flower here
    // Position and size information
    this.x = x;
    this.y = y;
    this.fill_color = f_color;
    this.stroke_color = s_color;
    this.theta = 0;
    this.length = length;
    this.yOffset = 20;
    this.angularSpeed = .07;
    this.context = context;
    this.analyser = null;
    this.dataArray = null;
    this.volume = 0;

  }

  display() {
    this.context.strokeStyle = this.stroke_color;
    this.context.beginPath();

    let centerY = this.y;

    for (let i = 0; i < this.length; i++) {
      let x = this.x + i;

      // wave based on sound 
      let y = centerY + Math.sin(this.theta + i * 0.05) * this.yOffset;

      this.context.lineTo(x, y);
    }

    this.context.stroke();
  }

  update() {

    /** Mic data */
    if (window.analyser && window.dataArray) {

      this.analyser = window.analyser;
      this.dataArray = window.dataArray;

      //fill array with audio data
      this.analyser.getByteFrequencyData(this.dataArray);

      // volume
      let sum = 0;
      for (let i = 0; i < this.dataArray.length; i++) {
        sum += this.dataArray[i];
      }

      let avg = sum / this.dataArray.length;

      // smooth the volume value
      this.volume = this.volume * 0.8 + avg * 0.2;
    }

    /** Mic effects */

    // shape height reacts
    this.yOffset = 20 + this.volume * 0.5;

    // wave speed reacts
    this.angularSpeed = 0.01 + this.volume * 0.002;

    // color reacts
    let r = Math.min(255, this.volume * 2);
    this.stroke_color = `rgb(${r}, 100, 255)`;


    /** Animation */

    // move sideways
    this.x += 1;

    // loop back
    if (this.x > this.context.canvas.width) {
      this.x = 0;
    }

  }
}