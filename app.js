
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.defaults({
  // Defaults are used by all ScrollTriggers
  toggleActions: "play none reverse none", // Scoll effect Forward, Leave, Back, Back Leave
  markers: false, // Easaly remove markers for production.

});

const timelineHeader = gsap.timeline({
  scrollTrigger: {
    id: "ZOOM", // Custom label to the marker
    trigger: ".animation", // What element triggers the scroll
    scrub: true, // Add a small delay of scrolling and animation. `true` is direct
    start: "top top", // Start at top of Trigger and at the top of the viewport
    end: "+=100% 0px", // The element is 500px hight and end 50px from the top of the viewport
    pin: true, // Pin the element true or false
    markers: true
  } });


timelineHeader.

to(".girl-fading", {
  opacity: 0,
  scale: 3  },
"sameTime")

.to(".art-des", {
  opacity: 1},
"sameTime")

.to(".art-des", {
  opacity: 0,
scale: 3},
"after")

.to(".art", {
  opacity: 1},
"after");

let container = document.getElementById("container");
console.log(container.scrollWidth - document.documentElement.clientWidth)
gsap.to(container, {
  x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: container,
    invalidateOnRefresh: true,
    pin: true,
    scrub: 1,
    end: () => "+=" + container.offsetWidth
  }
})

console.log("HEIGHT " + window.innerHeight);
console.log("WIDTH " + window.innerWidth);




placeholder_input_one = document.querySelector('.contact-name');
placeholder_label_one = document.querySelector('.one > span');

placeholder_input_two = document.querySelector('.contact-surname');
placeholder_label_two = document.querySelector('.two > span');

placeholder_input_three = document.querySelector('.contact-email');
placeholder_label_three = document.querySelector('.three > span');

placeholder_input_four = document.querySelector('.contact-message');
placeholder_label_four = document.querySelector('.four > span');


placeholder_input_one.onchange = function() {
  if (placeholder_input_one.value !== '') {
      placeholder_label_one.style.transform = 'translateY(-350%)' ;
  } else {
      placeholder_label_one.style.transform = '';
  }  
}

placeholder_input_two.onchange = function() {
  if (placeholder_input_two.value !== '') {
      placeholder_label_two.style.transform = 'translateY(-350%)' ;
  } else {
      placeholder_label_two.style.transform = '';
  }  
}

placeholder_input_three.onchange = function() {
  if (placeholder_input_three.value !== '') {
      placeholder_label_three.style.transform = 'translateY(-350%)' ;
  } else {
      placeholder_label_three.style.transform = '';
  }  
}

placeholder_input_four.onchange = function() {
  if (placeholder_input_four.value !== '') {
      placeholder_label_four.style.transform = 'translateY(-570%)' ;
  } else {
      placeholder_label_four.style.transform = '';
  }  
}
