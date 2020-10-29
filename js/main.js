// main.js

// 2단계 메뉴
$(function () {
    $('#gnb > .depth1 > li').hover(
        function () {
            $('.depth2')
                .stop().slideDown(400);
        },
        function () {
            $('.depth2')
                .stop().slideUp(400);
        }
    )
})

// banner slider
$(function () {
    var left = 0;
    var img_num = 0;
    var slider;   // slider 실행 객체 변수

    $('.pager > a').removeClass('active')
    $('.pager > a').eq(img_num).addClass('active')

    function sliderStart() {
        slider = setInterval(function () {
            if (img_num >= 2) {
                img_num = 0
            } else {
                img_num = img_num + 1;
            }

            if (left <= -3840) {
                left = 0;
            } else {
                left = left - 1920;
            }

            $('.sliders')
                .animate({ 'marginLeft': left })
            console.log(left)

            $('.pager > a').removeClass('active')
            $('.pager > a').eq(img_num).addClass('active')
        }, 2000);
    }
    function sliderStop() {
        clearInterval(slider);
    }
    // slider 재생
    sliderStart()
    $('.slider_box, .left, .right').hover(
        function () {
            // 마우스 올라갔을때 슬라이더 정지
            sliderStop();
        },
        function () {
            // 마우스 내려갔을때 슬라이더 시작
            sliderStart();
        }
    )

    // 이전 이미지 버튼
    $('.controls > .left').click(function () {
        if (img_num > 0) {
            img_num = img_num - 1
        } else { img_num = 2; }
        $('.pager > a').removeClass('active')
        $('.pager > a').eq(img_num).addClass('active')


        if (left < 0) {
            left = left + 1920
        } else { left = left - 3840 }
        $('.sliders').animate({ 'marginLeft': left })
    })

    // 다음 이미지 버튼
    $('.controls > .right').click(function () {
        if (img_num < 2) {
            img_num = img_num + 1
        } else { img_num = 0; }
        $('.pager > a').removeClass('active')
        $('.pager > a').eq(img_num).addClass('active')


        if (left > -3840) {
            left = left - 1920
        } else { left = 0 }
        $('.sliders').animate({ 'marginLeft': left })
    })
})  // end$