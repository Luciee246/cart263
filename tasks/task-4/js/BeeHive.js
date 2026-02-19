class BeeHive {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;

        this.beeHiveDiv = document.createElement("div");
        this.bees = [];

        this.floatOffset = 0;
        this.floatDirection = 1;
    }

    renderBeeHive() {

        this.beeHiveDiv.classList.add("beehive");
        this.beeHiveDiv.style.left = this.x + "px";
        this.beeHiveDiv.style.top = this.y + "px";

        // create 6 hexagons
        let positions = [
            { x: 25, y: 0 },
            { x: 0, y: 40 },
            { x: 50, y: 40 },
            { x: 25, y: 80 },
            { x: 75, y: 80 },
            { x: 50, y: 120 }
        ];

        for (let pos of positions) {
            let hex = document.createElement("div");
            hex.classList.add("hex");

            hex.style.left = pos.x + "px";
            hex.style.top = pos.y + "px";

            hex.style.backgroundColor =
                `rgb(${this.color.r},${this.color.g},${this.color.b})`;

            hex.style.setProperty('--hex-color',
                `rgb(${this.color.r},${this.color.g},${this.color.b})`);

            this.beeHiveDiv.appendChild(hex);
        }

        document.querySelector(".grass")
            .appendChild(this.beeHiveDiv);

        this.animateHive();
        this.addClickEvent();
    }

    animateHive() {
        const animate = () => {

            this.floatOffset += 0.3 * this.floatDirection;

            if (this.floatOffset > 10 || this.floatOffset < -10) {
                this.floatDirection *= -1;
            }

            this.beeHiveDiv.style.transform =
                `translateY(${this.floatOffset}px)`;

            requestAnimationFrame(animate);
        };

        animate();
    }

    addBee(bee) {
        this.bees.push(bee);
    }

    countBeesAtHome() {
        let count = 0;

        for (let bee of this.bees) {
            if (bee.isAtHome) {
                count++;
            }
        }

        return count;
    }

    addClickEvent() {
        this.beeHiveDiv.addEventListener("click", () => {

            let existing = document.querySelector(".bee-count");
            if (existing) existing.remove();

            let countDiv = document.createElement("div");
            countDiv.classList.add("bee-count");

            countDiv.style.left = this.x + "px";
            countDiv.style.top = (this.y - 40) + "px";

            countDiv.innerText =
                "Bees at home: " + this.countBeesAtHome();

            document.querySelector(".grass")
                .appendChild(countDiv);

            setTimeout(() => {
                countDiv.remove();
            }, 2000);
        });
    }
}