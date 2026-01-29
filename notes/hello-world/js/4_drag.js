window.onload = setup;
function setup() {
    console.log("drag ex");

    let handleDragging = function (event) {
        console.log("on drag")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);

        event.dataTransfer.clearData();
        event.dataTransfer.setData("objDraggedID", event.target.id);
    };


    let handleDraggingStop = function (event) {
        console.log("on stop")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);
        // HERE - this refers to the window
        console.log(this);
    };

    let handleDrop = function (event) {
        event.preventDefault();
        console.log("dropped");

        if (event.target.id === "dropTarget") {
            let theObj = event.dataTransfer.getData("objDraggedID");
            console.log(theObj);
            //event.target is the DIV we have dropped into ...
            // and so move it there..
            event.target.appendChild(document.getElementById(theObj));
        }
    };

    // IMPORTANT::By default, data/elements cannot be dropped in other elements.
    //To allow a drop, we must prevent the default handling of the element
    window.addEventListener("dragover", function (event) {
        console.log("over");
        event.preventDefault();
    });

    window.addEventListener("dragstart", handleDragging);
    window.addEventListener("dragend", handleDraggingStop);
    window.addEventListener("drop", handleDrop);
}