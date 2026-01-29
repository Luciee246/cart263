window.onload = setup;
function setup() {
    let selection = document.querySelectorAll(".mouseclick-active-section");

    selection.forEach((element) => {
        element.addEventListener("click", function (e) {

            if (this.getAttribute("custom-bool") == "inactive") {

                this.setAttribute("custom-bool", "active");

                console.log("is inactive");
                console.log(this.id);

                this.style.opacity = "0.5";
            }
            else {
                this.setAttribute("custom-bool", "inactive");

                this.style.opacity = "1.0";
            }

            document.querySelector("#bubbleButton").addEventListener("click", function () {
                console.log("button clicked");

                let bubble = document.createElement("div");
                bubble.classList.add("bubble");
                bubble.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
                bubble.style.top = `${Math.random() * (window.innerHeight - 200)}px`;

                let r = Math.ceil(Math.random() * 255);
                let g = Math.ceil(Math.random() * 255);
                let b = Math.ceil(Math.random() * 255);

                bubble.style.background = `rgba(${r},${g},${b})`;
                document.getElementById("top-layer").appendChild(bubble)
            });
        });
    });
}