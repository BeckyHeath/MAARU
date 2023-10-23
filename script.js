document.querySelector(".hamburger").addEventListener("click", function() {
    var menu = document.querySelector("nav ul");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});