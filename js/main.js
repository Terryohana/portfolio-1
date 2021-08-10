document.addEventListener('DOMContentLoaded', function(){

  
 
  
        const mobileNav = document.querySelector('.mobile-nav'),
        burgerBtn = document.querySelector('.burger-btn'),
        menu = document.querySelector('.menu'),
        navLink = document.querySelectorAll('.nav_link');
        
        mobileNav.addEventListener('click', mobileMenu);
        
        function mobileMenu(){
            menu.classList.toggle('open');
            burgerBtn.classList.toggle('open');
        }

        navLink.forEach(n => n.addEventListener("click", closeMenu));
        
        function closeMenu() {
          burgerBtn.classList.remove("open");
          menu.classList.remove("open");
      }
        
        const swiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          });

          
          
    });
