$(document).ready(function(){

  $('.center').slick({
    centerMode: false,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
  });

  $(".fa").mouseover(function(){
  	$(this).css("color", "#646363");
  });

  $(".fa").mouseout(function(){
  	$(this).css("color", "");
  });

  $("p").mouseover(function(){
    $(this).css("color", "#646363");
  });

  $("p").mouseout(function(){
    $(this).css("color", "");
  })

})

