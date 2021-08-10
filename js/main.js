document.addEventListener('DOMContentLoaded', function(){
  
  
        let mobileNav = document.querySelector('.mobile-nav'),
        burgerBtn = document.querySelector('.burger-btn'),
        menu = document.querySelector('.menu');
        
        mobileNav.addEventListener('click', mobileMenu);
        
        function mobileMenu(){
            menu.classList.toggle('open');
            burgerBtn.classList.toggle('open');
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
