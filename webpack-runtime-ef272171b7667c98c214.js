!function() {
    "use strict";
    var e, t, n, r, o, i = {}, a = {};
    function c(e) {
        var t = a[e];
        if (void 0 !== t)
            return t.exports;
        var n = a[e] = {
            exports: {}
        };
        return i[e].call(n.exports, n, n.exports, c),
        n.exports
    }
    c.m = i,
    e = [],
    c.O = function(t, n, r, o) {
        if (!n) {
            var i = 1 / 0;
            for (s = 0; s < e.length; s++) {
                n = e[s][0],
                r = e[s][1],
                o = e[s][2];
                for (var a = !0, u = 0; u < n.length; u++)
                    (!1 & o || i >= o) && Object.keys(c.O).every((function(e) {
                        return c.O[e](n[u])
                    }
                    )) ? n.splice(u--, 1) : (a = !1,
                    o < i && (i = o));
                if (a) {
                    e.splice(s--, 1);
                    var f = r();
                    void 0 !== f && (t = f)
                }
            }
            return t
        }
        o = o || 0;
        for (var s = e.length; s > 0 && e[s - 1][2] > o; s--)
            e[s] = e[s - 1];
        e[s] = [n, r, o]
    }
    ,
    c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return c.d(t, {
            a: t
        }),
        t
    }
    ,
    c.d = function(e, t) {
        for (var n in t)
            c.o(t, n) && !c.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    c.f = {},
    c.e = function(e) {
        return Promise.all(Object.keys(c.f).reduce((function(t, n) {
            return c.f[n](e, t),
            t
        }
        ), []))
    }
    ,
    c.u = function(e) {
        return {
            49: "component---src-pages-about-tsx",
            218: "component---src-pages-404-tsx",
            449: "component---src-pages-terms-of-service-tsx",
            455: "f065d845af526f55f7db86c38bd117a24ddcb408",
            532: "styles",
            691: "component---src-pages-index-tsx",
            749: "component---src-pages-twitter-tsx",
            802: "94726e6d",
            806: "component---src-pages-privacy-policy-tsx",
            998: "component---src-pages-discord-tsx"
        }[e] + "-" + {
            49: "a38d92d054571835c6dd",
            218: "da8fb596a157b2ffed57",
            449: "b5184d23bf3febb3393a",
            455: "ccc1b277128b6293e8a6",
            532: "8388899187a7bc4e64e9",
            691: "b3eae4e94e4812c219af",
            749: "1cf27b0ab0a5381a1b4f",
            802: "18db4d1949f52199333a",
            806: "8a21db55fe2cb51fa809",
            998: "7f21b173b3a28492bb4a"
        }[e] + ".js"
    }
    ,
    c.miniCssF = function(e) {
        return "styles.7b6d42f4fde7001ccac2.css"
    }
    ,
    c.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t = {},
    n = "dona:",
    c.l = function(e, r, o, i) {
        if (t[e])
            t[e].push(r);
        else {
            var a, u;
            if (void 0 !== o)
                for (var f = document.getElementsByTagName("script"), s = 0; s < f.length; s++) {
                    var d = f[s];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == n + o) {
                        a = d;
                        break
                    }
                }
            a || (u = !0,
            (a = document.createElement("script")).charset = "utf-8",
            a.timeout = 120,
            c.nc && a.setAttribute("nonce", c.nc),
            a.setAttribute("data-webpack", n + o),
            a.src = e),
            t[e] = [r];
            var l = function(n, r) {
                a.onerror = a.onload = null,
                clearTimeout(p);
                var o = t[e];
                if (delete t[e],
                a.parentNode && a.parentNode.removeChild(a),
                o && o.forEach((function(e) {
                    return e(r)
                }
                )),
                n)
                    return n(r)
            }
              , p = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: a
            }), 12e4);
            a.onerror = l.bind(null, a.onerror),
            a.onload = l.bind(null, a.onload),
            u && document.head.appendChild(a)
        }
    }
    ,
    c.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.p = "/",
    r = function(e) {
        return new Promise((function(t, n) {
            var r = c.miniCssF(e)
              , o = c.p + r;
            if (function(e, t) {
                for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                    var o = (a = n[r]).getAttribute("data-href") || a.getAttribute("href");
                    if ("stylesheet" === a.rel && (o === e || o === t))
                        return a
                }
                var i = document.getElementsByTagName("style");
                for (r = 0; r < i.length; r++) {
                    var a;
                    if ((o = (a = i[r]).getAttribute("data-href")) === e || o === t)
                        return a
                }
            }(r, o))
                return t();
            !function(e, t, n, r) {
                var o = document.createElement("link");
                o.rel = "stylesheet",
                o.type = "text/css",
                o.onerror = o.onload = function(i) {
                    if (o.onerror = o.onload = null,
                    "load" === i.type)
                        n();
                    else {
                        var a = i && ("load" === i.type ? "missing" : i.type)
                          , c = i && i.target && i.target.href || t
                          , u = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                        u.code = "CSS_CHUNK_LOAD_FAILED",
                        u.type = a,
                        u.request = c,
                        o.parentNode.removeChild(o),
                        r(u)
                    }
                }
                ,
                o.href = t,
                document.head.appendChild(o)
            }(e, o, t, n)
        }
        ))
    }
    ,
    o = {
        658: 0
    },
    c.f.miniCss = function(e, t) {
        o[e] ? t.push(o[e]) : 0 !== o[e] && {
            532: 1
        }[e] && t.push(o[e] = r(e).then((function() {
            o[e] = 0
        }
        ), (function(t) {
            throw delete o[e],
            t
        }
        )))
    }
    ,
    function() {
        var e = {
            658: 0,
            532: 0
        };
        c.f.j = function(t, n) {
            var r = c.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    n.push(r[2]);
                else if (/^(532|658)$/.test(t))
                    e[t] = 0;
                else {
                    var o = new Promise((function(n, o) {
                        r = e[t] = [n, o]
                    }
                    ));
                    n.push(r[2] = o);
                    var i = c.p + c.u(t)
                      , a = new Error;
                    c.l(i, (function(n) {
                        if (c.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                        r)) {
                            var o = n && ("load" === n.type ? "missing" : n.type)
                              , i = n && n.target && n.target.src;
                            a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")",
                            a.name = "ChunkLoadError",
                            a.type = o,
                            a.request = i,
                            r[1](a)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        c.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, n) {
            var r, o, i = n[0], a = n[1], u = n[2], f = 0;
            if (i.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (r in a)
                    c.o(a, r) && (c.m[r] = a[r]);
                if (u)
                    var s = u(c)
            }
            for (t && t(n); f < i.length; f++)
                o = i[f],
                c.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return c.O(s)
        }
          , n = self.webpackChunkdona = self.webpackChunkdona || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }(),
    c.nc = void 0
}();
//# sourceMappingURL=webpack-runtime-ef272171b7667c98c214.js.map
