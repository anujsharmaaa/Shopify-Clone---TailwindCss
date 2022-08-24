
document.addEventListener("scroll", (e) => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 580) {
        navbar.style.backgroundColor = "#FFFFFF";
        navbar.style.boxShadow = "0 0 7px 2px rgba(0,0,0,.08)";
    } else {
        navbar.style.backgroundColor = "#fbf7ed";
        navbar.style.boxShadow = "none";
    }
});