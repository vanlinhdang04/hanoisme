!function (e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery) }(function (e) { function t(t, n) { function o() { return r.update(), s(), r } function i() { b.css(k, v / z), h.css(k, -v), g = b.offset()[k], m.css(D, S), f.css(D, x), f.css(k, (S - x) / 2), b.css(D, M) } function s() { C ? d[0].ontouchstart = function (e) { 1 === e.touches.length && (u(e.touches[0]), e.stopPropagation()) } : (b.bind("mousedown", u), f.bind("mouseup", c)), n.wheel && window.addEventListener ? (t[0].addEventListener("DOMMouseScroll", a, !1), t[0].addEventListener("mousewheel", a, !1)) : n.wheel && (t[0].onmousewheel = a) } function u(t) { e("body").addClass("noSelect"), g = L ? t.pageX : t.pageY, P = parseInt(b.css(k), 10) || 0, C ? (document.ontouchmove = function (e) { e.preventDefault(), c(e.touches[0]) }, document.ontouchend = l) : (e(document).bind("mousemove", c), e(document).bind("mouseup", l), b.bind("mouseup", l)) } function a(t) { if (1 > y) { var o = t || window.event, i = o.wheelDelta ? o.wheelDelta / 120 : -o.detail / 3; v -= i * n.wheelSpeed, v = Math.min(w - p, Math.max(0, v)), b.css(k, v / z), h.css(k, -v), (n.wheelLock || v !== w - p && 0 !== v) && (o = e.event.fix(o), o.preventDefault()) } } function c(e) { 1 > y && (mousePositionNew = L ? e.pageX : e.pageY, thumbPositionDelta = mousePositionNew - g, n.scrollInvert && (thumbPositionDelta = g - mousePositionNew), thumbPositionNew = Math.min(x - M, Math.max(0, P + thumbPositionDelta)), v = thumbPositionNew * z, b.css(k, thumbPositionNew), h.css(k, -v)) } function l() { e("body").removeClass("noSelect"), e(document).unbind("mousemove", c), e(document).unbind("mouseup", l), b.unbind("mouseup", l), document.ontouchmove = document.ontouchend = null } var r = this, d = t.find(".viewport"), h = t.find(".overview"), m = t.find(".scrollbar"), f = m.find(".track"), b = m.find(".thumb"), p = 0, w = 0, v = 0, y = 0, S = 0, x = 0, z = 0, M = 0, P = 0, g = 0, L = "x" === n.axis, C = "ontouchstart" in document.documentElement, D = L ? "width" : "height", k = L ? "left" : "top"; return this.update = function (e) { switch (sizeLabelCap = D.charAt(0).toUpperCase() + D.slice(1).toLowerCase(), p = d[0]["offset" + sizeLabelCap], w = h[0]["scroll" + sizeLabelCap], y = p / w, x = n.trackSize || p, S = n.scrollBarSize || p, M = Math.min(x, Math.max(0, n.thumbSize || x * y)), z = n.thumbSize ? (w - p) / (x - M) : w / x, m.toggleClass("disable", y >= 1), e) { case "bottom": v = w - p; break; case "relative": v = Math.min(w - p, Math.max(0, v)); break; default: v = parseInt(e, 10) || 0 } i() }, o() } e.tiny = e.tiny || {}, e.tiny.scrollbar = { options: { axis: "y", wheel: !0, wheelSpeed: 40, wheelLock: !0, scrollInvert: !1, scrollBarSize: !1, trackSize: !1, thumbSize: !1 } }, e.fn.tinyscrollbar = function (n) { var o = e.extend({}, e.tiny.scrollbar.options, n); return this.each(function () { e(this).data("tsb", new t(e(this), o)) }), this }, e.fn.tinyscrollbar_update = function (t) { return e(this).data("tsb").update(t) } });