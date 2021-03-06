//Final Project

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
})

//Every to do should have an X to the right that will delete the todo
var list = document.getElementsByTagName("li");
var i;
for (i = 0; i < list.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    list[i].appendChild(span);
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

//A new to do should be displayed below any previous to dos
function addItem() {
    var list = document.getElementById("list");
    var item = document.createElement("li");
    var input = document.getElementById("input");
    var value = input.value;
    var itemText = document.createTextNode(value);
    item.appendChild(itemText);
    list.appendChild(item);

    var span = document.createElement("span");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    item.appendChild(span);

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

//Every to do in the list should have a check button next to it to check off the todo and mark it complete
    var span = document.createElement("span");
    var txt = document.createTextNode("\u2713");
    span.className = "complete";
    span.appendChild(txt);
    item.appendChild(span);

    var complete = document.getElementsByClassName("complete");
    for (i = 0; i < complete.length; i++) {
        complete[i].onclick = function () {
            var span = this.parentElement;
            span.className = "checked";
        }
    }
}