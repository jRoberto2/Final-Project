//Final Project

//Every to do should have an X to the right that will delete the todo
var list = document.getElementById("list");
var item = document.getElementsByName("li");
var i;
for (i = 0; i < item.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("X");
    span.className("close");
    span.appendChild(txt);
    item[i].appendChild(span);
}

//Delete to do
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//Every to do in the list should have a check button next to it to check off the todo and mark it complete
var list = document.getElementById("list");
var item = document.getElementsByName("li");
list.addEventListener("click", function(e) {
    if (e.target.tagName === "li") {
        e.target.classList.toggle("complete");
    }
}, false);

//A new to do should be displayed below any previous to dos
function addItem() {
    var list = document.getElementById("list");
    var item = document.createElement("li");
    var input = document.getElementById("input");
    var value = input.value;
    var itemText = document.createTextNode(value);
    item.appendChild(itemText);
    list.appendChild(item);
}

var item = document.getElementsByName("li");
var span = document.createElement("span");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
item.appendChild(span);

for (i = 0; o < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}