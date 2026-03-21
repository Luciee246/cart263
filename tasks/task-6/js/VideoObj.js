class VideoObj {
  constructor(x, y, w, h, videoElement, context) {
    this.videoElement = videoElement;
    this.context = context;

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.shapeX = 10;
    this.shapeY = 10;
    this.shapeCol = "black";

    // filter values
    this.blur = 0;
    this.sepia = 0;
    this.hue = 0;
    this.invert = 0;

    let self = this;

    // blur
    let blurBtn = document.getElementById("filter_button_blur");
    let blurInput = document.getElementById("blurnum");

    if (blurBtn && blurInput) {
      blurBtn.addEventListener("click", function () {
        self.blur = Number(blurInput.value);
      });
    }

    // sepia
    let sepiaBtn = document.getElementById("filter_button_sepia");
    let sepiaInput = document.getElementById("sepianum");

    if (sepiaBtn && sepiaInput) {
      sepiaBtn.addEventListener("click", function () {
        self.sepia = Number(sepiaInput.value);
      });
    }

    // hue
    let hueBtn = document.getElementById("filter_button_hue");
    let hueInput = document.getElementById("huenum");

    if (hueBtn && hueInput) {
      hueBtn.addEventListener("click", function () {
        self.hue = Number(hueInput.value);
      });
    }

    // invert
    let invertBtn = document.getElementById("filter_button_invert");
    let invertInput = document.getElementById("invertnum");

    if (invertBtn && invertInput) {
      invertBtn.addEventListener("click", function () {
        self.invert = Number(invertInput.value);
      });
    }
  }

  display() {
    this.context.save();

    this.context.filter =
      "blur(" + this.blur + "px) " +
      "sepia(" + this.sepia + "%) " +
      "hue-rotate(" + this.hue + "deg) " +
      "invert(" + this.invert + "%)";

    this.context.drawImage(this.videoElement, this.x, this.y, this.w, this.h);

    this.context.filter = "none";

    // rectangle
    this.context.fillStyle = this.shapeCol;
    this.context.fillRect(this.shapeX, this.shapeY, 50, 50);

    this.context.restore();
  }

  changeColor(newCol) {
    this.shapeCol = newCol;
  }

  updatePositionRect(mx, my) {
    this.shapeX = mx - 25;
    this.shapeY = my - 25;
  }

  update(videoElement) {
    this.videoElement = videoElement;
  }
}