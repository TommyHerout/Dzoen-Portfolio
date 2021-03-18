gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

// DEFAULT SETTINGS
ScrollTrigger.defaults({
  toggleActions: "play none reverse none", // FORWARD, LEAVE, BACK, LEAVE
  markers: false, // MARKERS FOR DEBUGGING
});

const timelineHeader = gsap.timeline({
  scrollTrigger: {
    id: "ZOOM", // Custom label to the marker
    trigger: ".animation", // What element triggers the scroll
    scrub: true, // Add a small delay of scrolling and animation. `true` is direct
    start: "top top", // Start at top of Trigger and at the top of the viewport
    end: "+=500% 0px", // The element is 500px hight and end 50px from the top of the viewport
    pin: true, // Pin the element true or false
  }
});

timelineHeader.
  to(".girl-fading", {
    opacity: 0,
    scale: 3
  },
    "sameTime")

  .to(".art-des", {
    opacity: 1
  },
    "sameTime")

  .to(".art-des", {
    opacity: 0,
    scale: 3
  },
    "after")

  .to(".art", {
    opacity: 1
  },
    "after")
  .to(".art", {
    y: 100
  });


let container = document.getElementById("container");

if (window.innerWidth > 800) {
  gsap.to(container, {
    x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
      trigger: container,
      invalidateOnRefresh: true,
      pin: true,
      scrub: 2,
      markers: false,
      end: () => "+=400% 0px"
    }
  })
}


placeholder_input_one = document.querySelector('.contact-name');
placeholder_label_one = document.querySelector('.one > span');

placeholder_input_two = document.querySelector('.contact-surname');
placeholder_label_two = document.querySelector('.two > span');

placeholder_input_three = document.querySelector('.contact-email');
placeholder_label_three = document.querySelector('.three > span');

placeholder_input_four = document.querySelector('.contact-message');
placeholder_label_four = document.querySelector('.four > span');


placeholder_input_one.onchange = function () {
  if (placeholder_input_one.value !== '') {
    placeholder_label_one.style.transform = 'translate(5vw,-300%)';
  } else {
    placeholder_label_one.style.transform = '';
  }
}

placeholder_input_two.onchange = function () {
  if (placeholder_input_two.value !== '') {
    placeholder_label_two.style.transform = 'translate(5vw,-300%)';
  } else {
    placeholder_label_two.style.transform = '';
  }
}

placeholder_input_three.onchange = function () {
  if (placeholder_input_three.value !== '') {
    placeholder_label_three.style.transform = 'translate(5vw,-300%)';
  } else {
    placeholder_label_three.style.transform = '';
  }
}

placeholder_input_four.onchange = function () {
  if (placeholder_input_four.value !== '') {
    placeholder_label_four.style.transform = 'translate(5vw,-400%)';
  } else {
    placeholder_label_four.style.transform = '';
  }
}

/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
$(document).ready(function () {

  //window and animation items
  var animation_elements = $.find('.sections-mobile');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function () {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });
  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function () {
    check_if_in_view()
  })
  //trigger our scroll event on initial load
  $(window).trigger('scroll');

});

$(document).ready(function () {
  $('.contact-form-button').click(function (event) {

    var firstName = $('.contact-name').val();
    var surname = $('.contact-surname').val();
    var email = $('.contact-email').val();
    var message = $('.contact-message').val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if(firstName.length <= 2) {
      Swal.fire({
        icon: 'error',
        title: 'What?',
        text: 'What is your name? It needs to be longer than 2 characters for sure.'
      })
      event.preventDefault()
    }
    else if(firstName == '' || firstName == null || firstName.replace(/\s/g, "") == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oh no!',
        text: 'Name is missing.'
      })
      event.preventDefault()
    }

    if(surname.length <= 2) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Surname needs to be longer than 2 characters.'
      })
      event.preventDefault()

    }else if(surname == '' || surname == null || surname.replace(/\s/g, "") == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Surname is missing.'
      })
      event.preventDefault()
    } 

    if(email.length <= 4) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email length needs to be atleast 5 characters.'
      })
      event.preventDefault()

    }else if (!pattern.test(email)) {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Provide valid email, so I can contact you :).'
      })
      event.preventDefault()
    }

    if(message.length <= 2) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Message needs to be longer than 2 characters.'
      })
      event.preventDefault()

    }else  if(message == null || message.replace(/\s/g, "") == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Message is missing.'
      })
      event.preventDefault()
    }
  })
})

console.log("WINDOW HEIGHT " + window.innerHeight);
console.log("WINDOW WIDTH " + window.innerWidth);