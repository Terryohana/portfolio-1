document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger); //scroll Trigger

  //mobile menu

  const mobileNav = document.querySelector(".mobile-nav"),
    burgerBtn = document.querySelector(".burger-btn"),
    menu = document.querySelector(".menu"),
    navLink = document.querySelectorAll(".nav_link");

  mobileNav.addEventListener("click", mobileMenu);

  function mobileMenu() {
    menu.classList.toggle("open");
    burgerBtn.classList.toggle("open");
  }

  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function closeMenu() {
    burgerBtn.classList.remove("open");
    menu.classList.remove("open");
  }

  //animations
document.querySelectorAll('h1, h2, .h5, .title, .name, .btn-prim, .hero-p, .about-description, .skills-p, .skill-info, .project-info, .projects-btn, .contactMe').forEach((n) => n.classList.add('animate'));

  function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }

    gsap.utils.toArray('.animate').forEach(function(elem) {
      hide(elem); 
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } //  hidden when scrolled into view
      });
    });
  });
  


