document.addEventListener('DOMContentLoaded', function(){
        let hamburger = document.querySelector('.nav_hamburger'),
        menu = document.querySelector('.menu');
        
        hamburger.addEventListener('click', mobileMenu);
        
        function mobileMenu(){
            menu.classList.toggle('open');
            hamburger.classList.toggle('open');
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
