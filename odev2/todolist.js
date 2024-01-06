let list = document.querySelectorAll("li");
list.forEach(item => {
    item.addEventListener("click", function(){
        (this.classList.value != "checked" ? this.classList.add("checked") : this.classList.remove("checked"))
    })
})