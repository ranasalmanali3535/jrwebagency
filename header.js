
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

    menuToggle.setAttribute("aria-expanded", isOpen);

});

// Close menu after clicking any link
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        menuToggle.setAttribute("aria-expanded", "false");
    });
});
