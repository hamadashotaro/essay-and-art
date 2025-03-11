function open_sidebar() {
    // document.getElementById("main").style.marginLeft = "25%";
    // document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("items").style.display = "block";
    document.getElementById("menu").style.display = 'none';
}
function close_sidebar() {
    // document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("items").style.display = "none";
    document.getElementById("menu").style.display = "inline-block";
}