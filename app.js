var numDivsAdded = 0;

let btn = document.createElement("button");
btn.appendChild(document.createTextNode("Add Div"));
btn.style.display = "block";
document.body.appendChild(btn);
btn.addEventListener("click", addDiv);

function addDiv(event){
    let div = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.display = "inline-block";
    div.style.margin = "2px";
    div.style.padding = "auto";
    div.classList.add("square");
    
    numDivsAdded += 1;
    div.id = numDivsAdded.toString();
    let idNode = document.createElement("div");
    idNode.classList.add("idNode");
    idNode.appendChild(document.createTextNode(numDivsAdded.toString()));
    idNode.style.color = "white";
    idNode.style.height = "100px";
    idNode.style.fontSize = "32px";
    idNode.style.display = "none";
    idNode.style.justifyContent = "center";
    idNode.style.alignItems = "center";
    div.appendChild(idNode);

    div.addEventListener("mouseenter", showId);
    div.addEventListener("mouseleave", hideId);
    div.addEventListener("click", setRandomColor);
    document.body.appendChild(div);
}

function showId(event)
{
    // console.log(event)
    let target = event.target.querySelector(".idNode");
    // console.log(target);
    target.style.display = "flex";
}

function hideId(event)
{
    let target = event.target.querySelector(".idNode");
    target.style.display = "none";
}

function setRandomColor(event)
{
    let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "saddlebrown"];
    let index = Math.round(Math.random()*7);
    event.target.style.backgroundColor = colors[index];
}
