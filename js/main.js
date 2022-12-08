$(function () {

    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    })

    $('.mainSlide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,

        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            if (i == '0') {
                i = "홈서비스 타임딜";
            } else if (i == '1') {
                i = "위클리 특가";
            } else if (i == '2') {
                i = "침수차 보상 프로그램";
            } else if (i == '3') {
                i = "렌트";
            } return '<a class="dot">' + i + '</a>';
        }

    });

    $('.mainSlide').on('afterChange', function (e, s, c) {
        $('.mainVisual .main_num').text(c + 1 + "/" + s.slideCount);
    });




    $('.subSlide').slick({
        slidesToShow: 3,
        arrows: true,
        dots: false,
        autoplay: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToScroll: 3,
    });


    $('.subSlide').on('afterChange', function (e, s, c) {
        $('sub_num span').text(c ? (c + 1) : 1)
        $('sub_num strong').text(s.slideCount)
    });
})

