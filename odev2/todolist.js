let ul = document.querySelector("ul");
ul.addEventListener("click", ev => {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
    else if (ev.target.tagName === "SPAN") {
        ev.target.parentElement.remove();
    }
})

let li = document.querySelectorAll("li");
li.forEach(item => {
    createSpan(item);
})

function createSpan(item) {
    let span = document.createElement("span");
    let x = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(x);
    item.appendChild(span);
}

function newElement() {
    let li = document.createElement("li");
    let task = document.querySelector("#task").value;
    if (task == "" || task.trim().length == 0) {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
        li.innerHTML = task;
        createSpan(li);
        ul.appendChild(li);
        document.querySelector("#task").value = "";
    }
}