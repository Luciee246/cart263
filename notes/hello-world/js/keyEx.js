window.onload = function () {
    console.log("keys");
};

let speedX = 5;
let fastSpeedX = 15;
let turbo = false;

window.setTimeout(addTimeoutText, 2000);
function addTimeoutText() {
    let parent = document.getElementById("parent");
    parent.innerHTML += " NEW TEXT TO APPEAR ";
}

window.addEventListener("keydown", function (event) {
    console.log(event);

    document.querySelector("#textContainer").textContent += `${event.key} `;
    document.querySelector("#textContainer").textContent += `${event.code} `;

    if (event.key === "ArrowRight") {
        document.getElementById("boxA").style.left =
            parseInt(document.getElementById("boxA").style.left) + speedX + "px";

    } else if (event.key === "ArrowLeft") {
        document.getElementById("boxA").style.left =
            parseInt(document.getElementById("boxA").style.left) - speedX + "px";
    }
    else if (event.code === "Space") {
        document.getElementById("boxB").style.background = "orange";

    }
    else if (event.code === "Space") {
        let bool = document.getElementById("boxB").getAttribute("custom-bool");
        if (bool === "off") {
            document.getElementById("boxB").style.background = "orange";
            document.getElementById("boxB").setAttribute("custom-bool", "on");
        } else {
            document.getElementById("boxB").style.background = "rgb(112, 184, 226)";
            document.getElementById("boxB").setAttribute("custom-bool", "off");
        }
    }
    window.setInterval(moveBoxB, 20);
    function moveBoxB() {
        document.getElementById("boxB").style.left =
            parseInt(document.getElementById("boxB").style.left) + speedX + "px";
    }


    window.addEventListener("keydown", function (event) {
        // document.querySelector("#textContainer").textContent += `${event.key} `;

        if (event.key === "ArrowRight") {
            document.getElementById("boxA").style.left =
                parseInt(document.getElementById("boxA").style.left) + speedX + "px";
        } else if (event.key === "ArrowLeft") {
            document.getElementById("boxA").style.left =
                parseInt(document.getElementById("boxA").style.left) - speedX + "px";
        }
    })

    window.addEventListener("keyup", function (event) {
        if (event.key === "Shift") {
            document.getElementById("boxA").style.background = "rgb(108, 132, 146)";
        }
    })

});