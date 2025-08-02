   AOS.init({

            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });

let cursor = document.querySelector(".cursor");
let body = document.querySelector("body");
console.log(cursor);
console.log(body);

body.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.5,
    ease: "back.out",
  });
});


  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  // When user scrolls
  window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Optional: Click handler to apply active class immediately on click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

