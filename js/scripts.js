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
  
  sc_widget.bind(SC.Widget.Events.READY, function(){
    updateTitle();
    
    sc_widget.bind(SC.Widget.Events.PLAY, function(){
      updateTitle();
      $('#play-button').attr('src', 'images/buttons/pause_button.png');
    });
    
    sc_widget.bind(SC.Widget.Events.PAUSE, function(){
      updateTitle();
      $('#play-button').attr('src', 'images/buttons/play_button.png');
    });
    
    sc_widget.bind(SC.Widget.Events.FINISH, function(){
      next();
    });
    
    sc_widget.bind(SC.Widget.Events.PLAY_PROGRESS, function(){
      updatePosition();
    });
    
    $('#ff-button').click(function(){
      next();
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
      updatePosition();
      updateDuration();
    });
  }
  
  function updatePosition(){
    sc_widget.getPosition(function(position){
      var realPosition = new Date(position);
      $("#sc_position").text(formatTime(realPosition) + " ");
    });
  }
  
  function updateDuration(){
    sc_widget.getDuration(function(duration){
      var realDuration = new Date(duration);
      $("#sc_duration").text("/ " + formatTime(realDuration) + " | ");
    });
  }
  
  function formatTime(d){
    return d.getMinutes() + ":" + formatNumber(d.getSeconds());
  }
  
  function formatNumber(n){
    if (n < 10){
      return "0" + n;
    } else {
      return "" + n;
    }
  }
  
  $(".changeLink").click(function(){
    var url = $(this).data("url");
    changeSong(url);
  });
  
  function changeSong(newUrl){
    sc_widget.pause();
    if ($(window).width() > 700){
      sc_widget.load(newUrl, {"auto_play": true, "hide_related":false, "show_comments":false, "show_user":true, "visual":true});
    }
  }

  function next(){
    sc_widget.getSounds(function(e){
      if (e.length > 1){
        sc_widget.next();
        updateTitle();
      } else {
        sc_widget.load("https://api.soundcloud.com/playlists/291200608", {"auto_play": true, "hide_related":false, "show_comments":false, "show_user":true, "visual":true}, function(e){
          sc_widget.play();
          updateTitle();
        });
      }
    });
  }

});