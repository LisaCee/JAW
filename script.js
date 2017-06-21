$(document).ready(function(){

  $('.center').slick({
    centerMode: false,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
  });

  $(".fa").hover(function(){
  	$(this).css("color", "#fc620a");
  })

  $(".fa").mouseout(function(){
  	$(this).css("color", "");
  });

  $("p").hover(function(){
    $(this).css("color", "#FC620A");
  });

  $("img.example-image.img-responsive").mouseover(function(){
    $(this).css("border", "solid #194a7b 3px")
  })
   
  $("img.example-image.img-responsive").mouseout(function(){
    $(this).css("border", "")
  });

  
})

