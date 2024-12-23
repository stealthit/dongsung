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

