const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
const icon = document.querySelector('i');

toggle.addEventListener("click" , () => {
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

