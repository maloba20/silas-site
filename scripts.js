// version 1.1
 document.addEventListener('DOMContentLoaded', function() {
   const mobileMenuBtn = document.getElementById('mobile-menu-btn');
   const mobileMenu = document.getElementById('mobile-menu');
   mobileMenuBtn.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
   });
   if (typeof lucide !== 'undefined') {
     lucide.createIcons();
   }
 });
