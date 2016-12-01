$(function () {
    'use strict';

    /**
     * @file 车型参数配置对比
     * @author maxingguo(maxingguo@autohome.com.cn)
     * @update 2016.06.02
     * 
     * 1.对比车型左右滑动。
     * 2.顶部跟随。（高度不定）
     * 4.锚点定位。
     * 3.标注栏加宽=屏幕宽。
     * 5.左右浮层 不重叠。
     * 6.查看车型差异
     */

    window.paramCompare.on('rendContentEnd', function () {

        if (window.paramScrollerCompare || window.paramScrollerDetail) {
            $('#scroller__detail .slide').width($('#scroller__compare .slide').width());
            var docWidth = document.documentElement.clientWidth;
            $('.parameter-detail .detail .left .group h4').width(docWidth);
            setTimeout(function () {
                window.paramScrollerCompare.refresh();
                window.paramScrollerDetail.refresh();
            }, 100);
            return;
        }

        /**
         * 1.对比车型左右滑动。
         */
        if ($('#scroller__compare').length && $('#scroller__detail').length) {
            $('#scroller__detail .slide').width($('#scroller__compare .slide').width());

            var paramScrollerCompare = new IScroll('#scroller__compare', {
                // snap: '.slide .column',
                // snap: true,
                probeType: 3,
                eventPassthrough: true,
                scrollX: true,
                scrollY: false
            });

            var paramScrollerDetail = new IScroll('#scroller__detail', {
                // snap: '.slide .inner',
                // snap: true,
                probeType: 3,
                eventPassthrough: true,
                scrollX: true,
                scrollY: false
            });

            paramScrollerCompare.on('scroll', function () {
                paramScrollerDetail.scrollTo(this.x, 0);
            });

            paramScrollerDetail.on('scroll', function () {
                paramScrollerCompare.scrollTo(this.x, 0);
            });

            window.paramScrollerCompare = paramScrollerCompare;
            window.paramScrollerDetail = paramScrollerDetail;
        }

        /**
         * 2.顶部跟随。（高度不定）
         */
        var $paramCars = $('.parameter-detail');
        var $paramHeader = $paramCars.find('header');
        var $paramDetail = $paramCars.find('.detail');
        var $paramItem = $paramDetail.find('.left .group');
        var $paramGroup = $paramDetail.find('.main .group');
        var $paramHeaderStand = $paramHeader.next('.header-stand').height($paramHeader.height());
        var $paramMarkbar = $paramHeader.find('.markbar strong');

        var timerScroll;
        $(window).on('scroll.paramSticky', function () {
            if (timerScroll) {
                clearTimeout(timerScroll);
            }

            timerScroll = setTimeout(function () {
                var docScrollTop = document.body.scrollTop;
                var paramHeaderRect = $paramHeader.offset();
                var paramHeaderTop = paramHeaderRect.top;
                var paramHeaderStandRect = $paramHeaderStand.offset();
                var paramHeaderStandRectTop = paramHeaderStandRect.top;
                var paramHeaderStandRectHeight = paramHeaderStandRect.height;

                if (docScrollTop >= paramHeaderTop && !paramHeaderStandRectHeight) {
                    $paramHeader.addClass('sticky');
                    $paramHeaderStand.removeClass('fn-hide');
                } else if (docScrollTop < paramHeaderStandRectTop) {
                    $paramHeader.removeClass('sticky');
                    $paramHeaderStand.addClass('fn-hide');
                }

                var paramHeaderHeight = paramHeaderRect.height;
                $paramItem = $paramDetail.find('.left .group'); // dom 变更后需重新获取节点
                $paramItem.each(function (index, item) {
                    var clientRect = this.getBoundingClientRect();
                    if (clientRect.height + clientRect.top >= paramHeaderHeight) {
                        $paramMarkbar.text($(this).find('h4 strong').text());
                        return false;
                    }
                });
            }, 60);
        });

        /**
         * 3.标注栏加宽=屏幕宽。
         */
        var docWidth = document.documentElement.clientWidth;
        $paramItem.find('h4').width(docWidth);

        $(window).on('resize.paramItemReset, orientationchange.paramItemReset', function () {
            docWidth = document.documentElement.clientWidth;
            $paramItem.find('h4').width(docWidth);
        });

        /**
         * 4.锚点定位。
         */
        var $paramAnchor = $('.parameter-anchor');
        var paramAnchorHTML = '';
        $('h4 strong', $paramItem).each(function () {
            paramAnchorHTML += '<span class="item">' + this.innerHTML + '</span>';
        });
        $($paramAnchor).find('.cont').html(paramAnchorHTML);

        $paramAnchor.on('touchstart', '.item', function (e) {
            e.preventDefault();
            e.stopPropagation();

            $paramItem = $paramDetail.find('.left .group'); // dom 变更后需重新获取节点
            var anchorIndex = $(this).index();
            var anchorTop = $paramItem.eq(anchorIndex).find('.item').offset().top - $paramHeader.height();

            scroll(anchorTop, 300);
        });

        function scroll(scrollTo, time) {
            var scrollFrom = parseInt(document.body.scrollTop, 10);
            var i = 0;
            var runEvery = 5; // run every 5ms
            scrollTo = parseInt(scrollTo, 10);
            time /= runEvery;
            var interval = setInterval(function () {
                i++;
                document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom;
                if (i >= time) {
                    clearInterval(interval);
                }
            }, runEvery);
        }

        /**
         * 5.左右浮层 不重叠。
         */
        $(document).on('touchstart.dropdownOnly', '[data-dropdown-only]', function (e) {
            e.preventDefault();
            e.stopPropagation();

            $('[data-dropdown-only]').not(this)
              .removeClass('activate')
              .next().addClass('fn-hide');

            $(document).off('touchstart.dropdownClose');
            $(document).on('touchstart.dropdownClose', function (e) {
                if (!$(e.target).closest('[data-dropdown-close]').length) {
                    $('[data-dropdown-only]')
                      .removeClass('activate')
                      .next().addClass('fn-hide');
                    $(document).off('touchstart.dropdownClose');
                }
            });
        });

        /**
         * 6.查看车型差异
         */
        var $paramHeaderChecks = $paramHeader.find('.compare .left input');

        $paramHeaderChecks.on('click', ['.item-null', '.item-same', '.item-differ'], function (e) {
            var columnLen = $('.column[data-specid]', $paramHeader).length;
            if (columnLen <= 1) {
                e.preventDefault();
                e.stopPropagation();
                if (columnLen < 1) {
                    $('#scroller__detail .slide').width(1);
                }
                return;
            }

            var isChecked = $(this).prop('checked');
            var checkIndex = $(this).closest('label').index();
            var checkClass = e.data[checkIndex];
            var classState = checkIndex !== 2 ? 'fn-hide' : 'highlight';

            $paramItem = $paramDetail.find('.left .group'); // dom 变更后需重新获取节点
            $paramGroup = $paramDetail.find('.main .group');
            $paramDetail.find(checkClass).toggleClass(classState, isChecked);

            if (checkIndex !== 2) {
                paramToggle();
            }
        });
        $('.toggleHide').click(function(){
            paramToggles();
        });
        function paramToggle(checkClass) {
            $paramItem.each(function (index, group) {
                var isItemSame = true;

                $(group).find('.item .inner').each(function (index, item) {
                    if (!$(item).hasClass('fn-hide')) {
                        isItemSame = false;
                        return false;
                    }
                });
                $paramItem.eq(index).toggleClass('fn-hide', isItemSame);
                $paramGroup.eq(index).toggleClass('fn-hide', isItemSame);
                $paramAnchor.find('.item').eq(index).toggleClass('fn-hide', isItemSame);
            });
        }
        function paramToggles(){
            $('.detail .left .group .item').each(function(index,item){
                if($(item).find('.item-same').length){
                    var tit='显示相同项';
                    if ($(item).hasClass('fn-hide')) {
                        tit='隐藏相同项';
                    }
                    $('.toggleHide').text(tit);
                    $(item).toggleClass('fn-hide');
                    $('#scroller__detail .group .item').eq(index).find('.item-same').toggleClass('fn-hide');
                }
            });
        }
        window.paramToggles=paramToggles;

    });

});