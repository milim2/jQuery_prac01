// hide all elements with class="containerTab", except for one that matches the clickable grid column
function openTab(tabName) {
    let i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

