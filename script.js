document.querySelector(".hamburger").addEventListener("click", function() {
    const navMenu = document.querySelector("header nav ul");
    
    if (navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
    } else {
        navMenu.classList.add("open");
    }
});