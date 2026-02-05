setup_A();
/** THEME: CALM  */
function setup_A() {
  console.log("in a");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_A`, "ani_canvA", aniA, aniB, aniC, aniD);

  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */
  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in aniA -teamA");

  }

  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */


  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creatve, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniB(parentCanvas) {
    console.log("in ani-B -teamA");

    let container = document.createElement("div");
    container.className = "TEAM_A_ANI_B_container";
    parentCanvas.appendChild(container);

    for (let i = 0; i < 20; i++) {
      let circle = document.createElement("div");
      circle.className = "TEAM_A_ANI_B_circle";

      circle.addEventListener("mouseover", function () {
        circle.style.backgroundColor = "#787ef8"; // soft lavender
        circle.style.opacity = "1";
        circle.style.transform = "scale(1.1)";
      });

      circle.addEventListener("mouseout", function () {
        circle.style.backgroundColor = "#35f0f3"; // calm blue
        circle.style.opacity = "1";
        circle.style.transform = "scale(1)";
      });

      container.appendChild(circle);
    }
  }
  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE HERE */
  /****************ANI C************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
   * using  ONLY key down and/or keyup -- any keys::
   */

  function aniC(parentCanvas) {
    console.log("in aniC -teamA");

    //set background color  of canvas
    parentCanvas.style.backgroundColor = "rgb(90, 155, 199)";
    let randomWords = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      //add a new word when we press space
      if (e.code === "ArrowUp") {
        console.log("c-up arrow down");
        let newWord = document.createElement("span");


        //make new word bounce around canvas like a DVD logo
        parentCanvas.appendChild(newWord);

        let x = Math.random() * parentCanvas.clientWidth;
        let y = Math.random() * parentCanvas.clientHeight;
        let speedX = 1;
        let speedY = 1;

        function moveWords() {
          x += speedX;
          y += speedY;

          // bounce on edges
          if (x <= 0 || x + newWord.offsetWidth >= parentCanvas.clientWidth) {
            speedX *= -1;
          }

          if (y <= 0 || y + newWord.offsetHeight >= parentCanvas.clientHeight) {
            speedY *= -1;
          }

          newWord.style.left = x + "px";
          newWord.style.top = y + "px";

          requestAnimationFrame(moveWords);
        }

        moveWords();


        //make words appear at random positions
        newWord.style.position = "absolute";
        newWord.style.left = Math.random() * parentCanvas.clientWidth + "px";
        newWord.style.top = Math.random() * parentCanvas.clientHeight + "px";
        //pick a random word from the array
        let randomIndex = Math.floor(Math.random() * randomWords.length);



        newWord.textContent = randomWords[randomIndex];
        newWord.classList.add("TEAM_A_c-word");
        parentCanvas.appendChild(newWord);
      }
      //remove a word when we press backspace
      else if (e.code === "ArrowDown") {
        console.log("c-down arrow down");
        let words = document.querySelectorAll(".TEAM_A_c-word");
        if (words.length !== 0) {
          words[words.length - 1].remove();
        }
      }
    };

    /*** THIS IS THE CALLBACK FOR KEY UP (*DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      //code for key down in here
      if (e.code === "ArrowUp") {
        console.log("up arrow up");
        console.log("c-up arrow up");
      }
    };
    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }

  /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
  function aniD(parentCanvas) {
    console.log("in ani-D -teamA");
  }
}