$(document).ready(function(){

  $('.center').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
  });

   var small={width: "100%", height: "100%"};
        var large={width: "150%",height: "600px"};
        var count=1;
        $(".slide").css(small).on('click',function () {
            $(this).animate((count==1)?large:small);
            count = 1-count;
        });
})


// $("img").click(function(){
//  $(this).css("width", "125%");
//  });
