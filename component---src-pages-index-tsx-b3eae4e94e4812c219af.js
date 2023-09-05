"use strict";
(self.webpackChunkdona = self.webpackChunkdona || []).push([[691], {
    7417: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return ge
            }
        });
        var a = n(1880)
          , o = n(7294);
        var i = n(1721)
          , r = n(3935)
          , s = !1
          , l = o.createContext(null)
          , d = "unmounted"
          , p = "exited"
          , c = "entering"
          , u = "entered"
          , m = "exiting"
          , h = function(e) {
            function t(t, n) {
                var a;
                a = e.call(this, t, n) || this;
                var o, i = n && !n.isMounting ? t.enter : t.appear;
                return a.appearStatus = null,
                t.in ? i ? (o = p,
                a.appearStatus = c) : o = u : o = t.unmountOnExit || t.mountOnEnter ? d : p,
                a.state = {
                    status: o
                },
                a.nextCallback = null,
                a
            }
            (0,
            i.Z)(t, e),
            t.getDerivedStateFromProps = function(e, t) {
                return e.in && t.status === d ? {
                    status: p
                } : null
            }
            ;
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.updateStatus(!0, this.appearStatus)
            }
            ,
            n.componentDidUpdate = function(e) {
                var t = null;
                if (e !== this.props) {
                    var n = this.state.status;
                    this.props.in ? n !== c && n !== u && (t = c) : n !== c && n !== u || (t = m)
                }
                this.updateStatus(!1, t)
            }
            ,
            n.componentWillUnmount = function() {
                this.cancelNextCallback()
            }
            ,
            n.getTimeouts = function() {
                var e, t, n, a = this.props.timeout;
                return e = t = n = a,
                null != a && "number" != typeof a && (e = a.exit,
                t = a.enter,
                n = void 0 !== a.appear ? a.appear : t),
                {
                    exit: e,
                    enter: t,
                    appear: n
                }
            }
            ,
            n.updateStatus = function(e, t) {
                if (void 0 === e && (e = !1),
                null !== t)
                    if (this.cancelNextCallback(),
                    t === c) {
                        if (this.props.unmountOnExit || this.props.mountOnEnter) {
                            var n = this.props.nodeRef ? this.props.nodeRef.current : r.findDOMNode(this);
                            n && function(e) {
                                e.scrollTop
                            }(n)
                        }
                        this.performEnter(e)
                    } else
                        this.performExit();
                else
                    this.props.unmountOnExit && this.state.status === p && this.setState({
                        status: d
                    })
            }
            ,
            n.performEnter = function(e) {
                var t = this
                  , n = this.props.enter
                  , a = this.context ? this.context.isMounting : e
                  , o = this.props.nodeRef ? [a] : [r.findDOMNode(this), a]
                  , i = o[0]
                  , l = o[1]
                  , d = this.getTimeouts()
                  , p = a ? d.appear : d.enter;
                !e && !n || s ? this.safeSetState({
                    status: u
                }, (function() {
                    t.props.onEntered(i)
                }
                )) : (this.props.onEnter(i, l),
                this.safeSetState({
                    status: c
                }, (function() {
                    t.props.onEntering(i, l),
                    t.onTransitionEnd(p, (function() {
                        t.safeSetState({
                            status: u
                        }, (function() {
                            t.props.onEntered(i, l)
                        }
                        ))
                    }
                    ))
                }
                )))
            }
            ,
            n.performExit = function() {
                var e = this
                  , t = this.props.exit
                  , n = this.getTimeouts()
                  , a = this.props.nodeRef ? void 0 : r.findDOMNode(this);
                t && !s ? (this.props.onExit(a),
                this.safeSetState({
                    status: m
                }, (function() {
                    e.props.onExiting(a),
                    e.onTransitionEnd(n.exit, (function() {
                        e.safeSetState({
                            status: p
                        }, (function() {
                            e.props.onExited(a)
                        }
                        ))
                    }
                    ))
                }
                ))) : this.safeSetState({
                    status: p
                }, (function() {
                    e.props.onExited(a)
                }
                ))
            }
            ,
            n.cancelNextCallback = function() {
                null !== this.nextCallback && (this.nextCallback.cancel(),
                this.nextCallback = null)
            }
            ,
            n.safeSetState = function(e, t) {
                t = this.setNextCallback(t),
                this.setState(e, t)
            }
            ,
            n.setNextCallback = function(e) {
                var t = this
                  , n = !0;
                return this.nextCallback = function(a) {
                    n && (n = !1,
                    t.nextCallback = null,
                    e(a))
                }
                ,
                this.nextCallback.cancel = function() {
                    n = !1
                }
                ,
                this.nextCallback
            }
            ,
            n.onTransitionEnd = function(e, t) {
                this.setNextCallback(t);
                var n = this.props.nodeRef ? this.props.nodeRef.current : r.findDOMNode(this)
                  , a = null == e && !this.props.addEndListener;
                if (n && !a) {
                    if (this.props.addEndListener) {
                        var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback]
                          , i = o[0]
                          , s = o[1];
                        this.props.addEndListener(i, s)
                    }
                    null != e && setTimeout(this.nextCallback, e)
                } else
                    setTimeout(this.nextCallback, 0)
            }
            ,
            n.render = function() {
                var e = this.state.status;
                if (e === d)
                    return null;
                var t = this.props
                  , n = t.children
                  , a = (t.in,
                t.mountOnEnter,
                t.unmountOnExit,
                t.appear,
                t.enter,
                t.exit,
                t.timeout,
                t.addEndListener,
                t.onEnter,
                t.onEntering,
                t.onEntered,
                t.onExit,
                t.onExiting,
                t.onExited,
                t.nodeRef,
                function(e, t) {
                    if (null == e)
                        return {};
                    var n, a, o = {}, i = Object.keys(e);
                    for (a = 0; a < i.length; a++)
                        n = i[a],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                return o.createElement(l.Provider, {
                    value: null
                }, "function" == typeof n ? n(e, a) : o.cloneElement(o.Children.only(n), a))
            }
            ,
            t
        }(o.Component);
        function f() {}
        h.contextType = l,
        h.defaultProps = {
            in: !1,
            mountOnEnter: !1,
            unmountOnExit: !1,
            appear: !1,
            enter: !0,
            exit: !0,
            onEnter: f,
            onEntering: f,
            onEntered: f,
            onExit: f,
            onExiting: f,
            onExited: f
        },
        h.UNMOUNTED = d,
        h.EXITED = p,
        h.ENTERING = c,
        h.ENTERED = u,
        h.EXITING = m;
        var g, b, x, E, k, v, y, w, T, C, q, N, Z, S, _, I, O, j, D, R, M, z, B, P, F, U, L, G = h, X = n(3494), V = n(5414), W = n(1082), A = n(493), H = n(3662), J = n(7646), Y = n.p + "static/hero-fd7d0b6fd10484173260c69829977420.mp4", K = n.p + "static/hero-12e181c08b4b3b8bdf810a5d442010bd.webm", Q = n.p + "static/check-8c44f5f2dd8fed44f179d33aaab5eecb.mp4", $ = n.p + "static/check-afd53ee7629e99378da29134ee0f2076.webm", ee = n.p + "static/experience-375123d9a8a9d4cd44b5682b7988e5af.mp4", te = n.p + "static/experience-26638706a1148eda0fc01c2e39383e79.webm", ne = n.p + "static/themes-7729199d530b0202af522839e624d9fe.mp4", ae = n.p + "static/themes-e82e27fb5e1d40693c2591d0875fd80e.webm", oe = X.default.div.withConfig({
            displayName: "pages__Screen",
            componentId: "sc-vcj8q7-0"
        })(["background-color:", ";border-radius:20px;box-shadow:0px 4px 12px rgba(12,20,66,0.02),0px 30px 80px rgba(12,20,66,0.08),inset 0 0 0 1px ", ";div{border-radius:inherit;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(white,black);mask-image:-webkit-radial-gradient(white,black);}video{display:block;width:100%;}", " ", " ", ""], (function(e) {
            return e.theme.secondary.blendToBackground(125)
        }
        ), (function(e) {
            return e.theme.secondary.blendToBackground(200)
        }
        ), J.mq.lessThan("md")(g || (g = (0,
        a.Z)(["\n    border-radius: 15px;\n  "]))), J.mq.lessThan("sm")(b || (b = (0,
        a.Z)(["\n    border-radius: 9px;\n  "]))), J.mq.lessThan("xs")(x || (x = (0,
        a.Z)(["\n    border-radius: 8px;\n  "])))), ie = X.default.div.withConfig({
            displayName: "pages__Grid",
            componentId: "sc-vcj8q7-1"
        })(["margin:120px 0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:32px;", " ", " ", ""], J.mq.lessThan("lg")(E || (E = (0,
        a.Z)(["\n    margin: 100px 0;\n  "]))), J.mq.lessThan("md")(k || (k = (0,
        a.Z)(["\n    margin: 80px 0;\n    grid-gap: 24px;\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  "]))), J.mq.lessThan("sm")(v || (v = (0,
        a.Z)(["\n    margin: 60px 0;\n  "])))), re = X.default.div.withConfig({
            displayName: "pages__GridFull",
            componentId: "sc-vcj8q7-2"
        })(["position:relative;padding-bottom:45%;background-color:#f4f4f5;border-radius:20px;grid-column:1 / 3;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(white,black);mask-image:-webkit-radial-gradient(white,black);&:before{content:'';position:absolute;z-index:1;bottom:20%;left:0%;right:0;opacity:0.13;filter:blur(120px);transform:translate(-40%,-50%) rotate(8deg);height:20%;background-color:", ";border-radius:75%;pointer-events:none;}", " ", " ", ""], (function(e) {
            return e.theme.primary.background
        }
        ), J.mq.lessThan("md")(y || (y = (0,
        a.Z)(["\n    padding-bottom: 90%;\n    grid-column: 1;\n    border-radius: 15px;\n  "]))), J.mq.lessThan("sm")(w || (w = (0,
        a.Z)(["\n    padding-bottom: 105%;\n    border-radius: 9px;\n  "]))), J.mq.lessThan("xs")(T || (T = (0,
        a.Z)(["\n    border-radius: 8px;\n  "])))), se = X.default.video.withConfig({
            displayName: "pages__VideoFull",
            componentId: "sc-vcj8q7-3"
        })(["width:66.66%;display:block;position:absolute;right:0;bottom:0;", " ", ""], J.mq.lessThan("lg")(C || (C = (0,
        a.Z)(["\n    width: 64%;\n    transform: translateX(6%);\n  "]))), J.mq.lessThan("md")(q || (q = (0,
        a.Z)(["\n    width: 100%;\n    transform: translateX(0px);\n  "])))), le = X.default.div.withConfig({
            displayName: "pages__GridHalf",
            componentId: "sc-vcj8q7-4"
        })(["position:relative;padding-bottom:100%;background-color:#f4f4f5;border-radius:20px;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(white,black);mask-image:-webkit-radial-gradient(white,black);", " ", " ", " &:before{content:'';position:absolute;z-index:1;top:0;left:0;right:0;opacity:0.12;filter:blur(100px);transform:translate(-40%,-50%) rotate(8deg);height:20%;background-color:", ";border-radius:75%;pointer-events:none;", "}"], J.mq.lessThan("md")(N || (N = (0,
        a.Z)(["\n    padding-bottom: 90%;\n    border-radius: 15px;\n  "]))), J.mq.lessThan("sm")(Z || (Z = (0,
        a.Z)(["\n    border-radius: 9px;\n  "]))), J.mq.lessThan("xs")(S || (S = (0,
        a.Z)(["\n    border-radius: 8px;\n  "]))), (function(e) {
            return e.theme.primary.background
        }
        ), (function(e) {
            return e.shineBottom && (0,
            X.css)(["top:auto;bottom:0;transform:translate(20%,-40%) rotate(8deg);"])
        }
        )), de = X.default.div.withConfig({
            displayName: "pages__GridText",
            componentId: "sc-vcj8q7-5"
        })(["position:absolute;z-index:2;left:60px;top:60px;right:60px;display:grid;grid-gap:16px;max-width:360px;", " ", " ", " ", " ", ""], J.mq.lessThan("lg")(_ || (_ = (0,
        a.Z)(["\n    left: 48px;\n    top: 48px;\n    right: 48px;\n    grid-gap: 12px;\n  "]))), J.mq.lessThan("md")(I || (I = (0,
        a.Z)(["\n    left: 40px;\n    top: 40px;\n    right: 40px;\n    grid-gap: 8px;\n  "]))), J.mq.lessThan("sm")(O || (O = (0,
        a.Z)(["\n    left: 36px;\n    top: 36px;\n    right: 36px;\n    grid-gap: 4px;\n  "]))), J.mq.lessThan("xs")(j || (j = (0,
        a.Z)(["\n    left: 24px;\n    top: 24px;\n    right: 24px;\n  "]))), (function(e) {
            return e.bottom && (0,
            X.css)(["top:auto;bottom:60px;", " ", " ", " ", ""], J.mq.lessThan("lg")(D || (D = (0,
            a.Z)(["\n        top: auto;\n        bottom: 48px;\n      "]))), J.mq.lessThan("md")(R || (R = (0,
            a.Z)(["\n        top: auto;\n        bottom: 40px;\n      "]))), J.mq.lessThan("sm")(M || (M = (0,
            a.Z)(["\n        top: auto;\n        bottom: 36px;\n      "]))), J.mq.lessThan("xs")(z || (z = (0,
            a.Z)(["\n        bottom: 24px;\n      "]))))
        }
        )), pe = X.default.div.withConfig({
            displayName: "pages__VideoTop",
            componentId: "sc-vcj8q7-6"
        })(["position:absolute;left:-1px;right:-1px;top:0;&:before{content:'';left:0;right:0;bottom:0;position:absolute;height:24px;background-image:linear-gradient(rgba(244,244,245,0),rgba(244,244,245,1));}video{display:block;width:calc(100% + 2px);}"]), ce = (0,
        X.default)(pe).withConfig({
            displayName: "pages__VideoBottom",
            componentId: "sc-vcj8q7-7"
        })(["bottom:0;top:auto;&:before{content:'';left:0;right:0;top:0;position:absolute;height:20px;background-image:linear-gradient(rgba(244,244,245,1),rgba(244,244,245,0));}"]), ue = X.default.p.withConfig({
            displayName: "pages__Paragraph",
            componentId: "sc-vcj8q7-8"
        })(["font-size:18px;margin:0;color:", ";", ""], (function(e) {
            return e.theme.secondary.background
        }
        ), J.mq.lessThan("md")(B || (B = (0,
        a.Z)(["\n    font-size: 16px;\n  "])))), me = X.default.div.withConfig({
            displayName: "pages__Modal",
            componentId: "sc-vcj8q7-9"
        })(["position:fixed;left:0;top:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;z-index:200;background-color:", ";opacity:0;transition:opacity 0.3s ease;padding-left:20px;padding-right:20px;", ""], (function(e) {
            return e.theme.secondary.blendToBackground(500, 800)
        }
        ), (function(e) {
            var t = e.state;
            return ("entering" === t || "entered" === t) && (0,
            X.css)(["opacity:1;"])
        }
        )), he = X.default.div.withConfig({
            displayName: "pages__ModalInner",
            componentId: "sc-vcj8q7-10"
        })(["width:100%;max-width:1140px;overflow:hidden;-webkit-mask-image:-webkit-radial-gradient(white,black);mask-image:-webkit-radial-gradient(white,black);position:relative;border-radius:11px;box-shadow:0px 30px 130px rgba(0,0,0,0.05);", " ", " ", " ", " @keyframes scaleUp{from{transform:translateY(-24px) scale(0.9);}}& > div{width:100%;padding-bottom:56.25%;margin:auto;display:block;position:relative;object,iframe,embed{position:absolute;top:0;left:0;width:100%;height:100%;}}"], J.mq.lessThan("lg")(P || (P = (0,
        a.Z)(["\n    max-width: 960px;\n  "]))), J.mq.lessThan("md")(F || (F = (0,
        a.Z)(["\n    max-width: 720px;\n  "]))), J.mq.lessThan("sm")(U || (U = (0,
        a.Z)(["\n    max-width: 480px;\n  "]))), (function(e) {
            return "entering" === e.state && (0,
            X.css)(["animation:scaleUp 0.4s ease forwards;"])
        }
        )), fe = X.default.button.withConfig({
            displayName: "pages__Close",
            componentId: "sc-vcj8q7-11"
        })(["appearance:none;outline:none;margin:0;padding:0;border:none;cursor:pointer;display:flex;justify-content:center;align-items:center;width:56px;height:56px;position:absolute;right:36px;top:36px;border-radius:50%;color:", ";background-color:", ";transition:background-color 0.15s;", " &:hover{background-color:", ";}svg{--icon-color:currentColor;--icon-size:18px;}"], (function(e) {
            return e.theme.primary.foreground
        }
        ), (function(e) {
            return e.theme.secondary.blendToBackground(600)
        }
        ), J.mq.lessThan("sm")(L || (L = (0,
        a.Z)(["\n    bottom: 40px;\n    left: 50%;\n    top: auto;\n    transform: translateX(-50%);\n  "]))), (function(e) {
            return e.theme.secondary.blendToBackground(650)
        }
        )), ge = function() {
            var e = (0,
            o.useRef)(null)
              , t = (0,
            o.useState)(!1)
              , n = t[0]
              , a = t[1]
              , i = (0,
            W.K2)("3159585216");
            return o.createElement(A.Ar, null, o.createElement(V.q, null, o.createElement("title", null, "Home - ", i.site.siteMetadata.title)), o.createElement(A.VM, {
                headline: o.createElement(o.Fragment, null, o.createElement("span", null, "A more humane"), o.createElement("br", null), "to-do list"),
                text: o.createElement(o.Fragment, null, "Dona is a back to basic to-do list focused on fast and delightful user experience."),
                textLight: !0,
                cta: o.createElement(o.Fragment, null, o.createElement(H.zx, {
                    variant: "light",
                    icon: o.createElement(H.JO.Play, null),
                    onClick: function() {
                        return a(!0)
                    }
                }, "Watch video"), o.createElement(H.zx, {
                    onClick: function() {
                        var e;
                        null === (e = window.open("https://app.dona.ai", "_blank")) || void 0 === e || e.focus()
                    }
                }, "Try for free →"))
            }), o.createElement(A.pT, null, o.createElement(oe, null, o.createElement("div", null, o.createElement("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0
            }, o.createElement("source", {
                src: Y,
                type: "video/mp4"
            }), o.createElement("source", {
                src: K,
                type: "video/webm"
            })))), o.createElement(ie, null, o.createElement(re, null, o.createElement(de, null, o.createElement(H.s0, {
                type: "h2"
            }, "Fast & delightful", o.createElement("br", null), "user experience"), o.createElement(ue, null, "Dona helps you to manage your tasks and achieve your goals in intuitive and delightful way. We wanted to build an app you will enjoy using every day.")), o.createElement(se, {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0
            }, o.createElement("source", {
                src: ee,
                type: "video/mp4"
            }), o.createElement("source", {
                src: te,
                type: "video/webm"
            }))), o.createElement(le, null, o.createElement(de, null, o.createElement(H.s0, {
                type: "h3"
            }, "Light, dark & black UI theme"), o.createElement(ue, null, "Dona offers lot of customizations, one of them allowing you to choose from light, dark and black UI theme.")), o.createElement(ce, null, o.createElement("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0
            }, o.createElement("source", {
                src: ne,
                type: "video/mp4"
            }), o.createElement("source", {
                src: ae,
                type: "video/webm"
            })))), o.createElement(le, {
                shineBottom: !0
            }, o.createElement(de, {
                bottom: !0
            }, o.createElement(H.s0, {
                type: "h3"
            }, "Details matter"), o.createElement(ue, null, "We want to bring satisfation to every interaction.")), o.createElement(pe, null, o.createElement("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0
            }, o.createElement("source", {
                src: Q,
                type: "video/mp4"
            }), o.createElement("source", {
                src: $,
                type: "video/webm"
            }))))), o.createElement(A.mA, {
                ref: e
            })), o.createElement(G, {
                in: n,
                timeout: 300,
                unmountOnExit: !0
            }, (function(e) {
                return o.createElement(me, {
                    state: e
                }, o.createElement(fe, {
                    state: e,
                    onClick: function() {
                        return a(!1)
                    }
                }, o.createElement(H.JO.Close, null)), o.createElement(he, {
                    state: e
                }, o.createElement("div", null, o.createElement("iframe", {
                    src: "https://www.youtube.com/embed/0_2xORiONDo?autoplay=1",
                    title: "YouTube video player",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: !0
                }))))
            }
            )))
        }
    }
}]);
//# sourceMappingURL=component---src-pages-index-tsx-b3eae4e94e4812c219af.js.map
