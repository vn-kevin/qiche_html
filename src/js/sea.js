/*! Autoshow - V(2.0.2) - build(2014.01.09) */
(function(e, t) {
    function n(e) {
        return function(t) {
            return Object.prototype.toString.call(t) === "[object " + e + "]"
        }
    }
    function r(e) {
        return e.match(Z)[0]
    }
    function a(e) {
        for (e = e.replace(K, "/"),
        e = e.replace(W, "$1/"); e.match(G); )
            e = e.replace(G, "/");
        return e
    }
    function o(e) {
        return e = a(e),
        V.test(e) ? e = e.slice(0, -1) : J.test(e) || (e += ".js"),
        e.replace(":80/", "/")
    }
    function i(e) {
        var t = kt.alias;
        return t && N(t[e]) ? t[e] : e
    }
    function u(e) {
        var t, n = kt.paths;
        return n && (t = e.match(et)) && N(n[t[1]]) && (e = n[t[1]] + t[2]),
        e
    }
    function s(e) {
        var t = kt.vars;
        return t && e.indexOf("{") > -1 && (e = e.replace(tt, function(e, n) {
            return N(t[n]) ? t[n] : e
        }
        )),
        e
    }
    function c(e) {
        var t = kt.map
          , n = e;
        if (t)
            for (var r = 0; t.length > r; r++) {
                var a = t[r];
                if (n = H(a) ? a(e) || e : e.replace(a[0], a[1]),
                n !== e)
                    break
            }
        return n
    }
    function f(e) {
        return nt.test(e)
    }
    function l(e) {
        return rt.test(e)
    }
    function h(e) {
        return at.test(e)
    }
    function d(e, t) {
        var n;
        return n = f(e) ? e : l(e) ? r(t || st) + e : h(e) ? (st.match(ot) || ["/"])[0] + e.substring(1) : kt.base + e
    }
    function v(e, t) {
        return e ? (e = i(e),
        e = u(e),
        e = s(e),
        e = d(e, t),
        e = o(e),
        e = c(e)) : ""
    }
    function p(e) {
        return e.hasAttribute ? e.src : e.getAttribute("src", 4)
    }
    function g(e, n, r) {
        var a = wt.test(e)
          , o = it.createElement(a ? "link" : "script");
        if (r) {
            var i = H(r) ? r(e) : r;
            i && (o.charset = i)
        }
        w(o, n, a),
        a ? (o.rel = "stylesheet",
        o.href = e) : (o.async = !0,
        o.src = e),
        ht = o,
        gt ? pt.insertBefore(o, gt) : pt.appendChild(o),
        ht = t
    }
    function w(e, n, r) {
        var a = r && (mt || !("onload" in e));
        return a ? (setTimeout(function() {
            b(e, n)
        }
        , 1),
        t) : (e.onload = e.onerror = e.onreadystatechange = function() {
            bt.test(e.readyState) && (e.onload = e.onerror = e.onreadystatechange = null ,
            r || kt.debug || pt.removeChild(e),
            e = t,
            n())
        }
        ,
        t)
    }
    function b(e, t) {
        var n, r = e.sheet;
        if (mt)
            r && (n = !0);
        else if (r)
            try {
                r.cssRules && (n = !0)
            } catch (a) {
                "NS_ERROR_DOM_SECURITY_ERR" === a.name && (n = !0)
            }
        setTimeout(function() {
            n ? t() : b(e, t)
        }
        , 20)
    }
    function m() {
        if (ht)
            return ht;
        if (dt && "interactive" === dt.readyState)
            return dt;
        for (var e = pt.getElementsByTagName("script"), t = e.length - 1; t >= 0; t--) {
            var n = e[t];
            if ("interactive" === n.readyState)
                return dt = n
        }
    }
    function I(e) {
        var t = [];
        return e.replace(yt, "").replace(It, function(e, n, r) {
            r && t.push(r)
        }
        ),
        t
    }
    function y(e) {
        this.uri = e,
        this.dependencies = [],
        this.exports = null ,
        this.status = 0
    }
    function M(e, t) {
        if (U(e)) {
            for (var n = [], r = 0; e.length > r; r++)
                n[r] = M(e[r], t);
            return n
        }
        var a = {
            id: e,
            refUri: t
        };
        return z("resolve", a),
        a.uri || v(a.id, t)
    }
    function x(t, n) {
        U(t) || (t = [t]),
        O(t, function() {
            for (var r = [], a = 0; t.length > a; a++)
                r[a] = B(Mt[t[a]]);
            n && n.apply(e, r)
        }
        )
    }
    function O(e, n) {
        var r = $(e);
        if (0 === r.length)
            return n(),
            t;
        z("load", r);
        for (var a = r.length, o = a, i = 0; a > i; i++)
            (function(e) {
                function t(t) {
                    t || (t = r);
                    var n = $(a.dependencies);
                    0 === n.length ? t() : S(a) ? (Q(St),
                    St.length = 0,
                    t(!0)) : (qt[e] = n,
                    O(n, t))
                }
                function r(e) {
                    !e && Ct > a.status && (a.status = Ct),
                    0 === --o && n()
                }
                var a = Mt[e];
                a.dependencies.length ? t(function(t) {
                    function n() {
                        r(t)
                    }
                    At > a.status ? j(e, n) : n()
                }
                ) : At > a.status ? j(e, t) : r()
            }
            )(r[i])
    }
    function j(e, n) {
        function r() {
            delete xt[o],
            Ot[o] = !0,
            vt && (E(e, vt),
            vt = t);
            var n, r = jt[o];
            for (delete jt[o]; n = r.shift(); )
                n()
        }
        Mt[e].status = Et;
        var a = {
            uri: e
        };
        z("fetch", a);
        var o = a.requestUri || e;
        if (Ot[o])
            return n(),
            t;
        if (xt[o])
            return jt[o].push(n),
            t;
        xt[o] = !0,
        jt[o] = [n];
        var i = kt.charset;
        z("request", a = {
            uri: e,
            requestUri: o,
            callback: r,
            charset: i
        }),
        a.requested || g(a.requestUri, r, i)
    }
    function q(e, n, r) {
        1 === arguments.length && (r = e,
        e = t),
        !U(n) && H(r) && (n = I("" + r));
        var a = {
            id: e,
            uri: M(e),
            deps: n,
            factory: r
        };
        if (!a.uri && it.attachEvent) {
            var o = m();
            o ? a.uri = o.src : X("Failed to derive: " + r)
        }
        z("define", a),
        a.uri ? E(a.uri, a) : vt = a
    }
    function E(e, n) {
        var r = C(e);
        At > r.status && (r.id = n.id || e,
        r.dependencies = M(n.deps || [], e),
        r.factory = n.factory,
        r.factory !== t && (r.status = At))
    }
    function A(e) {
        function n(t) {
            return M(t, e.uri)
        }
        function r(e) {
            return B(Mt[n(e)])
        }
        if (!e)
            return null ;
        if (e.status >= $t)
            return e.exports;
        e.status = $t,
        r.resolve = n,
        r.async = function(e, t) {
            return x(n(e), t),
            r
        }
        ;
        var a = e.factory
          , o = H(a) ? a(r, e.exports = {}, e) : a;
        return e.exports = o === t ? e.exports : o,
        e.status = Bt,
        e.exports
    }
    function C(e) {
        return Mt[e] || (Mt[e] = new y(e))
    }
    function $(e) {
        for (var t = [], n = 0; e.length > n; n++) {
            var r = e[n];
            r && Ct > C(r).status && t.push(r)
        }
        return t
    }
    function B(e) {
        var t = A(e);
        return null  !== t || e && wt.test(e.uri) || z("error", e),
        t
    }
    function S(e) {
        var t = qt[e.uri] || [];
        if (0 === t.length)
            return !1;
        if (St.push(e.uri),
        k(t, St))
            return P(t),
            !0;
        for (var n = 0; t.length > n; n++)
            if (S(Mt[t[n]]))
                return !0;
        return St.pop(),
        !1
    }
    function k(e, t) {
        for (var n = 0; e.length > n; n++)
            for (var r = 0; t.length > r; r++)
                if (t[r] === e[n])
                    return !0;
        return !1
    }
    function P(e) {
        for (var t = St[0], n = e.length - 1; n >= 0; n--)
            if (e[n] === t) {
                e.splice(n, 1);
                break
            }
    }
    function Q(e) {
        e.push(e[0]),
        X("Circular dependencies: " + e.join(" -> "))
    }
    function F(e) {
        var t = kt.preload
          , n = t.length;
        n ? x(M(t), function() {
            t.splice(0, n),
            F(e)
        }
        ) : e()
    }
    function T(e) {
        for (var t in e) {
            var n = e[t];
            n && "plugins" === t && (t = "preload",
            n = _(n));
            var r = kt[t];
            if (r && L(r))
                for (var a in n)
                    r[a] = n[a];
            else
                U(r) ? n = r.concat(n) : "base" === t && (n = o(d(n + "/"))),
                kt[t] = n
        }
        return z("config", e),
        D
    }
    function _(e) {
        for (var t, n = []; t = e.shift(); )
            n.push(lt + "plugin-" + t);
        return n
    }
    var R = e.seajs;
    if (!R || !R.version) {
        var D = e.seajs = {
            version: "2.0.0"
        }
          , L = n("Object")
          , N = n("String")
          , U = Array.isArray || n("Array")
          , H = n("Function")
          , X = D.log = function(t, n) {
            e.console && (n || kt.debug) && console[n || (n = "log")] && console[n](t)
        }
          , Y = D.events = {};
        D.on = function(e, t) {
            if (!t)
                return D;
            var n = Y[e] || (Y[e] = []);
            return n.push(t),
            D
        }
        ,
        D.off = function(e, t) {
            if (!e && !t)
                return D.events = Y = {},
                D;
            var n = Y[e];
            if (n)
                if (t)
                    for (var r = n.length - 1; r >= 0; r--)
                        n[r] === t && n.splice(r, 1);
                else
                    delete Y[e];
            return D
        }
        ;
        var z = D.emit = function(e, t) {
            var n, r = Y[e];
            if (r)
                for (r = r.slice(); n = r.shift(); )
                    n(t);
            return D
        }
          , Z = /[^?#]*\//
          , K = /\/\.\//g
          , W = /([^:\/])\/\/+/g
          , G = /\/[^/]+\/\.\.\//g
          , J = /\?|\.(?:css|js)$|\/$/
          , V = /#$/
          , et = /^([^/:]+)(\/.+)$/
          , tt = /{([^{]+)}/g
          , nt = /:\//
          , rt = /^\./
          , at = /^\//
          , ot = /^.*?\/\/.*?\//
          , it = document
          , ut = location
          , st = r(ut.href)
          , ct = it.getElementsByTagName("script")
          , ft = it.getElementById("seajsnode") || ct[ct.length - 1]
          , lt = r(p(ft)) || st;
        D.cwd = function(e) {
            return e ? st = a(e + "/") : st
        }
        ;
        var ht, dt, vt, pt = it.getElementsByTagName("head")[0] || it.documentElement, gt = pt.getElementsByTagName("base")[0], wt = /\.css(?:\?|$)/i, bt = /^(?:loaded|complete|undefined)$/, mt = 536 > 1 * navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/, "$1"), It = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g, yt = /\\\\/g, Mt = D.cache = {}, xt = {}, Ot = {}, jt = {}, qt = {}, Et = 1, At = 2, Ct = 3, $t = 4, Bt = 5;
        y.prototype.destroy = function() {
            delete Mt[this.uri],
            delete Ot[this.uri]
        }
        ;
        var St = [];
        D.use = function(e, t) {
            return F(function() {
                x(M(e), t)
            }
            ),
            D
        }
        ,
        y.load = x,
        D.resolve = v,
        e.define = q,
        D.require = function(e) {
            return (Mt[v(e)] || {}).exports
        }
        ;
        var kt = T.data = {
            base: function() {
                var e = lt
                  , t = e.match(/^(.+?\/)(?:seajs\/)+(?:\d[^/]+\/)?$/);
                return t && (e = t[1]),
                e
            }
            (),
            charset: "utf-8",
            preload: []
        };
        D.config = T,
        T({
            plugins: function() {
                var e, t = ut.search.replace(/(seajs-\w+)(&|$)/g, "$1=1$2");
                return t += " " + it.cookie,
                t.replace(/seajs-(\w+)=1/g, function(t, n) {
                    (e || (e = [])).push(n)
                }
                ),
                e
            }
            ()
        });
        var Pt = ft.getAttribute("data-config")
          , Qt = ft.getAttribute("data-main");
        if (Pt && kt.preload.push(Pt),
        Qt && D.use(Qt),
        R && R.args)
            for (var Ft = ["define", "config", "use"], Tt = R.args, _t = 0; Tt.length > _t; _t += 2)
                D[Ft[Tt[_t]]].apply(D, Tt[_t + 1])
    }
}
)(this),
define("combo-autohome", [], function() {
    "use strict";
    function e(e) {
        var t = []
          , f = []
          , l = ""
          , h = s.replace("://", "__").split("/")[0];
        return h && (h = h.replace("__", "://")),
        c(e, function(e) {
            var r = i[e];
            n > r.status && (-1 != e.indexOf(h) ? (f.push(e.replace(h, "").replace(/[\/]/g, "|")),
            t.push(e)) : o[e] = e)
        }
        ),
        l = h + a ,
        c(t, function(e) {
            o[e] || (o[e] = l)
        }
        ),
        o
    }
    function t(e) {
        var t = e.uri;
        e.requestUri = o[t] || t
    }
    var n = 1
      , r = "201309300950"
      , a = "/src/js/bo.js"
      , o = {}
      , i = seajs.cache
      , u = seajs.config.data
      , s = u.base
      , c = [].forEach ? function(e, t) {
        e.forEach(t)
    }
     : function(e, t) {
        for (var n = 0; e.length > n; n++)
            t(e[n], n, e)
    }
    ;
    seajs.on("load", e),
    seajs.on("fetch", t)
}
),
seajs.use("combo-autohome"),
seajs.config({
    alias: {
        club_header: "club/header"
    },
    charset: "gb2312"
});
