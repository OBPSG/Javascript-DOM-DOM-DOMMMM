var numDivsAdded = 0;

let btn = document.createElement("button");
btn.appendChild(document.createTextNode("Add Div"));
btn.style.display = "block";
document.body.appendChild(btn);
btn.addEventListener("click", addDiv);

let container = document.createElement("div");
container.classList.add("container");
container.style.display = "flex"
container.style.flexDirection = "row";
container.style.flexWrap = "wrap"
document.body.appendChild(container);

function addDiv(event) {
    let div = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.margin = "2px";
    div.classList.add("square");

    numDivsAdded += 1;
    div.id = numDivsAdded.toString();
    let idNode = document.createElement("div");
    idNode.classList.add("idNode");
    idNode.appendChild(document.createTextNode(numDivsAdded.toString()));
    idNode.style.color = "white";
    idNode.style.fontSize = "32px";
    idNode.style.display = "none";
    div.appendChild(idNode);

    div.addEventListener("mouseenter", showId);
    div.addEventListener("mouseleave", hideId);
    div.addEventListener("click", setRandomColor);
    div.addEventListener("dblclick", tryRemoveDiv);
    container.appendChild(div);
}

function showId(event) {
    let target = event.target.querySelector(".idNode");
    target.style.display = "flex";
}

function hideId(event) {
    let target = event.target.querySelector(".idNode");
    target.style.display = "none";
}

function setRandomColor(event) {
    let colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "saddlebrown",
    ];
    let index = Math.round(Math.random() * 7);
    event.target.style.backgroundColor = colors[index];
}

function tryRemoveDiv(event) {
    let squares = document.getElementsByClassName("square");
    let DivId = parseInt(event.target.id);

    //find the position in the HTMLCollection the element that was clicked on exists in
    let targetedDivIndex = -1;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].id == DivId.toString()) {
            targetedDivIndex = i;
            break;
        }
    }

    //Check if div id is even or odd
    if (DivId % 2 == 0) {
        //grab div after the one that was clicked on, if it exists
        let divToRemove = squares[targetedDivIndex + 1];
        if (divToRemove != undefined) {
            divToRemove.remove();
        } else {
            alert("There needs to be a square after the one clicked on to delete!");
        }
    }
    //try to delete square before the one clicked on because its id is odd
    else {
        let divToRemove = squares[targetedDivIndex - 1];
        if (divToRemove != undefined) {
            divToRemove.remove();
        } else {
            alert("There needs to be a square before the one clicked on to delete!");
        }
    }
}
