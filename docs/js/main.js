$(function() {
    FastClick.attach(document.body);
});


var massCfg = {
	tap: "touchstart",
	click: "click",
	hideClass: "fn-hide"
};
//tab
;(function($){
    var dom=$('[data-tab]');
    
    dom.each(function(){
        var t=$(this),
            a=t.attr('data-tab-a'),
            b=t.attr('data-tab-b');
            
        var init=function(){
            t.find(a).eq(0).addClass('active');
            t.find(b).eq(0).show();
        };
        init();
            t.on('click',a,function(){
                $(this).addClass('active').siblings().removeClass('active');
                t.find(b).eq($(this).index()).show().siblings(b).hide();
            });

    });
})(Zepto);
//aside
;
(function(a) {
		a.mCfg = {
			$document: a(document),
			$win: a(window),
			$body: a("body"),
			$wrapper: a(".wrapper"),
			$mask: a(".masks"),
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
		e.$mask = b(".masks");
		e.$aside = b(e.cfg.aside);
		e.$curAside = b(e.cfg.aside);
		e.scrollTop = 0;
		e.init();
		e.event();
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
				e.$mask = b(".masks");
				e.$mask.data("isClose", true)
			} else {
				e.$curAside = b(g ? ("." + g) : e.cfg.aside)
			}
			if (e.$mask.length <= 0) {
				b.mCfg.$body.append("<div class='masks fn-hide'></div>");
				e.$mask = b(".masks")
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
		b.mCfg.$document.on("click", ".masks, .aside-close", function(f) {
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
							//console.log(j)
							//template(a.attr('data-relation'),j);
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
}(Zepto));
//tag
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
(Zepto, massCfg));


!function(e, t) {
    "use strict";
    var i = function(t, i) {
        i = e.extend({
            container: ".container",
            open: "slideIn",
            close: "slideOut"
        }, i),
        this.$containerNode = e(i.container),
        this.$contentNode = function(e) {
            var t = e.$containerNode.children().first();
            return t.is("[data-side-content]") || (t = e.$containerNode.wrapInner("<div data-side-content>").children().first()),
            t
        }
        (this),
        this.$switchTarget = e("[data-side-target=" + i.target + "]"),
        this.$panelNode = e(t),
        this.$viewNode = this.$panelNode.find("[data-side-view]"),
        this.$closeNode = this.$panelNode.find("[data-side-close]"),
        this.$maskNode = this.$panelNode.find("[data-side-mask]"),
        this.openClass = i.open,
        this.closeClass = i.close,
        this.$delay = function(e) {
            if (!i.delay)
                return !1;
            var t, a = i.delay;
            return t = "true" === a ? e.$panelNode : "view" === a ? e.$viewNode : "mask" === a ? e.$maskNode : !1
        }
        (this),
        this.direct = this.$viewNode.data("side-view") ? this.$viewNode.data("side-view") : !1,
        this._EventHandle = e({}),
        this.init()
    }
    ;
    i.prototype.on = function() {
        this._EventHandle.on.apply(this._EventHandle, arguments)
    }
    ,
    i.prototype.off = function() {
        this._EventHandle.off.apply(this._EventHandle, arguments)
    }
    ,
    i.prototype.trigger = function() {
        this._EventHandle.trigger.apply(this._EventHandle, arguments)
    }
    ,
    i.prototype.init = function() {
        this.handle(),
        this.direct && this.touch()
    }
    ,
    i.prototype.handle = function() {
        this.$switchTarget.on("click", this.open.bind(this)),
        this.$closeNode.on("click", this.close.bind(this))
    }
    ,
    i.prototype.open = function() {
        function t() {
            this.clientHeight !== document.documentElement.clientHeight && (this.clientHeight = document.documentElement.clientHeight,
            e("body").css({
                height: this.clientHeight,
                overflow: "hidden",
                //position: 'fixed',
                //width:'100%'
            }).scrollTop(0))
        }
        this.trigger("open"),
        e(window).on("resize.sideReset, orientationchange.sideReset", t.bind(this)),
        this.clientHeight = document.documentElement.clientHeight,
        this.scrollTop = document.body.scrollTop,
        e("body").css({
            height: this.clientHeight,
            overflow: "hidden",
            //position: 'fixed',
            //width:'100%'
        }),
        this.$contentNode.css({
            "-webkit-transform": "translate3d(0,-" + this.scrollTop + "px,0)",
            transform: "translate3d(0,-" + this.scrollTop + "px,0)"
        }),
        this.$maskNode.on("touchmove", function(e) {
            e.preventDefault(),
            e.stopPropagation()
        }
        ),
        this.$panelNode.removeClass(this.closeClass).addClass(this.openClass).css("display", "block");
        var i = this
          , a = null 
          , s = !1
          , n = this.$viewNode.css(e.fx.cssPrefix + "animation-name");
        if (n) {
            if (clearTimeout(a),
            this.$viewNode.off(e.fx.animationEnd),
            "none" !== n)
                return void this.$viewNode.on(e.fx.animationEnd, function(e) {
                    s || e.target !== e.currentTarget || (s = !0,
                    i.trigger("openEnd"))
                }
                );
            var o = this.$viewNode.css(e.fx.cssPrefix + "animation-duration")
              , r = this.$viewNode.css(e.fx.cssPrefix + "animation-delay")
              , c = parseInt(o, 10)
              , l = parseInt(r, 10);
            c *= o.indexOf("ms") > 0 ? 1 : 1e3,
            l *= r.indexOf("ms") > 0 ? 1 : 1e3,
            a = setTimeout(function() {
                s || i.trigger("openEnd")
            }
            , c + l)
        } else
            this.trigger("openEnd")
    }
    ,
    i.prototype.close = function() {
       
        function t() {
            i.$panelNode.css("display", "none"),
            i.$contentNode.css({
                "-webkit-transform": "",
                transform: ""
            }),
            e("body").css({
                height: "",
                overflow: "",
                position: '',
            	width:''
            }).scrollTop(i.scrollTop),
            i.$maskNode.off("touchmove"),
            e(window).off("resize.sideReset, orientationchange.sideReset"),
            i.trigger("closeEnd")
        }
        var i = this
          , a = null 
          , s = !1;
        if (this.trigger("close"),
        this.$panelNode.removeClass(this.openClass).addClass(this.closeClass),
        this.$delay) {
            if (clearTimeout(a),
            this.$delay.off(e.fx.animationEnd),
            "none" !== this.$delay.css(e.fx.cssPrefix + "animation-name"))

                return void this.$delay.on(e.fx.animationEnd, function(e) {
                    s || e.target !== e.currentTarget || (s = !0,
                    t())
                }
                );
            var n = this.$delay.css(e.fx.cssPrefix + "animation-duration")
              , o = this.$delay.css(e.fx.cssPrefix + "animation-delay")
              , r = parseInt(n, 10)
              , c = parseInt(o, 10);
            r *= n.indexOf("ms") > 0 ? 1 : 1e3,
            c *= o.indexOf("ms") > 0 ? 1 : 1e3,
            a = setTimeout(function() {
                s || t()
            }
            , r + c)
        } else
            t()
    }
    ,
    i.prototype.touch = function() {
        function e(e) {
            a = !1,
            s = e.targetTouches[0].pageX,
            n = Math.floor(i.$viewNode.width() / 2)
        }
        function t(e) {
            if (!a) {
                var t = e.targetTouches[0].pageX - s;
                if (Math.abs(t) >= n) {
                    var o = t > 0 ? "right" : "left";
                    o === i.direct && (a = !0,
                    i.close())
                }
            }
        }
        this.$viewNode.on("touchstart", e).on("touchmove", t);
        var i = this
          , a = !0
          , s = 0
          , n = 0
    }
    ,
    i.prototype.destroy = function() {
        this.close(),
        this.$switchTarget.off("click"),
        this.$closeNode.off("click"),
        this.isSliding && this.$viewNode.off("touchstart").off("touchmove")
    }
    ,
    e("[data-role-side]").each(function() {
        var t = e.parseJSON(this.getAttribute("data-role-side"));
        window.side = window.side || {},
        window.side[t.name] = new i(this,t)
    }
    )
}
(Zepto, massCfg);

//Swipe
function Swipe(m, e) {
	var f = function() {};
	var u = function(C) {
		setTimeout(C || f, 0)
	};
	var B = {
		addEventListener: !!window.addEventListener,
		touch: ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
		transitions: (function(C) {
			var E = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
			for (var D in E) {
				if (C.style[E[D]] !== undefined) {
					return true
				}
			}
			return false
		})(document.createElement("swipe"))
	};
	if (!m) {
		return
	}
	var c = m.children[0];
	var s, d, r, g;
	e = e || {};
	var k = parseInt(e.startSlide, 10) || 0;
	var v = e.speed || 300;
	e.continuous = e.continuous !== undefined ? e.continuous : true;

	function n() {
		s = c.children;
		g = s.length;
		if (s.length < 2) {
			e.continuous = false
		}
		if (B.transitions && e.continuous && s.length < 3) {
			c.appendChild(s[0].cloneNode(true));
			c.appendChild(c.children[1].cloneNode(true));
			s = c.children
		}
		d = new Array(s.length);
		r = m.getBoundingClientRect().width || m.offsetWidth;
		c.style.width = (s.length * r) + "px";
		var D = s.length;
		while (D--) {
			var C = s[D];
			C.style.width = r + "px";
			if (e.scale && $(C).find("img").length == 1) {
				$(C).find("img").css("height", r * e.scale + "px")
			}
			C.setAttribute("data-index", D);
			if (B.transitions) {
				C.style.left = (D * -r) + "px";
				q(D, k > D ? -r : (k < D ? r : 0), 0)
			}
		}
		if (e.continuous && B.transitions) {
			q(i(k - 1), -r, 0);
			q(i(k + 1), r, 0)
		}
		if (!B.transitions) {
			c.style.left = (k * -r) + "px"
		}
		m.style.visibility = "visible"
	}

	function o() {
		if (e.continuous) {
			a(k - 1)
		} else {
			if (k) {
				a(k - 1)
			}
		}
	}

	function p() {
		if (e.continuous) {
			a(k + 1)
		} else {
			if (k < s.length - 1) {
				a(k + 1)
			}
		}
	}

	function i(C) {
		return (s.length + (C % s.length)) % s.length
	}

	function a(G, D) {
		if (k == G) {
			return
		}
		if (B.transitions) {
			var F = Math.abs(k - G) / (k - G);
			if (e.continuous) {
				var C = F;
				F = -d[i(G)] / r;
				if (F !== C) {
					G = -F * s.length + G
				}
			}
			var E = Math.abs(k - G) - 1;
			while (E--) {
				q(i((G > k ? G : k) - E - 1), r * F, 0)
			}
			G = i(G);
			q(k, r * F, D || v);
			q(G, 0, D || v);
			if (e.continuous) {
				q(i(G - F), -(r * F), 0)
			}
		} else {
			G = i(G);
			j(k * -r, G * -r, D || v)
		}
		k = G;
		u(e.callback && e.callback(k, s[k]))
	}

	function q(C, E, D) {
		l(C, E, D);
		d[C] = E
	}

	function l(D, G, F) {
		var C = s[D];
		var E = C && C.style;
		if (!E) {
			return
		}
		E.webkitTransitionDuration = E.MozTransitionDuration = E.msTransitionDuration = E.OTransitionDuration = E.transitionDuration = F + "ms";
		E.webkitTransform = "translate(" + G + "px,0)translateZ(0)";
		E.msTransform = E.MozTransform = E.OTransform = "translateX(" + G + "px)"
	}

	function j(G, F, C) {
		if (!C) {
			c.style.left = F + "px";
			return
		}
		var E = +new Date;
		var D = setInterval(function() {
			var H = +new Date - E;
			if (H > C) {
				c.style.left = F + "px";
				if (A) {
					x()
				}
				e.transitionEnd && e.transitionEnd.call(event, k, s[k]);
				clearInterval(D);
				return
			}
			c.style.left = (((F - G) * (Math.floor((H / C) * 100) / 100)) + G) + "px"
		}, 4)
	}
	var A = e.auto || 0;
	var w;

	function x() {
		w = setTimeout(p, A)
	}

	function t() {
		A = 0;
		clearTimeout(w)
	}
	var h = {};
	var y = {};
	var z;
	var b = {
		handleEvent: function(C) {
			switch (C.type) {
				case "touchstart":
					this.start(C);
					break;
				case "touchmove":
					this.move(C);
					break;
				case "touchend":
					u(this.end(C));
					break;
				case "webkitTransitionEnd":
				case "msTransitionEnd":
				case "oTransitionEnd":
				case "otransitionend":
				case "transitionend":
					u(this.transitionEnd(C));
					break;
				case "resize":
					u(n);
					break
			}
			if (e.stopPropagation) {
				C.stopPropagation()
			}
		},
		start: function(C) {
			var D = C.touches[0];
			h = {
				x: D.pageX,
				y: D.pageY,
				time: +new Date
			};
			z = undefined;
			y = {};
			c.addEventListener("touchmove", this, false);
			c.addEventListener("touchend", this, false)
		},
		move: function(C) {
			if (C.touches.length > 1 || C.scale && C.scale !== 1) {
				return
			}
			if (e.disableScroll) {
				C.preventDefault()
			}
			var D = C.touches[0];
			y = {
				x: D.pageX - h.x,
				y: D.pageY - h.y
			};
			if (typeof z == "undefined") {
				z = !!(z || Math.abs(y.x) < Math.abs(y.y))
			}
			if (!z) {
				C.preventDefault();
				t();
				if (e.continuous) {
					l(i(k - 1), y.x + d[i(k - 1)], 0);
					l(k, y.x + d[k], 0);
					l(i(k + 1), y.x + d[i(k + 1)], 0)
				} else {
					y.x = y.x / ((!k && y.x > 0 || k == s.length - 1 && y.x < 0) ? (Math.abs(y.x) / r + 1) : 1);
					l(k - 1, y.x + d[k - 1], 0);
					l(k, y.x + d[k], 0);
					l(k + 1, y.x + d[k + 1], 0)
				}
			}
		},
		end: function(E) {
			var G = +new Date - h.time;
			var D = Number(G) < 250 && Math.abs(y.x) > 20 || Math.abs(y.x) > r / 2;
			var C = !k && y.x > 0 || k == s.length - 1 && y.x < 0;
			if (e.continuous) {
				C = false
			}
			var F = y.x < 0;
			if (!z) {
				if (D && !C) {
					if (F) {
						if (e.continuous) {
							q(i(k - 1), -r, 0);
							q(i(k + 2), r, 0)
						} else {
							q(k - 1, -r, 0)
						}
						q(k, d[k] - r, v);
						q(i(k + 1), d[i(k + 1)] - r, v);
						k = i(k + 1)
					} else {
						if (e.continuous) {
							q(i(k + 1), r, 0);
							q(i(k - 2), -r, 0)
						} else {
							q(k + 1, r, 0)
						}
						q(k, d[k] + r, v);
						q(i(k - 1), d[i(k - 1)] + r, v);
						k = i(k - 1)
					}
					e.callback && e.callback(k, s[k])
				} else {
					if (e.continuous) {
						q(i(k - 1), -r, v);
						q(k, 0, v);
						q(i(k + 1), r, v)
					} else {
						q(k - 1, -r, v);
						q(k, 0, v);
						q(k + 1, r, v)
					}
				}
			}
			c.removeEventListener("touchmove", b, false);
			c.removeEventListener("touchend", b, false)
		},
		transitionEnd: function(C) {
			if (parseInt(C.target.getAttribute("data-index"), 10) == k) {
				if (A) {
					x()
				}
				e.transitionEnd && e.transitionEnd.call(C, k, s[k])
			}
		}
	};
	n();
	if (A) {
		x()
	}
	if (B.addEventListener) {
		if (B.touch) {
			c.addEventListener("touchstart", b, false)
		}
		if (B.transitions) {
			c.addEventListener("webkitTransitionEnd", b, false);
			c.addEventListener("msTransitionEnd", b, false);
			c.addEventListener("oTransitionEnd", b, false);
			c.addEventListener("otransitionend", b, false);
			c.addEventListener("transitionend", b, false)
		}
		window.addEventListener("resize", b, false)
	} else {
		window.onresize = function() {
			n()
		}
	}
	return {
		setup: function() {
			n()
		},
		slide: function(D, C) {
			t();
			a(D, C)
		},
		prev: function() {
			t();
			o()
		},
		next: function() {
			t();
			p()
		},
		stop: function() {
			t()
		},
		getPos: function() {
			return k
		},
		getNumSlides: function() {
			return g
		},
		kill: function() {
			t();
			c.style.width = "";
			c.style.left = "";
			var D = s.length;
			while (D--) {
				var C = s[D];
				C.style.width = "";
				C.style.left = "";
				if (B.transitions) {
					l(D, 0, 0)
				}
			}
			if (B.addEventListener) {
				c.removeEventListener("touchstart", b, false);
				c.removeEventListener("webkitTransitionEnd", b, false);
				c.removeEventListener("msTransitionEnd", b, false);
				c.removeEventListener("oTransitionEnd", b, false);
				c.removeEventListener("otransitionend", b, false);
				c.removeEventListener("transitionend", b, false);
				window.removeEventListener("resize", b, false)
			} else {
				window.onresize = null
			}
		}
	}
}
if (window.jQuery || window.Zepto) {
	(function(b) {
		b.fn.Swipe = function(c) {
			return this.each(function() {
				b(this).data("Swipe", new Swipe(b(this)[0], c))
			})
		};
		var a = b("[data-role=carousel]");
		a.each(function() {
			var m = b(this),
				e = m.data("speed") || 300,
				d = m.data("start") || 0,
				k = m.data("autoplay"),
				r = k == false ? 0 : (m.data("timeout") || 3000),
				o = b(this).data("stopPropagation") || false,
				n = m.data("type") || 1,
				f = m.data("scale"),
				p = m.data("def-img") || "http://x.autoimg.cn/2scimg/m/20160427/def-upload-" + (f || "4x3") + ".png",
				h = m.find(".pos"),
				q = m.find(".carousel").children(),
				j = q.length;
			if (h.length > 0 && n == 1) {
				h.find("span").replaceWith("<span><b>" + (j > 0 ? d + 1 : 0) + "</b>/<em>" + j + "</em></span>")
			} else {
				if (h.length > 0 && n == 2) {
					var c = "",
						g = 0;
					for (g; g < j; g++) {
						c += "<span " + (g == d ? "class='active'" : "") + "></span>"
					}
					h.addClass("carousel-nav").html(c)
				}
			}
			if (n == 3 || n == 1) {
				//h.find("span").replaceWith("<span><b>" + (j > 0 ? d + 1 : 0) + "</b>/<em>" + j + "</em></span>");
				var l = false;
				m.find(".c-item").each(function() {
					var i = b(this),
						s = i.data("title");
					if (s) {
						l = true
					}
				});
				if (n == 3) {
					m.after(h.addClass("carousel-nav-03"));
					m.append("<p class='carousel-info'>" + (m.find(".c-item:nth-of-type(1)").data("title") || "") + "</p>")
				} else {
					var arr=[];arr.length=j;
					h.css({'width':j*16,'marginLeft':-(j*16/2)}).html('<b>'+arr.join('</b><b>')+'</b>');
					h.find('b').eq(0).addClass('on');
				}
			}
			m.find(".c-item").eq(0).find("img[data-src-load]").each(function() {
				var s = b(this);
				s.attr("src", s.data("src-load")).on("error", function() {
					b(this).attr("src", p)
				});
				var i = s.parents(".c-item").next();
				if (i.length) {
					i.find("img[data-src-load]").each(function() {
						var t = b(this);
						t.attr("src", t.data("src-load")).on("error", function() {
							b(this).attr("src", p)
						})
					})
				}
			});
			m.Swipe({
				startSlide: d,
				speed: e,
				auto: r,
				scale: f ? (f.split("x") ? f.split("x")[1] / f.split("x")[0] : false) : false,
				continuous: false,
				disableScroll: false,
				stopPropagation: false,
				callback: function(i, s) {},
				transitionEnd: function(u, v) {

					
					if (n == 1) {
						var i = m.find(".c-item:nth-of-type(" + (u + 1) + ")");
						//h.html((h.find("p").length ? h.find("p")[0].outerHTML : "") + "<span><b>" + (u + 1) + "</b>/<em>" + j + "<em></span>")
					} else {
						if (n == 2) {
							h.find("span").removeClass("active")
						} else {
							if (n == 3) {
								m.find(".carousel-info").html(m.find(".c-item:nth-of-type(" + (u + 1) + ")").data("title") || "")
							}
						}
					}
					if (j <= 2) {
						if (n == 1 || n == 3) {
							h.find("span").find("b").html(u > j - 1 ? u - j + 1 : u + 1)
						} else {
							h.find("span:nth-of-type(" + (u > j - 1 ? u - j + 1 : u + 1) + ")").addClass("active")
						}
					} else {
						if (n == 1 || n == 3) {
							//h.find("span").find("b").html(u + 1)
						} else {
							h.find("span:nth-of-type(" + (u + 1) + ")").addClass("active")
						}
					}
					var t = function(x) {
						if (x.length > 0) {
							var z = 0,
								w = [];
							x.each(function(A, B) {
								var C = b(B);
								if (!C.attr("src") || C.attr("src") != C.data("src-load")) {
									w.push(C)
								}
							});
							var y = w.length;
							b.each(w, function(A) {
								w[A].attr({
									src: w[A].data("src-load")
								}).on("error", function() {
									b(this).attr("src", p)
								})
							})
						}
					};
					h.find('b').eq(u).addClass('on').siblings('b').removeClass('on');
					t(b(v).find("img[data-src-load]"));
					var s = b(v).next();
					if (s.length) {
						t(s.find("img[data-src-load]"))
					}
				}
			})
		})
	})(window.jQuery || window.Zepto)
};


;(function($){
    var _alert=function(opt){
        var opts={}
        $.extend(opts,opt);
        
        var $dom=$('#alert_box'),
            tmp='<section class="alertbox fn-hide" id="alert_box">'+
                '<div class="alert">'+
                    '<div class="info"><i class="iconfont ok">&#xe613;</i>已加入对比框中<br>您还可以继续添加</div>     '+
                    '<div class="handle fn-hide"><span class="btn primary small">'+
                        '<em class="fn-oneword"></em>确定<em class="fn-oneword"></em></span>'+
                    '</div>'+
                '</div>'+
                '<div class="mask"></div>'+
            '</section>';
            if(!$dom.length){
                $('body').append(tmp);
            }
            $('#alert_box').removeClass('fn-hide');

        setTimeout(function(){
            $('#alert_box').addClass('fn-hide');
        },opts.speed || 1500);
        return this;
    }
    window._alert=_alert;
})(Zepto);