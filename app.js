
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
    pin: true, // Pin the element true or false,
  } });


timelineHeader.

to(".girl-fading", {
  scale: 5,
  opacity: 0 },
"sameTime")
.to(".art", {
  opacity: 1},
"sameTime");
ScrollTrigger.create({
  snap: 0.333
})



const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 3000,
  triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller)