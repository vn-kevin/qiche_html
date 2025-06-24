var imgdom;
$.isMobile = function (type) {
    var reg = [];
    var any = {
        blackberry: 'BlackBerry',
        android: 'Android',
        windows: 'IEMobile',
        opera: 'Opera Mini',
        ios: 'iPhone|iPad|iPod'
    };
    type = 'undefined' == $.type(type) ? '*' : type.toLowerCase();
    if ('*' == type) reg = $.map(any, function (v) { return v; });
    else if (type in any) reg.push(any[type]);
    return !!(reg.length && navigator.userAgent.match(new RegExp(reg.join('|'), 'i')));
};
$.openModel = function (_t, type, callback) {
    var ty = type || '1',
        $body = _t.parents('.w');
    var temp;
    if (ty == 1) {
        temp = '<div class="model openModel' + ty + '"><a class="close" href="javascript:void(0)"></a><div class="content">' + _t.html() + '</div></div>'
    } else if (ty == 2) {
        var imgs = '',
            imgs1 = '';
        imgdom.each(function (e, i) {
            console.log($(i))
            var d = $(i);
            imgs += '<div class="swiper-slide"><div class="img" style="background-image:url(' + d.find('img').attr('src') + ')"> </div><p class="pc">' + d.find('.txt').text() + '</p></div>'
            imgs1 += '<div class="swiper-slide ' + (e == 0 ? 'active-nav' : '') + '"><img src="' + d.find('img').attr('src') + '"></div>'
        })
        temp = '<div class="model openModel' + ty + '"><a class="close" href="javascript:void(0)"></a><div class="content">' +
            '<div class="pc-slide">' +
            '<div class="view">' +
            '<div class="swiper-container">' +
            '<a class="arrow-left" href="#"></a>' +
            '<a class="arrow-right" href="#"></a>' +
            '<div class="swiper-wrapper">' +
            imgs +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="preview">' +
            '<a class="arrow-left" href="#"></a>' +
            '<a class="arrow-right" href="#"></a>' +
            '<div class="swiper-container">' +
            '<div class="swiper-wrapper">' +
            imgs1 +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div></div>'
    } else if (ty == 3) {
        temp = '<div class="model openModel' + ty + '"><a class="close" href="javascript:void(0)"></a><div class="content">' + _t.find('.modelContent').html() + '</div></div>'
    } else if (ty == 4) {
        temp = '<div class="model openModel' + ty + '"><a class="close" href="javascript:void(0)"></a><div class="content">' + _t.find('.modelContent').html() + '</div></div>'
    } else if (ty == 5) {
        temp = '<div class="model openModel' + ty + '"><a class="close" href="javascript:void(0)"></a><div class="content">' + _t.find('.modelContent').html() + '</div></div>'
    }
    $body.append(temp);
    typeof (callback) == 'function' && callback();
}





$(function () {
    $('html').addClass($.isMobile() ? 'mobile' : 'desktop');
    var evts = $.isMobile() ? 'click' : 'click'

    $('body').on('click', '.close', function () {
        $(this).parents('.model').fadeOut('slow', function () {
            $(this).remove()
        })
    })


    if ($.isMobile()) {
        //menu
        var nav = $('.menu');
        nav.find('.btns').click(function () {
            if (nav.hasClass('active')) {
                nav.removeClass('active')
                $('body').css('overflow', 'auto')
            } else {
                nav.addClass('active')
                $('body').css('overflow', 'hidden')
            }
        });
        nav.find('li a').click(function () {
            nav.removeClass('active')
            $('body').css('overflow', 'auto')
        })

        var domss = $('#a1 .li');
        $('#a1 .swiper-wrapper').html(domss);
        $('#a1 .li').addClass('swiper-slide');

        setTimeout(function () {
            var swiper = new Swiper('#a1 .cont', {
                pagination: '#a1 .swiper-pagination',
                loop: true,
                autoplay: 2000,
                grabCursor: true,
                paginationClickable: true
            });
        })

    } else {
        var swiper = new Swiper('#a1 .cont', {
            pagination: '#a1 .swiper-pagination',
            loop: true,
            grabCursor: true,
            paginationClickable: true
        });

        //layout1
        $('.layout1 .li')[evts](function (e) {
            $.openModel($(this));
        });
    }

    (function () {
        // swiper 层叠轮播示例，没用到可以不拷贝
        var modify = 0;
        var opts = {
            slidesPerView: 3,
            loop: true,
            autoplay: 2000,
            centeredSlides: true,
            //Enable 3D Flow
            tdFlow: {
                rotate: 30,
                stretch: 10,
                depth: 150,
                modifier: 1,
                shadows: false
            }
        };
        imgdom = $('.layout2 .img_ .swiper-slide');
        console.log(imgdom)
        var certifySwiper = new Swiper('.m-slide-certify .swiper-container', opts);
        $('.m-slide-certify .swiper-button-prev').on('click', function (e) {
            e.preventDefault()
            certifySwiper.swipePrev()
        })
        $('.m-slide-certify .swiper-button-next').on('click', function (e) {
            e.preventDefault()
            certifySwiper.swipeNext()
        })
    
        //layout2
        $('.layout2 .swiper-slide')[evts](function (e) {
    
    
            $.openModel($(this), 2, function () {
                    function updateNavPosition() {
                        $('.preview .active-nav').removeClass('active-nav')
                        var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
                        if (!activeNav.hasClass('swiper-slide-visible')) {
                            if (activeNav.index() > previewSwiper.activeIndex) {
                                var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
                                previewSwiper.swipeTo(activeNav.index() - thumbsPerNav, 1000, false);
                            } else {
                                previewSwiper.swipeTo(activeNav.index(), 1000, false);
                            }
                        }
                    }
                    // var viewSwiper = new Swiper('.view .swiper-container', {
                    //     onSlideChangeEnd: function () {
                    //         updateNavPosition()
                    //     }
                    // })
                    // $('.view .arrow-left,.preview .arrow-left').on('click', function (e) {
                    //     e.preventDefault()
                    //     viewSwiper.swipePrev()
                    // })
                    // $('.view .arrow-right,.preview .arrow-right').on('click', function (e) {
                    //     e.preventDefault()
                    //     viewSwiper.swipeNext()
                    // })
                    // var previewSwiper = new Swiper('.preview .swiper-container', {
                    //     //visibilityFullFit: true,
                    //     slidesPerView: 'auto',
                    //     allowTouchMove: false,
                    //     onSlideClick: function (s) {
                    //         $('.preview .swiper-slide').removeClass('active-nav').eq(previewSwiper.clickedSlideIndex).addClass('active-nav')
                    //         viewSwiper.swipeTo(previewSwiper.clickedSlideIndex, 1000, false);
                    //     }
                    // })
    
            });
        });
    })();

    //layout3
    $('.layout3 .jsimg_r a')[evts](function (e) {
        $.openModel($(this), 3);
    });

    //layout4
    $('.layout4 .aa')[evts](function (e) {
        $.openModel($(this), 4);
    });
    //layout5
    $('.layout5 li')[evts](function (e) {
        $.openModel($(this), 5);
    });


    //layout6
    (function () {
        var i = -1;
        if ($.isMobile()) {
            $('#a4 .pos').click(function () {
                var index = $(this).index();
                if ($.isMobile()) {
                    $('#a4 .cont > .hotPie').fadeOut().remove()
                } else {
                    $('.hotPie').fadeOut()
                }
                if (i != index) {
                    i = index;
                    if ($.isMobile()) {
                        $('#a4 .cont').append('<div class="hotPie">' + $(this).find('.hotPie').html() + '</div>');
                        $('#a4 .cont > .hotPie').fadeIn().click(function () {
                            i = -1;
                            $('#a4 .cont > .hotPie').fadeOut().remove()
                        })

                    } else {
                        $(this).find('.hotPie').fadeIn()
                    }
                } else {
                    i = -1;
                }
            })
        } else {
            $('#a4 .pos').hover(function () {
                $(this).find('.hotPie').fadeIn()
            }, function () {
                $('.hotPie').fadeOut()
            });
        }

    })();

    //顶部
    $('.gotop').click(function () {
        $(window).scrollTop(0)
    })


})