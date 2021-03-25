TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {

  licenseKey: '12DB83B0-9342430D-87AEE7CB-5AFDE89E',
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelectorAll(".title");
    const description = section.querySelectorAll(".description");
    const description2 = section.querySelectorAll(".description-n2");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
    if(destination.index === 2 || destination.index === 4){
        tl.fromTo(description, 1, { x: "-80%", opacity: 0 }, { x: "-40%", opacity: 1 });
    }else{
        tl.fromTo(description, 1, { x: "40%", opacity: 0 }, { x: "-40%", opacity: 1 });
    }

}});

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




console.log("WINDOW HEIGHT " + window.innerHeight);
console.log("WINDOW WIDTH " + window.innerWidth);