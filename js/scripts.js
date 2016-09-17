jQuery(document).ready(function(){
  
  $(".tower-button").click(function(){
    $(this).toggleClass("tower-button-on");
    $(".subhead").toggleClass("subhead-on");
  });
  
  $(".tower-button").mouseenter(function(){
    $(".subhead").addClass("subhead-preview");
  });
  
  $(".tower-button").mouseleave(function(){
    $(".subhead").removeClass("subhead-preview");
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
});