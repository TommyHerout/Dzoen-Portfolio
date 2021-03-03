
gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to(".paper-plane", {
  duration: 6,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: 100, y: -20},
           {x: 300, y: 10},
           {x: 500, y: 100},
           {x: 700, y: -200},
           {x: 350, y: -50},
           {x: 600, y: 100},
           {x: 800, y: 0},
           {x: window.innerWidth, y: -250}],

           autoRotate: true,
           curviness: 0.5,
  },
});

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