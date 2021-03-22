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


const logo = document.querySelectorAll('#logo path');

for(let i = 0; i < logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}