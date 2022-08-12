/*動畫初始設定*/
AOS.init();
/*FirstPage輪播*/
$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: true,
            nav: false,

            responsive: {
                0: {
                    items: 1,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 3,
                    loop: false
                }
            }
        }
     );
    });