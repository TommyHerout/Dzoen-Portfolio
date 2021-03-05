const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img, .gallery2 img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");


        const originalSrc = preview.getAttribute('data-original');
        original.src = `./img/${originalSrc}`;

        const altText = preview.alt;
        caption.textContent = altText;
    });
});


modal.addEventListener("click", (e) => {
    if(e.target.classList.contains('modal')) {
        modal.classList.remove("open");
    }
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        // TOGGLE NAVBAR
        nav.classList.toggle('nav-active');

        // ANIMATION
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 2.5}s`;
            }
        });

        // BURGER
        burger.classList.toggle('toggle')
    });
}

navSlide();