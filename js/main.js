document.addEventListener('DOMContentLoaded', function(){
        let hamburger = document.querySelector('.nav_hamburger'),
        menu = document.querySelector('.menu');
        
        hamburger.addEventListener('click', mobileMenu);
        
        function mobileMenu(){
            menu.classList.toggle('open');
            hamburger.classList.toggle('open');
        }
        
    });
