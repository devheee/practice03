$(function () {

    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    })

    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,

        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            if (i == '0') {
                i = "기업시민";
            } else if (i == '1') {
                i = "스마트컨스트럭션";
            } else if (i == '2') {
                i = "탄소중립경영";
            } else if (i == '3') {
                i = "더샵";
            } else if (i == '4') {
                i = "도시정비";
            } else if (i == '5') {
                i = "기업문화";
            } return '<a class="dot">' + i + '</a>';
        },
    });

    $('.subSlide').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.subSlide').on('afterChange', function (e, s, c) {
        $('.subBussiness .sub_num').text(c + 1 + "/" + s.slideCount);
    });

    $('.popup button').on('click', function () {
        $(this).parent().hide();
    })


    $('.popup').draggable();
})

