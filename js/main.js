const hamburger = document.querySelector(".hamburger_menu");
const navbar = document.querySelector("nav");
const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
})


hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

