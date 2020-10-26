// main.js

// 2단계 메뉴
$(function(){
    $('#gnb > .depth1 > li').hover(
        function(){
            $('.depth2')
                .stop().slideDown(400);
        },
        function(){
            $('.depth2')
                .stop().slideUp(400);
        }
    )
})

// hamburger
$(function(){
    $('.hamburger_icon').click(function(){
        $('.hamburger_list').slideToggle();
    })   
});

// banner slider
$(function(){
    var left = 0;
    setInterval(function(){
        if(left <= -3840) {
            left = 0;
        } else {
            left = left - 1920;
        } 
       
        $('.sliders')
            // .css('maginLeft', left);
            .animate({'marginLeft':left})
            console.log(left)
      }, 5000);
  })