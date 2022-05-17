function toggleDarkMode() {
    var element = document.body;
    var dark = element.classList.toggle("dark-mode");
    if (dark)
        document.getElementById("dark-mode").src = "assets/moon-white.png";
    else
        document.getElementById("dark-mode").src = "assets/moon.png";
}