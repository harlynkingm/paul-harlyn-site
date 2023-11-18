jQuery(document).ready(function(){
  
  $(window).scroll(function(){
    if ($(window).scrollTop() > 90){
      $(".subhead").addClass("subhead-stick");
    } else {
      $(".subhead").removeClass("subhead-stick");
    }
  });
  
  $(function() {
    $('a[href^="#"]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 100
          }, 1000);
          return false;
        }
      }
    });
  });
  
  $(".content-feature").parallax({
    imageSrc: 'images/cover3.jpg',
    positionY: '-160px',
    positionX: '0px',
  });

});