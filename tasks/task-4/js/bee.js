class Bee {
    constructor(x, y, beeSize, beeHive) {
        this.x = x;
        this.y = y;
        this.beeSize = beeSize;
        this.beeHive = beeHive;
        this.beeImg = document.createElement("img");
        this.vx = 5;
        this.vy = 5;

        let self = this;

        function animateBee() {
            self.animateBee();

            requestAnimationFrame(animateBee);
        }
        window.requestAnimationFrame(animateBee);
    }

    renderBee() {
        this.beeImg.classList.add("bee");
        this.beeImg.src = './images/danny.png';
        this.beeImg.style.width = this.beeSize + "px";
        this.beeImg.style.position = "absolute";
        this.beeImg.style.zIndex = 1;
        document.querySelector(".sky").appendChild(this.beeImg)
    }

    animateBee() {
        this.x += this.vx;
        this.y += this.vy;
        this.beeImg.style.left = this.x + "px";
        this.beeImg.style.top = this.y + "px";

        if (this.x > window.innerWidth - this.beeSize || this.x < 0) {
            this.vx = -this.vx;
        }
        if (this.y > window.innerHeight - this.beeSize || this.y < 0) {
            this.vy = -this.vy;
        }
    }
}