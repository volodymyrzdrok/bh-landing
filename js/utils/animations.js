$(document).ready(function() {
    function animateCup(cup) {
      cup.addClass('animate__hinge');
 
      cup.on('animationend webkitAnimationEnd oAnimationEnd', function() {
        cup.removeClass('animate__hinge');
      });
    }
  
    function startAnimation() {
      var cups = $('.cups-cont').children();
      var currentIndex = 0;
  
      setInterval(function() {
        var currentCup = $(cups[currentIndex]);
        animateCup(currentCup);
  
        currentIndex = (currentIndex + 1) % cups.length;
      }, 7 * 1000); 
    }
  
    startAnimation();
  });
  