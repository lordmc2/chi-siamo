function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});


const galleryImages = document.querySelectorAll('.gallery-container img');
galleryImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.filter = 'brightness(1.2)';
    });
    img.addEventListener('mouseout', () => {
        img.style.filter = 'brightness(1)';
    });
});


const sections = document.querySelectorAll('section');

function checkSectionVisibility() {
    const windowHeight = window.innerHeight;
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('visible');  
        } else {
            section.classList.remove('visible');
        }
    });
}


window.addEventListener('scroll', checkSectionVisibility);


checkSectionVisibility();


const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        const sectionId = link.getAttribute('href').substring(1); 
        scrollToSection(sectionId); 
    });
});




particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 200,   
        "density": {
          "enable": true,
          "value_area": 800  
        }
      },
      "shape": {
        "type": "circle",  
        "stroke": {
          "width": 0,       
          "color": "#ffffff"  
        }
      },
      "opacity": {
        "value": 0.5,   
        "random": true, 
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1  
        }
      },
      "size": {
        "value": 3,   
        "random": true,  
        "anim": {
          "enable": true,
          "speed": 3,
          "size_min": 1   
        }
      },
      "links": {
        "enable": false,  
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "bottom",  
        "random": true,
        "straight": false,
        "out_mode": "out",  
        "attract": {
          "enable": false
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"  
        },
        "onclick": {
          "enable": true,
          "mode": "push"  
        },
        "onmousemove": {
          "enable": true,
          "mode": "push", 
          "particles_nb": 5  
        }
      }
    },
    "retina_detect": true
  });
  




  document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const body = document.body;

  
    window.onload = () => {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 3.5s ease";
        
       
        setTimeout(() => {
            loader.style.display = "none";
            body.classList.remove("hidden");
        }, 500);
    };
});


document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".interactive-bg");
  const backgroundLayer = document.createElement("div");
  backgroundLayer.classList.add("background-layer");
  heroSection.appendChild(backgroundLayer);

  heroSection.addEventListener("mousemove", (e) => {
      const { offsetX, offsetY } = e;
      const { clientWidth, clientHeight } = heroSection;

      
      const xOffset = ((offsetX / clientWidth) - 0.5) * 100;
      const yOffset = ((offsetY / clientHeight) - 0.5) * 100;

   
      backgroundLayer.style.transform = `translate(calc(-50% + ${xOffset}px), calc(-50% + ${yOffset}px))`;
  });
});
