

var massCfg = {
	tap: "touchstart",
	click: "click",
	hideClass: "fn-hide"
};

//aside
;
(function(a) {
		a.mCfg = {
			$document: a(document),
			$win: a(window),
			$body: a("body"),
			$wrapper: a(".wrapper"),
			$mask: a(".mask"),
			hideClass: "fn-hide"
		};
		a.mCfg.wH = document.documentElement.clientHeight;
		a.mCfg.wW = document.documentElement.clientWidth;
		a.mCfg.bH = a.mCfg.$body.height()
	}
	(Zepto));
(function(b, d,template) {
	var a = b("[data-role=aside]");
	function c(f) {
		f = b.extend({
			control: "[data-role=aside]",
			aside: ".aside",
			timer: 200
		}, f);
		var e = this;
		e.cfg = f;
		e.control = f.control;
		e.$mask = b(".mask");
		e.$aside = b(e.cfg.aside);
		e.$curAside = b(e.cfg.aside);
		e.scrollTop = 0;
		e.init();
		e.event()
	}
	c.prototype.init = function() {
		var e = this;
		b.mCfg.$body.data("aside-zIndex", "10000");
		e.$aside.data("isClose", true);
		e.$mask.data("isClose", true);
		e.open();
		e.close()
	};
	c.prototype.event = function() {
		b.mCfg.$document.on("touchmove", ".aside > *:not(.aside-main)", function(f) {
			f.preventDefault()
		});
		b.mCfg.$document.on("touchmove", ".aside-main", function(h) {
			var g = b(this),
				f = 0;
			g.children().each(function() {
				f += b(this).height()
			});
			if (f + 100 <= g.parents(".aside").height()) {
				h.preventDefault()
			}
		})
	};
	c.prototype.tpl = function(g, h) {
		var e = this;
		var f = "<aside class='aside " + g + "'>";
		f += "<nav class='nav-final'>";
		f += "<p>" + h + "</p>";
		f += "<a class='back' href='#'><i class='iconfont icon-arrow-left'></i></a>";
		f += "</nav>";
		f += "<section class='aside-main'>";
		f += "</section>";
		f += "</aside>";
		return f
	};
	c.prototype.open = function() {
		var e = this;
		b.mCfg.$body.on('click', e.control, function(j) {
			var i = b(this),
				g = i.data("relation"),
				f = i.data("url");
			if (i.parents(".aside").length <= 0) {
				e.scrollTop = b(window).scrollTop()
			}
			e.$curAside = b(g ? ("." + g) : e.cfg.aside);
			e.cfg.timer = i.data("time") || e.cfg.timer;
			var k = !!i.data("title") === true ? i.data("title") : i.text();
			if (e.$curAside.length <= 0) {
				b.mCfg.$body.append(e.tpl(g, k));
				e.$curAside = b("." + g);
				e.$aside = b(".aside");
				e.$aside.data("isClose", true);
				e.$mask = b(".mask");
				e.$mask.data("isClose", true)
			} else {
				e.$curAside = b(g ? ("." + g) : e.cfg.aside)
			}
			if (e.$mask.length <= 0) {
				b.mCfg.$body.append("<div class='mask fn-hide'></div>");
				e.$mask = b(".mask")
			}
			var h = e.$curAside.find(".nav-final p");
			h.html(k);
			b("html, body, .wrapper").css({
				height: "100%",
				overflow: "hidden"
			});
			e.$mask.removeClass(b.mCfg.hideClass);
			e.$curAside.removeClass(b.mCfg.hideClass);
			e.slide(e.$curAside, i, f)
		})
	};
	c.prototype.slide = function(g, f, i) {
		var h = this,
			e = g.data("isClose");
		var k = g.data("his-url");
		if (i && (!k || (k && k != i))) {
			h.ajax(g, f, i)
		}
		if (e) {
			h.$mask.animate({
				opacity: 1
			}, h.cfg.timer, "ease-in-out");
			var j = parseInt(b.mCfg.$body.data("aside-zIndex"));
			g.css({
				zIndex: j + 1
			});
			g.animate({
				translate3d: "0, 0, 0"
			}, h.cfg.timer, "ease-in-out", function() {
				g.data("isClose", false);
				b.mCfg.$body.data("aside-zIndex", j + 1);
				h.$mask.data("isClose", false).removeClass(b.mCfg.hideClass)
			})
		}
	};
	c.prototype.close = function() {
		var e = this;
		b.mCfg.$document.on("click", ".mask, .aside-close", function(f) {
			f.preventDefault();
			e.cfg.timer = b(this).data("time") || e.cfg.timer;
			e.closeAll()
		});
		b.mCfg.$document.on("click", ".aside .back, .aside-back", function(h) {
			h.stopPropagation();
			h.preventDefault();
			var f = b(this).parents(".aside");
			e.cfg.timer = b(this).data("time") || e.cfg.timer;
			f.animate({
				translate3d: "100%, 0, 0"
			}, e.cfg.timer, "ease-in-out", function() {
				f.data("isClose", true)
			});
			var g = e.$aside.length;
			e.$aside.each(function() {
				if (b(this).data("isClose") == true) {
					--g
				}
			});
			if (g === 1) {
				e.$mask.data("isClose", true).animate({
					opacity: 0
				}, e.cfg.timer, "ease-in-out", function() {
					e.$mask.addClass(b.mCfg.hideClass)
				});
				b("html, body, .wrapper").css({
					height: "auto",
					"overflow-x": "hidden",
					"overflow-y": "auto"
				});
				document.documentElement.scrollTop = document.body.scrollTop = e.scrollTop
			}
		})
	};
	c.prototype.closeAll = function(g) {
		var e = this,
			f = 0;
		if (e.$mask.data("isClose") === false) {
			b(".aside").each(function() {
				if (b(this).data("isClose") === false) {
					b(this).animate({
						translate3d: "100%, 0, 0"
					}, e.cfg.timer, "ease-in-out", function() {
						b(".aside").data("isClose", true);
						document.documentElement.scrollTop = document.body.scrollTop = e.scrollTop
					});
					e.$mask.data("isClose", true).animate({
						opacity: 0
					}, e.cfg.timer, "ease-in-out", function() {
						e.$mask.addClass(b.mCfg.hideClass);
						if (g && f == 0) {
							g();
							++f
						}
					})
				}
			})
		}
		b("html, body, .wrapper").css({
			height: "auto",
			"overflow-x": "hidden",
			"overflow-y": "auto"
		})
	};
	c.prototype.ajax = function(f, e, h) {
		var g = this;

		b.ajax({
			type: "get",
			url: h,
			dataType: (a.attr('data-template')=='true'?'json':'text'),
			success: function(j) {
				if (j) {
					var i = f.find(".aside-main");
					if (i.length) {
						if(a.attr('data-template')=='true'){
							console.log(j)
							template(a.attr('data-relation'),j);
						}else{
							i.html(j)
						}
					} else {
						f.html(j)
					}
					f.data("his-url", h)
				}
			},
			error: function(i, k, j) {
				console.log("ajax error")
			}
		})
	};
	if (a.length > 0) {
		b.aside = new c()
	}
}(Zepto,'',template));
(function(e, t) {
    "use strict";
    var i = function(t, i) {
        this.oJumpTarget = t,
        this.$oCaption = e(this.oJumpTarget).find("[data-tips]"),
        i = e.extend({
            titCell: "quickJump",
            tips: !0,
            tipsName: "jump-tips"
        }, i),
        this.titCell = i.titCell,
        this.tips = i.tips,
        this.tipsName = i.tipsName,
        this.init()
    }
    ;
    i.prototype.init = function() {
        this.render(),
        this.handle()
    }
    ,
    i.prototype.render = function() {
        var e = document.createElement("div");
        e.className = this.titCell;
        var t = document.createElement("ul");
        t.className = "jump-ul";
        for (var i = 0; i < this.$oCaption.length; i++) {
            var a = this.$oCaption[i]
              , s = a.id
              , n = a.getAttribute("data-tips");
            t.innerHTML += '<li class="jump-li" data-view="' + s + '">' + n + "</li>"
        }
        e.appendChild(t),
        this.oJumpTarget.appendChild(e)
    }
    ,
    i.prototype.handle = function() {

        function t(t, i, a, s) {
            clearTimeout(t),
            t = setTimeout(function() {
                var t = i.changedTouches[0].clientX
                  , c = i.changedTouches[0].clientY
                  , l = document.elementFromPoint(t, c);
                if (e(l).hasClass("jump-li"))
                    n = t,
                    o = c,
                    r = l;
                else {
                    var d = r.parentNode.getBoundingClientRect()
                      , h = d.left
                      , u = d.right
                      , p = d.top
                      , m = d.bottom;
                    (h >= t || t >= u) && (p >= c || c >= m) ? l = document.elementFromPoint(n, o) : h >= t || t >= u ? l = document.elementFromPoint(n, c) : (p >= c || c >= m) && (l = document.elementFromPoint(t, o))
                }
                var f = l.getAttribute("data-view");
                if (f) {
                    var v = document.getElementById(f);
                    v.scrollIntoView(),
                    a && (s.innerHTML = v.getAttribute("data-tips"),
                    s.style.display = "block")
                }
            }
            , 10)
        }
        var i = this
          , a = null 
          , s = e("." + this.titCell)
          , n = 0
          , o = 0
          , r = null ;
        s.on("touchstart touchmove", ".jump-li", function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            t(a, e, i.tips, i.oTips)
        }
        ),
        this.tips && (s.append('<div class="' + this.tipsName + '"></div>'),
        this.oTips = document.querySelector("." + this.tipsName),
        s.on("touchend", ".jump-li", function() {
            clearTimeout(a),
            a = setTimeout(function() {
                i.oTips.style.display = ""
            }
            , 100)
        }
        ))
    }
    ,
    i.prototype.destroy = function() {
        var t = e("." + this.titCell);
        t.off("touchstart touchmove touchend").remove(),
        e("." + this.tipsName).remove()
    }
    ,
    e.mCfg.$body.on(t.tap,'.aside-main-area',function(){
    	var t=$(this);
    		if(!t.hasClass('upXXX')){
    			$(this).addClass('upXXX');
				e('[data-role="quickjump"]').each(function() {
					var t = e(this).data("titcell"),
						a = e(this).data("tips"),
						s = e(this).data("tipsname");
					new i(this, {
						titCell: t || "quickJump",
						tips: a,
						tipsName: s || "jump-tips"
					})
				});
    		}
    })
}
(Zepto, massCfg))