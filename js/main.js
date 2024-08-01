$(function () {
//메인베너
  const mb = new Swiper(".mb", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
    },

  })


  //nav
  $(".depth2, .depth2_bg").hide();



  $("#header .gnb > li").mouseenter(function () {
    $(".depth2, .depth2_bg").stop().fadeIn();
    $("#header h1 img").attr("src", "img/common/img_logo_blcak.svg");
    $("#header .gnb > li > a").css("color", "#000");
    $(".top_icon i").css("color", "#000");

  });

  $("#header .gnb > li").mouseleave(function () {
    $(".depth2, .depth2_bg").stop().fadeOut();
    $("#header h1 img").attr("src", "img/common/img_logo_w.png");
    $("#header .gnb > li > a").css("color", "#fff")
    $(".top_icon i").css("color", "#fff");
  });

  //mgnb
  $('.mgnb_wrap').hide();
  $('.bi-list').click(function(){
    $('.mgnb_wrap').fadeIn();
  })
  $('.mgnb_close').click(function(){
    $('.mgnb_wrap').fadeOut();
  })
  
  $('.mgnb > li').click(function(){
    $(this).find('.mdepth2').slideDown()
  })

  //board
  $('.tab_con div').not(':first').hide();

  $('.tab_btn button').click(function(){
    let num = $(this).index();
    $('.tab_con div').eq(num).show().siblings().hide();
    $(this).addClass('active').siblings().removeClass('active');
  });























}); //종료