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
        temp = '<div class="model openModel' + ty + '"><a class="close" href="javascriipt:void(0)"></a><div class="content">' + _t.html() + '</div></div>'
    } else if (ty == 2) {
        var imgs = '',
            imgs1 = '';
        imgdom.each(function (e, i) {
            var d = $(i);
            imgs += '<div class="swiper-slide"><div class="img" style="background-image:url(' + d.find('img').attr('src') + ')"> </div><p class="pc">' + d.find('.txt').text() + '</p></div>'
            imgs1 += '<div class="swiper-slide ' + (e == 0 ? 'active-nav' : '') + '"><img src="' + d.find('img').attr('src') + '"></div>'
        })
        temp = '<div class="model openModel' + ty + '"><a class="close" href="javascriipt:void(0)"></a><div class="content">' +
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
    } else if (ty == 4) {
        temp = '<div class="model openModel' + ty + '"><a class="close" href="javascriipt:void(0)"></a><div class="content">' + _t.find('.modelContent').html() + '</div></div>'
    } else if (ty == 5) {
        temp = '<div class="model openModel' + ty + '"><a class="close" href="javascriipt:void(0)"></a><div class="content">' + _t.find('.modelContent').html() + '</div></div>'
    }
    $body.append(temp);
    typeof (callback) == 'function' && callback();
}


var imgdom;
$(function () {
    imgdom = $('.layout2 .img_ .swiper-slide');
    // swiper 层叠轮播示例，没用到可以不拷贝
    var modify = 0;
    var opts = {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 7,
        autoplay: false,
        navigation: {
            nextEl: '.m-slide-certify .swiper-button-next',
            prevEl: '.m-slide-certify .swiper-button-prev',
        },
        on: {
            progress: function (progress) {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;

                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 0.4 + 1;
                    }
                    translate = slideProgress * modify * 75 + 'px';
                    scale = 1 - Math.abs(slideProgress) / 7;
                    zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                    slide.css('zIndex', zIndex);
                    slide.css('opacity', scale);
                    if (Math.abs(slideProgress) > 5) {
                        slide.css('opacity', 0);
                    }
                }
            },
            setTransition: function (transition) {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i)
                    slide.transition(transition);
                }
            }
        }
    };
    //移动配置
    if($.isMobile()){
        opts = {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 3,
            autoplay: false,
            navigation: {
                nextEl: '.m-slide-certify .swiper-button-next',
                prevEl: '.m-slide-certify .swiper-button-prev',
            },
            on: {
                progress: function (progress) {
                    for (i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
    
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0.4 + 1;
                        }
                        translate = slideProgress * modify * 50 + 'px';
                        scale = 1 - Math.abs(slideProgress) / 3;
                        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', scale);
                        if (Math.abs(slideProgress) > 1) {
                            slide.css('opacity', 0);
                        }
                    }
                },
                setTransition: function (transition) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
                        slide.transition(transition);
                    }
                }
            }
        }
    }

    var certifySwiper = new Swiper('.m-slide-certify .swiper-container', opts);
});

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

        var domss = $('#a1 .li');
        $('#a1 .swiper-wrapper').html(domss);
        $('#a1 .li').addClass('swiper-slide');

        setTimeout(function () {
            var swiper = new Swiper('#a1 .cont', {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: '#a1 .swiper-pagination',
                    clickable: true,
                },
            });
        })

    } else {
        //layout1
        $('.layout1 .li')[evts](function (e) {
            $.openModel($(this));
        });

        var swiper = new Swiper('#a1 .cont', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '#a1 .swiper-pagination',
                clickable: true,
            },
        });
    }

    //layout2
    $('.layout2 .swiper-slide')[evts](function (e) {
        console.log(123)
        $.openModel($(this), 2, function () {
            function updateNavPosition() {
                $('.preview .active-nav').removeClass('active-nav')
                var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
                if (!activeNav.hasClass('swiper-slide-visible')) {
                    if (activeNav.index() > previewSwiper.activeIndex) {
                        var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
                        previewSwiper.slideTo(activeNav.index() - thumbsPerNav)
                    } else {
                        previewSwiper.slideTo(activeNav.index())
                    }
                }
            }
            var viewSwiper = new Swiper('.view .swiper-container', {
                on: {
                    slideChangeTransitionStart: function () {
                        updateNavPosition()
                    }
                }
            })
            $('.view .arrow-left,.preview .arrow-left').on('click', function (e) {
                e.preventDefault()
                if (viewSwiper.activeIndex == 0) {
                    viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
                    return
                }
                viewSwiper.slidePrev()
            })
            $('.view .arrow-right,.preview .arrow-right').on('click', function (e) {
                e.preventDefault()
                if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
                    viewSwiper.slideTo(0, 1000);
                    return
                }
                viewSwiper.slideNext()
            })
            var previewSwiper = new Swiper('.preview .swiper-container', {
                //visibilityFullFit: true,
                slidesPerView: 'auto',
                allowTouchMove: false,
                on: {
                    tap: function () {
                        viewSwiper.slideTo(previewSwiper.clickedIndex)
                    }
                }
            })


        });
    });

    //相册
    (function () {
        var tmp = '';
        $('#photos .jsimg_r img').each(function () {
            var $this = $(this);
            tmp += '<li><img src="' + $this.attr('src') + '"><h6>' + $this.attr('alt') + '</h6></li>'
        })
        $('#photos .banner ul').html(tmp);

        setTimeout(function () {
            var di = -1;
            $('.atBanner .banner').unslider({
                fluid: true,
                dots: true
            });
            var ds = $('#photos .banner').unslider({
                fluid: true,
                dots: true,
                autoplay: false,
                complete: function (i, t) {
                    $ps.find('.jsimg_r a').eq(t).addClass('active').siblings().removeClass('active')
                },
            });

            //相册
            var $ps = $('#photos');
            if ($ps.length) {
                var $psR = $ps.find('.jsimg_r a');
                $psR.mouseenter(function () {
                    di = $(this).index()
                    $(this).addClass('active').siblings().removeClass('active');
                    ds.data('unslider').move(di)
                });
                $ps.hover(function () {
                    ds.data('unslider').stop();
                }, function () {
                    ds.data('unslider').start();
                });
            }
        }, 500);
    })();

    //layout4
    $('.layout4 .aa')[evts](function (e) {
        $.openModel($(this), 4);
    });
    //layout5
    $('.layout5 li')[evts](function (e) {
        $.openModel($(this), 5);
    });

    (function () {
        var swiper = new Swiper('#a3 .cont', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '#a3 .swiper-pagination',
                clickable: true,
            },
        });
    })();

    //layout6
    (function () {
        var i = -1;
        $('#a4 .pos').click(function () {
            var index = $(this).index();
            if($.isMobile()){
                $('#a4 .cont > .hotPie').fadeOut().remove()
            }else{
                $('.hotPie').fadeOut()
            }
            if (i != index) {
                i = index;
                if($.isMobile()){
                    $('#a4 .cont').append('<div class="hotPie">'+ $(this).find('.hotPie').html() +'</div>');
                    $('#a4 .cont > .hotPie').fadeIn().click(function(){
                        i = -1;
                        $('#a4 .cont > .hotPie').fadeOut().remove()
                    })
                    
                }else{
                    $(this).find('.hotPie').fadeIn()
                }
            }else{
                i = -1;
            }
        })
    })();

    //顶部
    $('.gotop').click(function () {
        $(window).scrollTop(0)
    })


})