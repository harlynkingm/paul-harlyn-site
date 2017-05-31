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
    imageSrc: 'images/cover2.jpg'
  });
  
  var sc_widget = SC.Widget("sc_player");
  
  sc_widget.bind("ready", function(){
    updateTitle();
    
    sc_widget.bind("play", function(){
      updateTitle();
      $('#play-button').attr('src', 'images/buttons/pause_button.png');
    });
    
    sc_widget.bind("pause", function(){
      updateTitle();
      $('#play-button').attr('src', 'images/buttons/play_button.png');
    });
    
    $('#ff-button').click(function(){
      sc_widget.next();
      sc_widget.pause();
      updateTitle();
    });
    
    $('#play-button').click(function(){
      sc_widget.toggle();
      updateTitle();
    });
  });
  
  function updateTitle(){
    sc_widget.getCurrentSound(function(e){
      $('#sc_song').html("<a href='" + e.permalink_url + "' target='_blank'>" + e.title + "</a>");
      $("#sc_link").html("<a href='" + e.permalink_url + "' target='_blank'>soundcloud</a>");
    });
  }

});