window.onload = function () {

    let theButtons = document.getElementsByClassName("titleBar");
    for (let i = 0; i < theButtons.length; i++) {
        theButtons[i].addEventListener("click", saveStateHandler);
    }

    // the callback function
    function saveStateHandler(event) {
        console.log(this.parentElement); // get parent element
        let buttonID = this.parentElement.id;
        let inputValue = this.parentElement.querySelector("input").value;
        console.log(inputValue);

        if (inputValue !== "") {
            // Save the value to local storage
            localStorage.setItem(buttonID, inputValue);
            // Reset input value
            inputValue = "";
            console.log(inputValue);
        }
    }

    document.getElementById("refresh").addEventListener("click", retrieveHandler);

    // callBack function
    function retrieveHandler() {
        for (let [key, value] of Object.entries(localStorage)) {
            let textBox = document.querySelector(`div[data-ref=${key}]`);
            textBox.innerHTML = value;
        }
    }
};

