const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('navBar');

hamburger.addEventListener('click', function() {
  navBar.classList.toggle('toggle-visibility'); 
    });

console.log('script connected, yeehaw');