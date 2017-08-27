$(document).ready(function(){

  $('.responsive').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
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

  $("#art img.example-image.img-responsive").mouseover(function(){
    $(this).css("border", "solid #194a7b 3px")
  })

  $("img.example-image.img-responsive").mouseout(function(){
    $(this).css("border", "")
  });


})

