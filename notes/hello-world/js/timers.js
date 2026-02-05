let shades = [
    "#7fb3d5", //grey blue first
    "#76d7c4",
    "#f7dc6f",
    "#eb984e",
    "#cb4335",
    "#8e44ad",
    "#2e4053",
    "#e5e7e9",
];

window.onload = function () {
    console.log("timers running");
    for (let i = 0; i < 24; i++) {
        //for each x - make a column of changing y's
        for (let j = 0; j < 24; j++) {
            //create a grid cell with a div
            let parent = document.getElementById("parent");
            let d = document.createElement("div");
            d.classList.add("grid-cell");
            parent.appendChild(d);

            d.style.left = (i + 1) * 25 + "px";
            d.style.top = (j + 1) * 25 + "px";
        }
    }
}

let num = 24;
let currentShade = 0;
for (let index = 0; index < gridCells.length; index++) {
    //check if we reach the 24th
    if (index % 24 === 0) {
        //switch the shade ...
        if (currentShade === 0) {
            currentShade = 1;
        } else {
            currentShade = 0;
        }
    }
    gridCells[index].style.background = shades[currentShade];
}

let changingNum = 0;
setInterval(animate_cells_mod_rows, 1000);

function animate_cells_mod_rows() {
    console.log(changingNum);
    changingNum += 1;

    if (changingNum === 8) {
        changingNum = 0;
    }
}

function animate_cells_mod_rows() {
    console.log(changingNum);
    drawGrid();
    changingNum += 1;

    if (changingNum === 8) {
        changingNum = 0;
    }
}

/* draw the grid */
function drawGrid() {
    for (let index = 0; index < gridCells.length; index++) {

        //check what the remainder is ...
        if (index % changingNum === 0) {
            gridCells[index].style.background = shades[0];
        }
        else if (index % changingNum === 1) {
            gridCells[index].style.background = shades[1];
        }
        else if (index % changingNum === 2) {
            gridCells[index].style.background = shades[2];
        }
        else if (index % changingNum === 3) {
            gridCells[index].style.background = shades[3];
        }
        else if (index % changingNum === 4) {
            gridCells[index].style.background = shades[4];
        }
        else if (index % changingNum === 5) {
            gridCells[index].style.background = shades[5];
        }
        else if (index % changingNum === 6) {
            gridCells[index].style.background = shades[6];
        }
        else if (index % changingNum === 7) {
            gridCells[index].style.background = shades[7];
        }

    }
}
/* hmmm : we could just remove the if /else and write:
 gridCells[index].style.background = shades[index%changingNum];
 */