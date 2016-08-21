var massCfg = {
	tap: "touchstart",
	click: "click",
	hideClass: "fn-hide",
	weiboAppKey: "1035238687"
};
! function(e) {
	"use strict";
	var t = document;
	e.getScript = function(e, i) {
		var a = t.createElement("script");
		a.src = e, a.async = "async", i && (a.onload = i), t.head.appendChild(a)
	}, e.setCookie = function(e, i, a) {
		var s = e + "=" + escape(i),
			n = new Date,
			o = 2592e3,
			r = "/",
			c = ".autohome.com.cn";
		a = a || {}, a && (a.expireHours && (o = 3600 * a.expireHours * 1e3), n.setTime(n.getTime() + o), s += "; expires=" + n.toGMTString(), a.path && (r = a.path), s += "; path=" + r, a.domain && (c = a.domain), s += "; domain=" + c, a.secure && (s += "; true")), t.cookie = s
	}, e.getCookie = function(e, i) {
		var a = t.cookie,
			s = a.length,
			n = 0,
			o = 0;
		return s > 0 && (n = a.indexOf(e + "="), -1 !== n) ? (n = n + e.length + 1, o = a.indexOf(";", n), -1 === o && (o = s), unescape(a.substring(n, o))) : i
	};
	var i = {};
	e.tmpl = function(t, a) {
		a = a || {}, "#" === t[0] && (t = e(t).html()), t = t.trim();
		var s = i[t] || new Function("o", "var p=[];with(o){p.push('" + t.replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%})/g, "	").split("'").join("\\'").split("	").join("'").replace(/{%=(.+?)%}/g, "',$1,'").split("{%").join("');").split("%}").join("p.push('") + "');}return p.join('');");
		return s.apply(a, [a])
	};
	var a = navigator.userAgent;
	e.os = {
		iphone: -1 !== a.indexOf("iPhone"),
		android: -1 !== a.indexOf("Android")
	}, e.browser = {
		safari: e.os.iphone && a.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))\/([\d.]+$)/),
		wechat: -1 !== a.indexOf("MicroMessenger/"),
		uc: -1 !== a.indexOf("UCBrowser"),
		qq: -1 !== a.indexOf("MQQBrowser/")
	}, e.getVersion = function(e) {
		var t = e.split("."),
			i = parseFloat(t[0] + "." + t[1]);
		return i
	};
	var s = {
		url: "http://pv.alert.autohome.com.cn/click_count.php?",
		errorurl: "http://pv.alert.autohome.com.cn/error_count.php?",
		send: function(e) {
			var t = new Image;
			t.setAttribute("src", e)
		},
		push: function(e) {
			var t = encodeURIComponent;
			if (void 0 === e) return void s.send(s.errorurl + "json=arguments is invalid&curl=" + t(document.URL));
			try {
				"string" == typeof e && (e = new Function("return " + e)())
			} catch (i) {
				return void s.send(s.errorurl + "json=" + e + "&ctime=" + 1 * new Date + "&e=" + i + "&curl=" + t(document.URL))
			}
			var a = "";
			for (var n in e) a += n + "=" + e[n] + "&";
			a += "ctime=" + 1 * new Date + "&rurl=" + t(document.referrer) + "&curl=" + t(document.URL), s.send(s.url + a)
		}
	};
	e(document).on("click", "[data-eid]", function() {
		var e = this.dataset,
			t = {};
		for (var i in e)
			if (i.indexOf("eid") >= 0) {
				var a = i;
				a.length > 3 && (a = i.substring(3)), t[a.toLowerCase()] = e[i]
			}
		return e = null, t instanceof Object ? void s.push(t) : !1
	})
}(Zepto),
function(e, t) {
	"use strict";
	var i, a = e("[data-role=backTop]"),
		s = e(window),
		n = t.click,
		o = t.hideClass;
	s.on("scroll", function() {
		i && clearTimeout(i), i = setTimeout(function() {
			s.scrollTop() > s.height() ? a.removeClass(o) : a.addClass(o)
		}, 100)
	}), a.on(n, function() {
		window.scrollTo(0, 0)
	})
}(Zepto, massCfg),
function(e, t) {
	"use strict";
	var i = '[data-role="dropdown"]',
		a = t.hideClass,
		s = t.tap;
	e(document).on(s, i, function(t) {
		var i = e(this);
		i.toggleClass("activate").next().toggleClass(a), t.stopPropagation(), t.preventDefault()
	})
}(Zepto, massCfg),
function e(t, i) {
	"use strict";

	function a(e) {
		var t = e.getBoundingClientRect();
		return (t.top >= 0 && t.left >= 0 && t.top) <= (window.innerHeight || c.documentElement.clientHeight) + d
	}

	function s() {
		clearTimeout(r), r = setTimeout(n, h)
	}

	function n() {
		var e = l.length;
		if (e > 0)
			for (var t = 0; e > t; t++) {
				var n = l[t];
				n && a(n) && ("" === n.src || n.src === window.location.href || n.src.indexOf("loading") > -1) && (n.src = n.getAttribute(i), n.removeAttribute(i), l.splice(t, 1), e = l.length, t--)
			} else window.removeEventListener("scroll", s), clearTimeout(r)
	}
	i = i || "data-src";
	var o, r, c = document,
		l = [],
		d = 600,
		h = 250,
		u = "img[" + i + "]";
	t ? "string" == typeof t ? o = c.querySelectorAll(t + " " + u) : "object" == typeof t && (o = t.querySelectorAll(u)) : o = c.querySelectorAll(u);
	for (var p = 0; p < o.length; p++) l.push(o[p]);
	n(), window.addEventListener("scroll", s, !1), window.ahm = window.ahm || {}, window.ahm.lazyload = e
}(),
function t(e, i) {
	"use strict";

	function a(e, t) {
		var i = e.find(l).children().eq(t),
			a = e.find(d).children().eq(t);
		i.addClass(h).siblings().removeClass(h), a.removeClass(o).siblings().addClass(o)
	}

	function s(t) {
		var i = t || c;
		e(i).each(function() {
			var t = this.dataset.tabActive || 1;
			a(e(this), --t)
		})
	}
	if (e.os.iphone) {
		var n = document.createElement("style");
		n.type = "text/css", n.innerHTML = '[data-role="tab"] .item{cursor:pointer;}', document.head.appendChild(n)
	}
	var o = i.hideClass,
		r = i.click,
		c = "[data-role=tabSwitch]",
		l = "[data-role=tab]",
		d = "[data-role=content]",
		h = "activate";
	e(document).on(r, l, function(t) {
		if (t.preventDefault(), t.stopPropagation(), e(this).has(t.target).length) {
			var i = e(this).find(t.target),
				s = e(this).closest(c),
				n = i.index();
			a(s, n)
		}
	}), s(), t.setActive = function(t, i) {
		a(e(t), --i)
	}, t.init = s, window.ahm = window.ahm || {}, window.ahm.tabSwitch = t
}(Zepto, massCfg),
function(e) {
	"use strict";
	var t = e('[data-role="overSlide"]');
	e(t).each(function() {
		function t(e) {
			f = e.changedTouches[0].clientX
		}

		function i(e) {
			e.preventDefault(), n(-(f - e.changedTouches[0].clientX - m))
		}

		function a(e) {
			var t = f - e.changedTouches[0].clientX;
			m += 2.5 * -t, 0 > m && m > -l ? r.animate({
				translate3d: m + "px,0,0"
			}, 300, "ease-out") : o()
		}

		function s() {
			u > l && (r.css("width", u).children().css("width", h), m = -(h * p), 0 !== p && (m += c / 2 * h - h / 2), n(m), r.on("touchstart", t).on("touchmove", i).on("touchend", a).on("click", "a", function() {}), o())
		}

		function n(e) {
			r.css("-webkit-transform", "translate3d(" + e + "px,0,0)")
		}

		function o() {
			m > 0 ? (r.animate({
				translate3d: "0px,0,0"
			}, 300, "ease"), m = 0) : -(u - l) > m && (r.animate({
				translate3d: l - u + "px,0,0"
			}, 300, "ease"), m = l - u)
		}
		var r = e(this),
			c = r.data("cols") || 4,
			l = r.parent().width(),
			d = r.children().length,
			h = l / c,
			u = h * d,
			p = e(".activate", r).index() || 0,
			m = 0,
			f = 0;
		s()
	})
}(Zepto),
function(e, t) {
	"use strict";
	var i = t.hideClass;
	e.fn.popAlert = function(e) {
		var t = this;
		e = e || 3e3, t.removeClass(i), setTimeout(function() {
			t.animate({
				opacity: 0
			}, 200, function() {
				t.addClass(i).css("opacity", "1")
			})
		}, e)
	}
}(Zepto, massCfg),
function(e, t) {
	"use strict";
	e('[data-role="carousel"]').each(function() {
		function i(e) {
			N || (j = c(e).posX, H = c(e).posY, A = !1, clearInterval(D))
		}

		function a(e) {
			return N || (z = c(e).posX, S = c(e).posY, E = z - j, O = S - H, Math.abs(O) - Math.abs(E) < 5 && (e.preventDefault(), A = !0, n(E + _ * -C))), !0
		}

		function s(e) {
			A && !N && (z = c(e).posX, E = z - j, Math.abs(E) < I ? o(_) : 0 > z - j ? (o(++_), d(++R)) : (o(--_), d(--R)), l())
		}

		function n(e) {
			b.css("-webkit-transform", "translate3d(" + e + "px,0,0)")
		}

		function o(e) {
			var t = C * -e;
			N = !0, b.animate({
				translate3d: t + "px, 0, 0"
			}, v.speed, "ease-out", r)
		}

		function r() {
			var e;
			_ === k + 1 ? (e = R % k, x.eq(e).clone().appendTo(b), b.children().first().remove(), n(--_ * -C)) : 0 === _ && (e = R % k - 2, 0 > R && (e += k), x.eq(e).clone().prependTo(b), b.children().last().remove(), n(++_ * -C)), N = !1
		}

		function c(e) {
			return {
				posX: e.changedTouches[0].clientX,
				posY: e.changedTouches[0].clientY
			}
		}

		function l() {
			clearInterval(D), "true" === v.autoplay && (D = setInterval(function() {
				o(++_), d(++R)
			}, v.timeout))
		}

		function d(t) {
			t >= 0 ? (t %= k, 0 === t && (t = k)) : t = t % k + k, y.find("i").eq(t - 1).addClass(P).siblings().removeClass(P);
			var i = "<span>" + t + "/" + k + "</span>";
			event && !$ && (T = e(q, b).slice(1, k + 1), h(), $ = !0);
			var a = T.eq(t - 1).attr("title");
			e(B, m).html(a + i)
		}

		function h(t) {
			if ("number" == typeof t) {
				var i = e(w, b).eq(t).find(q)[0];
				i && !i.src && (i.src = i.dataset.srcs)
			} else e(w, b).find(q).each(function(e, t) {
				t.src || (t.src = t.dataset.srcs)
			})
		}

		function u() {
			C = e(g, m).parent().width(), b.css("width", C * (k + 2)), e(w, b).css("width", C), n(_ * -C)
		}

		function p() {
			x.first().clone().appendTo(b), x.last().clone().prependTo(b), h(1);
			for (var t = 0, i = ""; k > t; t++) i += "<i></i>";
			e(i).appendTo(e(".dot", m)), d(1), e(document).on("ready", function() {
				h(0), h(2)
			}), e(window).on("resize", u), u(), l()
		}
		var m = e(this),
			f = t.tap,
			v = {
				autoplay: "false",
				speed: 150,
				timeout: 3e3
			};
		e.extend(v, this.dataset);
		var g = ".carousel",
			w = ".c-item",
			b = e(g, m),
			y = e(".navi", m),
			C = b.parent().width(),
			x = e(w, b),
			k = x.length,
			T = e("img", b),
			$ = !1,
			q = "img[title]",
			N = !1,
			j = 0,
			H = 0,
			z = 0,
			S = 0,
			E = 0,
			O = 0,
			I = 30,
			A = !1,
			D = null,
			_ = 1,
			R = 1,
			M = ".next",
			U = ".prev",
			P = "activate",
			B = "h2";
		b.on("touchstart", i).on("touchmove", a).on("touchend", s), y.on(f, M, function() {
			N || (o(++_), d(++R))
		}).on(f, U, function() {
			N || (o(--_), d(--R))
		}), p()
	})
}(Zepto, massCfg),
function i(e, t) {
	"use strict";

	function a() {
		e($).on(k, function(t) {
			t.preventDefault(), I = this.dataset.entry, E = e(window).scrollTop(), S || (S = e(x).appendTo(e("body")));
			var i = e(this).data("value");
			if (i && e("[name=q],[name=pq]", S).val(i), S.removeClass(T), q.addClass(T), e("[name=entry]", S).val(I), this.dataset.searchtype) {
				var a = this.dataset.searchtype;
				e("[value=" + a + "]", S).prop("checked", !0), h.call({
					value: a
				})
			}
			S.on("input focus", M, m).on(k, U, o).on("submit", "form", c).on(k, "dd a", l).on(k, P, d).on(k, B, r).on("change", "[type=radio]", h).on(k, "header " + _, f), b()
		})
	}

	function s(t) {
		var i = "";
		t && (t.tlist || t.slist) && (i = e.tmpl(C, t)), e(R, S).html(i)
	}

	function n(e) {
		var t = {
			tlist: [],
			slist: [],
			zhida: "\u8f66\u7cfb",
			sousuo: "\u7efc\u5408",
			sousuoType: "zonghe",
			entryid: I,
			hasHistory: !1
		};
		if (e) e.forEach(function(e) {
			delete e.wordtype, 1 === e.tiptype ? t.tlist.push(e) : t.slist.push(e)
		});
		else {
			for (var i = y.getHistory(), a = "luntan" === O ? i.f : i.a, s = 0; s < a.t.length; s++) {
				var n = a.t[s];
				if ("" !== n) {
					var o = n.split("@");
					t.tlist.push({
						wordid: o[1],
						name: o[0],
						bbs: o[2]
					})
				}
			}
			for (var r = a.k.split(","), c = 0; c < r.length; c++) "" !== r[c] && t.slist.push({
				name: r[c]
			});
			t.hasHistory = !0
		}
		switch (O) {
			case "wenzhang":
				t.sousuo = "\u6587\u7ae0";
				break;
			case "luntan":
				t.zhida = t.sousuo = "\u8bba\u575b";
				break;
			case "shipin":
				t.sousuo = "\u89c6\u9891"
		}
		return t.sousuoType = O, t
	}

	function o() {
		e(M, S).val(""), b()
	}

	function r() {
		y.clearHistory(), b()
	}

	function c() {
		var t = w(e(M, S).val());
		"" !== t && v(t, O)
	}

	function l() {
		var e = this.innerHTML;
		v(e, O, this.dataset.id, this.dataset.bbs), g(e)
	}

	function d() {
		var t = e(this).prev().html();
		e(M, S).val(t), b()
	}

	function h() {
		O = this.value, e("form", S).attr("action", N + O), "zhaoche" === O ? e(M, S).attr("placeholder", "\u8bd5\u8bd5\u641c\u201c10\u4e07\u5de6\u53f3SUV\u201d") : e(M, S).attr("placeholder", "\u8bf7\u8f93\u5165"), b()
	}

	function u() {
		var e = N + "Api/";
		switch (O) {
			case "luntan":
				e += "Topic";
				break;
			case "shipin":
				e += "Video"
		}
		return e += "Suggestword/search"
	}

	function p(t) {
		if ("zhaoche" === O) return void s();
		var i = u(O);
		e.ajax({
			url: i,
			data: {
				q: encodeURIComponent(t),
				chl: encodeURIComponent(O)
			},
			dataType: "jsonp",
			success: function(e) {
				0 === e.returncode && s(n(e.result))
			}
		})
	}

	function m() {
		var e = this.value;
		A || (A = setTimeout(function() {
			"" !== e ? p(e) : s(y.hasHistory() ? n() : {}), A = null
		}, D))
	}

	function f() {
		q.removeClass(T), S.addClass(T), e(window).scrollTop(E)
	}

	function v(e, t, i, a) {
		var s, n = y.getHistory();
		s = "luntan" !== t ? n.a : n.f;
		var o = s.t,
			r = s.k,
			c = [];
		if (i) {
			if (o.indexOf(e + "@" + i + "@" + a) > -1) return;
			o.unshift(e + "@" + i + "@" + a), o.length > 3 && o.pop(), s.t = o
		} else {
			if (r.indexOf(e) > -1) return;
			c = r.split(","), c.unshift(e), c.length > 3 && (c.length = 3), s.k = c.join(",")
		}
		"luntan" === t ? n.f = s : n.a = s, y.setHistory(n)
	}

	function g(e) {
		var t = new Image,
			i = j + "?word=" + e + "&type=";
		i += H[O], t.src = i
	}

	function w(t) {
		return e.trim(t.replace(/<|>|!#$%^&#$%^&amp;*()\[\]\{\}\?,\&#$%^&amp;*()\[\]\{\}\?,\&lt;\&#$%^&amp;*()\[\]\{\}\?,\&lt;\&gt;\uff0c\u3002\u3010\u3011\uff08\uff09/g, ""))
	}

	function b() {
		window.scrollTo(0, 0), setTimeout(function() {
			e(M, S)[0].focus()
		}, 20)
	}
	var y = {
			key: "searchhistory",
			emptydata: {
				a: {
					t: [""],
					k: ""
				},
				f: {
					t: [""],
					k: ""
				}
			},
			getHistory: function() {
				var t = e.getCookie(this.key, !1);
				return t ? JSON.parse(t) : (this.clearHistory(), this.emptydata)
			},
			setHistory: function(t) {
				e.setCookie(this.key, JSON.stringify(t))
			},
			clearHistory: function() {
				this.setHistory(this.emptydata)
			},
			hasHistory: function() {
				return JSON.stringify(this.getHistory()) !== JSON.stringify(this.emptydata)
			}
		},
		C = '{% var entryid = entryid || 0; %}{% if (tlist.length > 0) { %} <dl class="s-through">  <dt>    <i class="iconfont icon-car"></i>\u76f4\u8fbe{%=zhida%}    <span>\u70b9\u51fb<i class="iconfont icon-add"></i>\u6dfb\u52a0\u5230\u8f93\u5165\u6846</span>  </dt>  {% for (var i in tlist) { %}     {% var v = tlist[i]; %}     <dd>    {% if (zhida !== "\u8bba\u575b") { %}      <a href="http://m.autohome.com.cn/{%=v.wordid%}/" data-id="{%=v.wordid%}">{%=v.name%}</a>      {% } else { %}      <a href="http://club.m.autohome.com.cn/bbs/forum-{%=v.bbs%}-{%=v.wordid%}-1.html" data-id="{%=v.wordid%}" data-bbs="{%=v.bbs%}">{%=v.name%}</a>      {% } %}    <i class="iconfont icon-add"></i>    </dd>    {% } %} </dl>{% } %} {% if (slist.length > 0) { %} <dl class="s-mixed">  <dt>    <i class="iconfont icon-search"></i>{%=sousuo%}\u641c\u7d22    <span>\u70b9\u51fb<i class="iconfont icon-add"></i>\u6dfb\u52a0\u5230\u8f93\u5165\u6846</span>  </dt>  {% for (var i in slist) { %}     {% var v = slist[i]; %}     <dd>    <a href="http://sou.m.autohome.com.cn/{%=sousuoType%}?q={%=v.name%}&entry={%=entryid%}">{%=v.name%}</a>    <i class="iconfont icon-add"></i>    </dd>    {% } %} </dl>{% } %}{% if (!!hasHistory) { %}<div class="s-clear"><span class="btn">\u6e05\u9664\u641c\u7d22\u5386\u53f2</span></div>{% } %}',
		x = '<style>.search header .icon-cross{padding:8px;}.search .s-tab label{margin-right:15px;}</style><section class="search fn-hide">   <form method="get" action="http://sou.m.autohome.com.cn/zonghe">  <input type="hidden" name="entry" value="">  <input type="hidden" name="pq" value="">  <header>    <h1 class="s-tab">      <input type="radio" id="s-tab01" name="type" value="zonghe" checked />      <label for="s-tab01">\u7efc\u5408</label>      <input type="radio" id="s-tab02" name="type" value="wenzhang" />      <label for="s-tab02">\u6587\u7ae0</label>      <input type="radio" id="s-tab03" name="type" value="luntan" />      <label for="s-tab03">\u8bba\u575b</label>      <input type="radio" id="s-tab04" name="type" value="shipin" />      <label for="s-tab04">\u89c6\u9891</label>      <input type="radio" id="s-tab05" name="type" value="zhaoche" />      <label for="s-tab05">\u627e\u8f66</label>    </h1>    <i class="iconfont icon-cross"></i>  </header>  <section class="s-index">    <div class="s-form">      <input type="text" required placeholder="\u8bf7\u8f93\u5165" name="q" autocomplete="off" />      <i class="iconfont icon-cross clearinput"></i>      <button class="iconfont icon-search"></button>    </div>  </section>  <section class="s-result">  </section></section>',
		k = t.click,
		T = t.hideClass,
		$ = "[data-role=searchTrigger]",
		q = e(".wrapper"),
		N = "http://sou.m.autohome.com.cn/",
		j = "//sou.autohome.com.cn/stats/TipWordSouLog.ashx",
		H = {
			zonghe: 30,
			wenzhang: 31,
			luntan: 32,
			shipin: 33,
			zhaoche: 105
		},
		z = "s-",
		S = null,
		E = 0,
		O = "zonghe",
		I = 0,
		A = null,
		D = 300,
		_ = ".icon-cross",
		R = "." + z + "result",
		M = "[type=text]",
		U = ".clearinput",
		P = ".icon-add",
		B = "." + z + "clear";
	a(), i.init = a, window.ahm = window.ahm || {}, window.ahm.searchlayer = i
}(Zepto, massCfg),
function(e, t) {
	"use strict";
	var i = t.hideClass,
		a = t.click,
		s = "[data-valid=empty]",
		n = ".icon-cross";
	e(s + "~" + n).on(a, function() {
		e(this).addClass(i).prev().val("")
	}), e(s).on("input", function() {
		var t = this.value,
			a = e(this).next();
		"" !== t ? a.removeClass(i) : a.addClass(i)
	})
}(Zepto, massCfg),
function(e) {
	"use strict";
	var t = e('[data-role="scroller"]');
	e(t).each(function() {
		this.scrollLeft = this.scrollWidth
	})
}(Zepto),
function(e, t) {
	"use strict";

	function i() {
		var i = '[data-role="share"]';
		e(document).on(u, i, function(i) {
			if (i.preventDefault(), p = e(this), m = {
					url: p.data("share-url") || document.location.href,
					title: p.data("share-title") || document.title,
					pics: p.data("share-img") || w,
					summary: p.data("share-description")
				}, f = {
					url: p.data("share-url-qz") || m.url,
					title: p.data("share-title-qz") || m.title,
					pics: p.data("share-img-qz") || m.pics,
					summary: p.data("share-description-qz") || m.summary
				}, c && !r) - 1 === m.url.indexOf("#") && (m.url += "#fromQQ"), "undefined" != typeof browser ? window.browser.app.share({
				url: m.url,
				title: m.title,
				description: m.summary,
				img_url: m.pics
			}) : "undefined" != typeof window.qb && window.qb.share({
				url: m.url,
				title: m.title,
				description: m.summary,
				img_url: m.pics
			}), a(p, 1);
			else if (l) - 1 === m.url.indexOf("#") && (m.url += "#fromUC"), e.os.android ? window.ucweb.startRequest("shell.page_share", [m.title, m.summary, m.url, "", "", m.title, ""]) : e.os.iphone && window.ucbrowser.web_share(m.title, m.summary, m.url, "", "", "", ""), a(p, 1);
			else {
				if (v) return void e(".j-share").removeClass(t.hideClass);
				var s = "",
					n = "";
				(o || r) && (s = '<li><a href="#" class="share-wechat"><i class="icon-sharing icon-sharing-wechat-friend"></i><strong>\u5fae\u4fe1\u597d\u53cb</strong></a></li><li><a href="#" class="share-wechat"><i class="icon-sharing icon-sharing-wechat-circle"></i><strong>\u5fae\u4fe1\u670b\u53cb\u5708</strong></a></li>', n = r ? '<div class="module-wechat ' + t.hideClass + '"><div class="item friend"><strong>\u53d1\u9001\u7ed9\u670b\u53cb</strong></div><div class="item circle"><strong>\u5206\u4eab\u5230\u670b\u53cb\u5708</strong></div></div>' : '<div class="module-guide ' + t.hideClass + '"><div class="guide"></div><div class="cancel">\u6211\u77e5\u9053\u4e86</div></div>');
				var d = '<section class="w-sharing j-share"><div class="module"><ul class="method"><li><a href="#" class="share-weibo"><i class="icon-sharing icon-sharing-weibo"></i><strong>\u65b0\u6d6a\u5fae\u535a</strong></a></li><li><a href="#" class="share-qzone"><i class="icon-sharing icon-sharing-qq-zone"></i><strong>QQ\u7a7a\u95f4</strong></a></li>' + s + '</ul><div class="cancel">\u53d6\u6d88</div></div>' + n + '<div class="mask"></div></section>';
				g.append(d).on("touchmove.share", function(e) {
					e.preventDefault()
				}, !1), v = !0
			}
		})
	}

	function a(t, i, a) {
		var s = t.data("share-action"),
			n = t.data("share-count");
		return e(".number", t).html(++n), s ? void e.ajax({
			dataType: "jsonp",
			url: s + "&datatype=jsonp&target=" + i,
			timeout: 1e3,
			success: function() {
				a && a()
			},
			error: function() {
				a && a()
			}
		}) : void(a && a())
	}

	function s() {
		if (h.qq = c ? e.getVersion(navigator.appVersion.split("MQQBrowser/")[1]) : 0, h.uc = l ? e.getVersion(navigator.appVersion.split("UCBrowser/")[1]) : 0, c) {
			var t = h.qq < 5.4 ? n.lower : n.higher;
			e.getScript(t, function() {
				i()
			})
		} else i()
	}
	var n = {
			lower: "http://3gimg.qq.com/html5/js/qb.js",
			higher: "http://jsapi.qq.com/get?api=app.share"
		},
		o = e.browser.safari,
		r = e.browser.wechat,
		c = e.browser.qq,
		l = e.browser.uc,
		d = t.weiboAppKey,
		h = {
			uc: "",
			qq: ""
		},
		u = t.click,
		p = null,
		m = {},
		f = {},
		v = !1,
		g = e("body"),
		w = "http://x.autoimg.cn/m/news/logo/autohome_360x360.jpg";
	e(document).on(u, ".j-share .share-wechat", function(i) {
		i.preventDefault(), a(p, 2, function() {
			e(".module").addClass(t.hideClass), e(r ? ".module-wechat" : ".module-guide").removeClass(t.hideClass)
		})
	}), e(document).on(u, ".j-share .module-guide .cancel", function(i) {
		i.preventDefault(), e(this).closest(".module-guide").addClass(t.hideClass), e(this).closest(".j-share").find(".module").removeClass(t.hideClass)
	}), e(document).on(u, ".j-share .share-weibo", function(e) {
		e.preventDefault(), a(p, 2, function() {
			var e = "http://service.weibo.com/share/mobile.php?";
			e += "appkey=" + d, e += "&title=" + encodeURIComponent(m.title), e += "&url=" + encodeURIComponent(m.url), e += "&pic=" + encodeURIComponent(m.pics), e += "&ralateUid=1761731257", location.href = e
		})
	}), e(document).on(u, ".j-share .share-qzone", function(t) {
		t.preventDefault(), m = f, a(p, 2, function() {
			var t = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?";
			location.href = t + e.param(m)
		})
	}), e(document).on(u, ".j-share .module .cancel, .j-share .mask", function(i) {
		i.preventDefault(), g.off("touchmove.share"), e(this).closest(".j-share").addClass(t.hideClass), r && (e(".module-wechat").addClass(t.hideClass), e(this).closest(".j-share").find(".module").removeClass(t.hideClass))
	}), e(document).on(u, ".module-wechat", function(i) {
		e(".module-wechat").addClass(t.hideClass), e(this).closest(".j-share").find(".module").removeClass(t.hideClass)
	}), s()
}(Zepto, massCfg),
function(e, t) {
	"use strict";

	function i(t) {
		t.ids !== t.o.eq(t.index).data("ids") && e.ajax({
			url: t.url,
			data: t.params,
			dataType: "jsonp",
			success: function(e) {
				if (e.length > 0) {
					for (var i = "", a = 0; a < e.length; a++) i += "<li>", 0 === t.index ? (i += '<a href="http://m.autohome.com.cn/' + e[a].id + "/#pvareaid=" + t.pvid + '">', i += "<strong>" + e[a].name + "</strong><small>" + e[a].levelname + "</small>") : (i += '<a href="http://club.m.autohome.com.cn/bbs/forum-c-' + e[a].bbsid + "-1.html#pvareaid=" + t.pvid + '">', i += "<strong>" + e[a].bbsname + "</strong><small>\u8bba\u575b</small>"), i += "</a>", i += "</li>";
					t.o.eq(t.index).data("ids", t.ids).html(i)
				}
			}
		})
	}

	function a(e, t, i) {
		return e = e || 0, t = t || 0, i = i || 0, {
			transform: "translate3d(" + e + "," + t + "," + i + ")",
			"-webkit-transform": "translate3d(" + e + "," + t + "," + i + ")"
		}
	}

	function s(t) {
		t.$content.css({
			height: e(window).height() + "px"
		}), t.$wrap.css({
			height: e(window).height() + r.scrollTop() + "px",
			overflow: "hidden"
		})
	}

	function n(t) {
		d.$sideBar.removeClass("silsidebar-" + ("left" === t.direct ? "right" : "left")).addClass("silsidebar-" + t.direct), r.css({
			overflow: "hidden"
		}), d.$mask.on("touchmove", function(e) {
			e.preventDefault()
		}), d.$sideBar.height() !== e(window).height() && s(d), t.offmask && d.$mask.addClass(c), d.$mask.removeClass(c), d.$sideBar.removeClass(c), d.$content.animate(a("right" === t.direct ? "-100%" : "100%"), t.time);
		var i = [d.$mask, d.$close];
		e.each(i, function() {
			var i = e(this);
			i.on(l, function() {
				d.$mask.addClass(c), d.$content.animate(a(), t.time, function() {
					d.$sideBar.addClass(c)
				}), r.css({
					overflowY: "auto"
				}), d.$wrap.css({
					height: "auto"
				}).removeAttr("style")
			})
		})
	}
	var o = e("[data-role=sidebar]"),
		r = e("body"),
		c = t.hideClass,
		l = t.click,
		d = {};
	if (o.length > 0) {
		var h = {
				offmask: !o.data("offmask"),
				direct: "right" === o.data("direct") ? "right" : "left",
				time: void 0 !== o.data("time") ? o.data("time") : 300
			},
			u = {
				user: 105362,
				index: 105466,
				channel: 105364,
				car: 105365,
				k: 105367,
				che168: 105373,
				club: 105368,
				v: 105369,
				kuaibao: 105370,
				dealer: 105371,
				buy: 105372,
				mall: 105366,
				histseries: 105376,
				historyclub: 105377
			},
			p = {
				search: {
					eid: "2|1211002|14|121|200068|300071"
				},
				histseries: {
					eid: "2|1211002|14|121|200067|300069"
				},
				historyclub: {
					eid: "2|1211002|14|121|200067|300070"
				}
			},
			m = location.href,
			f = '<div class="w-silsidebar ' + c + '">                <div class="module">                  <i class="icon-silsidebar icon-silsidebar-cross"></i>                  <div class="user" id="{%=uid%}">                    {% if(!uid) { %}                      <a class="enter" href="http://account.m.autohome.com.cn/?backurl=' + m + '">\u767b\u5f55</a>                    {% } else { %}                      <a class="avatar" href="http://i.m.autohome.com.cn/user/index{%=pvareaid %}"><img src="{%=imgSrc %}" /><i {% if(meg == 0) { %}style="display:none;"{% } %}>{%=meg %}</i></a>                      <a class="info" href="http://i.m.autohome.com.cn/user/index{%=pvareaid %}">{%=uname %}                      {% if(vip == 1) { %}                        <i class="icon-silsidebar icon-silsidebar-v"></i>                      {% } %}                      </a>                    {% } %}                  </div>                  <div class="silsidebar-search-trigger" data-role="searchTrigger" data-eid=\'' + p.search.eid + '\'>                    \u8bf7\u8f93\u5165<i class="icon-silsidebar icon-silsidebar-search"></i>                  </div>                  <div class="silsidebar-memu">                    <a href="http://m.autohome.com.cn/#pvareaid=' + u.index + '">\u9996\u9875</a>                    <a href="http://m.autohome.com.cn/channel/#pvareaid=' + u.channel + '">\u6587\u7ae0</a>                    <a href="http://car.m.autohome.com.cn/#pvareaid=' + u.car + '">\u627e\u8f66</a><a href="http://m.mall.autohome.com.cn/#pvareaid=' + u.che168 + '">\u4e70\u8f66</a>                    <a href="http://k.m.autohome.com.cn/#pvareaid=' + u.k + '">\u53e3\u7891</a>                    <a href="http://club.m.autohome.com.cn/#pvareaid=' + u.club + '">\u8bba\u575b</a>                    <a href="http://v.m.autohome.com.cn/#pvareaid=' + u.v + '">\u89c6\u9891</a>                    <a href="http://kuaibao.m.autohome.com.cn/#pvareaid=' + u.kuaibao + '">\u5feb\u62a5</a>                    <a href="http://dealer.m.autohome.com.cn/#pvareaid=' + u.dealer + '">\u7ecf\u9500\u5546</a>                    <a href="http://buy.m.autohome.com.cn/#pvareaid=' + u.buy + '">\u964d\u4ef7</a>                    <a href="http://m.che168.com/#pvareaid=' + u.car + '">\u4e8c\u624b\u8f66</a>                  </div>                  <div class="trace" data-role="tabSwitch">                    <h3 data-role="tab">                      <span class="activate" data-eid=\'' + p.histseries.eid + "'><i class=\"icon-silsidebar icon-silsidebar-car-viewed\"></i>\u6d4f\u89c8\u7684\u8f66</span>                      <span data-eid='" + p.historyclub.eid + '\'><i class="icon-silsidebar icon-silsidebar-chat"></i>\u5e38\u7528\u8bba\u575b</span>                    </h3>                    <div data-role="content">                      <ul></ul>                      <ul class="' + c + '"></ul>                    </div>                  </div>                </div>                <div class="mask"></div>              </div>';
		o.on(l, function(t) {
			if (e(this).attr("href") && "###" !== e(this).attr("href") && e(this).attr("href", "###"), e(".wrapper").find(".w-silsidebar").length < 1) {
				var a = e.getCookie("clubUserShow"),
					s = {};
				a ? (s.uid = a.split("|")[0], s.uname = decodeURIComponent(escape(a.split("|")[3])), s.vip = a.split("|")[6]) : s.uid = 0;
				var o = e("#header_user");
				s.uid && (s.imgSrc = o.find("img").attr("src").replace("30X30", "50X50"), s.meg = parseInt(e("#header_meg").text(), 10) || parseInt(o.find("i").text(), 10));
				var c = u.user;
				c = void 0 === c || 0 === c ? "" : "#pvareaid=" + c, s.pvareaid = c;
				var l = e(".wrapper");
				l.append(e.tmpl(f, s)), window.ahm.searchlayer.init(), window.ahm.tabSwitch.init(), d = {
					$wrap: e(".wrapper"),
					$sideBar: e(".w-silsidebar"),
					$content: e(".module"),
					$mask: e(".mask"),
					$close: e(".icon-silsidebar-cross")
				}
			}
			d.$sideBar.css("top", r.scrollTop() + "px"), n(h);
			var p = d.$sideBar.find("[data-role=content]").find("ul");
			i({
				url: "http://m.autohome.com.cn/Ashx/index/HistSeries.ashx?callback=?",
				params: {
					seriesids: e.getCookie("historyseries") || 0
				},
				ids: e.getCookie("historyseries"),
				o: p,
				index: 0,
				pvid: u.histseries
			}), i({
				url: "http://m.autohome.com.cn/Ashx/index/HistoryClub.ashx?callback=?",
				params: {
					bbsids: e.getCookie("historyClub") || 0
				},
				ids: e.getCookie("historyClub"),
				o: p,
				index: 1,
				pvid: u.historyclub
			})
		}), e(window).on("resize", function() {
			d.opened && s(d)
		})
	}
}(Zepto, massCfg),
function(e, t) {
	"use strict";
	var i = function(t, i) {
		this.oJumpTarget = t, this.$oCaption = e(this.oJumpTarget).find("[data-tips]"), i = e.extend({
			titCell: "quickJump",
			tips: !0,
			tipsName: "jump-tips"
		}, i), this.titCell = i.titCell, this.tips = i.tips, this.tipsName = i.tipsName, this.init()
	};
	i.prototype.init = function() {
		this.render(), this.handle()
	}, i.prototype.render = function() {
		var e = document.createElement("div");
		e.className = this.titCell;
		var t = document.createElement("ul");
		t.className = "jump-ul";
		for (var i = 0; i < this.$oCaption.length; i++) {
			var a = this.$oCaption[i],
				s = a.id,
				n = a.getAttribute("data-tips");
			t.innerHTML += '<li class="jump-li" data-view="' + s + '">' + n + "</li>"
		}
		e.appendChild(t), this.oJumpTarget.appendChild(e)
	}, i.prototype.handle = function() {
		function t(t, i, a, s) {
			clearTimeout(t), t = setTimeout(function() {
				var t = i.changedTouches[0].clientX,
					c = i.changedTouches[0].clientY,
					l = document.elementFromPoint(t, c);
				if (e(l).hasClass("jump-li")) n = t, o = c, r = l;
				else {
					var d = r.parentNode.getBoundingClientRect(),
						h = d.left,
						u = d.right,
						p = d.top,
						m = d.bottom;
					(h >= t || t >= u) && (p >= c || c >= m) ? l = document.elementFromPoint(n, o): h >= t || t >= u ? l = document.elementFromPoint(n, c) : (p >= c || c >= m) && (l = document.elementFromPoint(t, o))
				}
				var f = l.getAttribute("data-view");
				if (f) {
					var v = document.getElementById(f);
					v.scrollIntoView(), a && (s.innerHTML = v.getAttribute("data-tips"), s.style.display = "block")
				}
			}, 10)
		}
		var i = this,
			a = null,
			s = e("." + this.titCell),
			n = 0,
			o = 0,
			r = null;
		s.on("touchstart touchmove", ".jump-li", function(e) {
			e.preventDefault(), e.stopPropagation(), t(a, e, i.tips, i.oTips)
		}), this.tips && (s.append('<div class="' + this.tipsName + '"></div>'), this.oTips = document.querySelector("." + this.tipsName), s.on("touchend", ".jump-li", function() {
			clearTimeout(a), a = setTimeout(function() {
				i.oTips.style.display = ""
			}, 100)
		}))
	}, i.prototype.destroy = function() {
		var t = e("." + this.titCell);
		t.off("touchstart touchmove touchend").remove(), e("." + this.tipsName).remove()
	}, e('[data-role="quickjump"]').each(function() {
		var t = e(this).data("titcell"),
			a = e(this).data("tips"),
			s = e(this).data("tipsname");
		new i(this, {
			titCell: t || "quickJump",
			tips: a,
			tipsName: s || "jump-tips"
		})
	})
}(Zepto, massCfg),
function(e, t) {
	"use strict";
	var i = function(t, i) {
		i = e.extend({
			container: ".container",
			open: "slideIn",
			close: "slideOut"
		}, i), this.$containerNode = e(i.container), this.$contentNode = function(e) {
			var t = e.$containerNode.children().first();
			return t.is("[data-side-content]") || (t = e.$containerNode.wrapInner("<div data-side-content>").children().first()), t
		}(this), this.$switchTarget = e("[data-side-target=" + i.target + "]"), this.$panelNode = e(t), this.$viewNode = this.$panelNode.find("[data-side-view]"), this.$closeNode = this.$panelNode.find("[data-side-close]"), this.$maskNode = this.$panelNode.find("[data-side-mask]"), this.openClass = i.open, this.closeClass = i.close, this.$delay = function(e) {
			if (!i.delay) return !1;
			var t, a = i.delay;
			return t = "true" === a ? e.$panelNode : "view" === a ? e.$viewNode : "mask" === a ? e.$maskNode : !1
		}(this), this.direct = this.$viewNode.data("side-view") ? this.$viewNode.data("side-view") : !1, this._EventHandle = e({}), this.init()
	};
	i.prototype.on = function() {
		this._EventHandle.on.apply(this._EventHandle, arguments)
	}, i.prototype.off = function() {
		this._EventHandle.off.apply(this._EventHandle, arguments)
	}, i.prototype.trigger = function() {
		this._EventHandle.trigger.apply(this._EventHandle, arguments)
	}, i.prototype.init = function() {
		this.handle(), this.direct && this.touch()
	}, i.prototype.handle = function() {
		this.$switchTarget.on("click", this.open.bind(this)), this.$closeNode.on("click", this.close.bind(this))
	}, i.prototype.open = function() {
		function t() {
			this.clientHeight !== document.documentElement.clientHeight && (this.clientHeight = document.documentElement.clientHeight, e("body").css({
				height: this.clientHeight,
				overflow: "hidden"
			}).scrollTop(0))
		}
		this.trigger("open"), e(window).on("resize.sideReset, orientationchange.sideReset", t.bind(this)), this.clientHeight = document.documentElement.clientHeight, this.scrollTop = document.body.scrollTop, e("body").css({
			height: this.clientHeight,
			overflow: "hidden"
		}), this.$contentNode.css({
			"-webkit-transform": "translate3d(0,-" + this.scrollTop + "px,0)",
			transform: "translate3d(0,-" + this.scrollTop + "px,0)"
		}), this.$maskNode.on("touchmove", function(e) {
			e.preventDefault(), e.stopPropagation()
		}), this.$panelNode.removeClass(this.closeClass).addClass(this.openClass).css("display", "block");
		var i = this,
			a = null,
			s = !1,
			n = this.$viewNode.css(e.fx.cssPrefix + "animation-name");
		if (n) {
			if (clearTimeout(a), this.$viewNode.off(e.fx.animationEnd), "none" !== n) return void this.$viewNode.on(e.fx.animationEnd, function(e) {
				s || e.target !== e.currentTarget || (s = !0, i.trigger("openEnd"))
			});
			var o = this.$viewNode.css(e.fx.cssPrefix + "animation-duration"),
				r = this.$viewNode.css(e.fx.cssPrefix + "animation-delay"),
				c = parseInt(o, 10),
				l = parseInt(r, 10);
			c *= o.indexOf("ms") > 0 ? 1 : 1e3, l *= r.indexOf("ms") > 0 ? 1 : 1e3, a = setTimeout(function() {
				s || i.trigger("openEnd")
			}, c + l)
		} else this.trigger("openEnd")
	}, i.prototype.close = function() {
		function t() {
			i.$panelNode.css("display", "none"), i.$contentNode.css({
				"-webkit-transform": "",
				transform: ""
			}), e("body").css({
				height: "",
				overflow: ""
			}).scrollTop(i.scrollTop), i.$maskNode.off("touchmove"), e(window).off("resize.sideReset, orientationchange.sideReset"), i.trigger("closeEnd")
		}
		var i = this,
			a = null,
			s = !1;
		if (this.trigger("close"), this.$panelNode.removeClass(this.openClass).addClass(this.closeClass), this.$delay) {
			if (clearTimeout(a), this.$delay.off(e.fx.animationEnd), "none" !== this.$delay.css(e.fx.cssPrefix + "animation-name")) return void this.$delay.on(e.fx.animationEnd, function(e) {
				s || e.target !== e.currentTarget || (s = !0, t())
			});
			var n = this.$delay.css(e.fx.cssPrefix + "animation-duration"),
				o = this.$delay.css(e.fx.cssPrefix + "animation-delay"),
				r = parseInt(n, 10),
				c = parseInt(o, 10);
			r *= n.indexOf("ms") > 0 ? 1 : 1e3, c *= o.indexOf("ms") > 0 ? 1 : 1e3, a = setTimeout(function() {
				s || t()
			}, r + c)
		} else t()
	}, i.prototype.touch = function() {
		function e(e) {
			a = !1, s = e.targetTouches[0].pageX, n = Math.floor(i.$viewNode.width() / 2)
		}

		function t(e) {
			if (!a) {
				var t = e.targetTouches[0].pageX - s;
				if (Math.abs(t) >= n) {
					var o = t > 0 ? "right" : "left";
					o === i.direct && (a = !0, i.close())
				}
			}
		}
		this.$viewNode.on("touchstart", e).on("touchmove", t);
		var i = this,
			a = !0,
			s = 0,
			n = 0
	}, i.prototype.destroy = function() {
		this.close(), this.$switchTarget.off("click"), this.$closeNode.off("click"), this.isSliding && this.$viewNode.off("touchstart").off("touchmove")
	}, e("[data-role-side]").each(function() {
		var t = e.parseJSON(this.getAttribute("data-role-side"));
		window.ahm = window.ahm || {}, window.ahm.side = window.ahm.side || {}, window.ahm.side[t.name] = new i(this, t)
	})
}(Zepto, massCfg);