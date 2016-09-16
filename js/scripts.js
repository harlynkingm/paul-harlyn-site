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
});