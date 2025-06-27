let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let value = input.value;
    if(value.trim() === "") {
        alert("Please enter a valid value");
        return;
    }
    let li = document.createElement("li");
    let buttonDel = document.createElement("button");

    buttonDel.innerText = "Delete";
    li.innerText = value;

    li.appendChild(buttonDel);
    ul.appendChild(li);

    buttonDel.addEventListener("click", function() {
        ul.removeChild(li);
    });
    input.value = "";

})
