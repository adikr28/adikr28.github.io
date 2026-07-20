/*=========================================
    SCROLL REVEAL
=========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .contact-card, .developer-card"
).forEach((el) => observer.observe(el));
/*=========================================
    ACTIVE NAVBAR
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/*=========================================
    HEADER EFFECT
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(13,17,23,.95)";
        header.style.boxShadow = "0 5px 30px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(13,17,23,.82)";
        header.style.boxShadow = "none";

    }

});