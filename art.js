const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img, .gallery2 img, .gallery3 img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");
const description = document.querySelector(".description");

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");


        const originalSrc = preview.getAttribute('data-original');
        original.src = `./img/illustrations/${originalSrc}`;

        const titleText = preview.title;
        caption.textContent = titleText;

        const altText = preview.alt;
        description.textContent = altText;
    });
});


modal.addEventListener("click", (e) => {
    if(e.target.classList.contains('modal') || e.target.classList.contains('close')) {
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

