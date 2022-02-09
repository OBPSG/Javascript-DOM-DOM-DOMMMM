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
    document.body.appendChild(div);
}
