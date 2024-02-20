$(document).ready(function(){
    $(".question__item").click(function(){
        var answer = $(this).next(".answer__item");
        answer.slideToggle();
      });
  });