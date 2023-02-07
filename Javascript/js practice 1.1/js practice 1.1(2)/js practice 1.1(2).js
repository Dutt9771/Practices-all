function add() {
    var li = document.createElement("li");
    li.innerHTML = "item";
    document
        .getElementById("lists")
        .appendChild(li);
}

function remove() {
    var myList = document.getElementById("lists");
    var item = document.querySelectorAll("#lists li");
    myList.removeChild(item[item.length - 1]);
}
