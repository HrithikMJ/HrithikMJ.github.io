function myFunction() {

  document.getElementById("head-soc").classList.toggle("show");
}


function res(a) {
  if (a == 'Instagram') {
    document.getElementById("heading").innerHTML = "";
    document.getElementById("para").innerHTML = "Check <br> out my  <br> instagram!!";
  }
  else if (a == 'GitHub') {
    document.getElementById("heading").innerHTML = "";
    document.getElementById("para").innerHTML = "Check <br>out my  <br> Github!!";
  }
  else if (a == 'Twitter') {
    document.getElementById("heading").innerHTML = "";
    document.getElementById("para").innerHTML = "Tweet <br> me!!";

  }
  else if (a == 'email') {
    document.getElementById("heading").innerHTML = "";
    document.getElementById("para").innerHTML = "E-mail <br>me !!";

  }
  else {
    document.getElementById("heading").innerHTML = "social <br> links!!";
    document.getElementById("para").innerHTML = "";

  }
}
function out() {
  document.getElementById("para").innerHTML = "";
  document.getElementById("heading").innerHTML = "Hrithik MJ <br>here!!";
}

particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.4
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 180,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

);