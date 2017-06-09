$(document).ready(function(){

  $('.center').slick({
    centerMode: false,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
  });

  $(".fa").mouseover(function(){
  	$(this).css("color", "black");
  });

  $(".fa").mouseout(function(){
  	$(this).css("color", "");
  })

})

