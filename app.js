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
    div.classList.add("square");
    
    numDivsAdded += 1;
    div.id = numDivsAdded.toString();
    let idNode = document.createElement("div");
    idNode.appendChild(document.createTextNode(numDivsAdded.toString()));
    idNode.style.color = "white";
    idNode.style.height = "100px";
    idNode.style.fontSize = "32px";
    idNode.style.display = "flex";
    idNode.style.margin = "auto";
    idNode.style.justifyContent = "center";
    idNode.style.alignItems = "center";
    div.appendChild(idNode);

    //div.addEventListener("mouseover", showId);
    document.body.appendChild(div);
}
