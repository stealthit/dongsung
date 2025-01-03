$(".btn-full").click(function(){  
    $(".layout-wrap").toggleClass("full");
})

$(".org-tree-box summary").click(function(){
  $("details").removeClass('sel');
  $("summary").removeClass('location');
  $(".org-name").removeClass('location');
  $(this).parents('details').addClass('sel');
  $(this).addClass('location');
  
})

$(".last-depth .org-name").click(function(){
  $("details").removeClass('sel');
  $("summary").removeClass('location');
  $(".org-name").removeClass('location');
  $(this).parents('details').addClass('sel');
  $(this).addClass('location');
})

$(".search-member-wrap .member-info-box").click(function(){
  $(".member-info-box").removeClass('location');
  $(this).addClass('location');
})

$(".open-popup").click(function(){
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', './css/styles.css') );
})

$(".close-popup").click(function(){
  $("link[rel=stylesheet][href*='./css/styles.css']").remove()
})

$(".btn-close").click(function(){
  $("link[rel=stylesheet][href*='./css/styles.css']").remove()
  $(this).parents(".layout-wrap").addClass("hide")
})