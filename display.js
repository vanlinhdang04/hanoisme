$(function() {
    $(".lightbox").lightbox();
});

if (document.URL.indexOf("www.") > -1)
    window.location = document.URL.replace("www.", "");

function NewWindow_(e, t, n, o, i, r) {
    var u = screen.width / 2 - n / 2, d = screen.height / 2 - o / 2 - 100, l = "width=" + n + ",height=" + o + ",scrollbars=" + i + ",resizable=" + r + "'";
    mywindow = window.open(e, t, l), mywindow.moveTo(u, d);
}

function setCookie(e, t, n, o, i, r) {
    var u = new Date;
    u.setDate(u.getDate() + parseInt(n)), document.cookie = e + "=" + escape(t) + (n ? "; expires=" + u.toGMTString() : "") + (o ? "; path=" + o : "") + (i ? "; domain=" + i : "") + (r ? "; secure" : "");
}

function getCookie(e) {
    var t = document.cookie, n = e + "=", o = t.indexOf("; " + n);
    if (-1 == o) {
        if (o = t.indexOf(n), 0 != o) return null;
    } else o += 2;
    var i = document.cookie.indexOf(";", o);
    return -1 == i && (i = t.length), unescape(t.substring(o + n.length, i));
}

function deleteCookie(e, t, n) { getCookie(e) && (document.cookie = e + "=" + (t ? "; path=" + t : "") + (n ? "; domain=" + n : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT"); }

function GetWindowWidth() {
    var e = 0, t = 0;
    return "number" == typeof window.innerWidth ? (e = window.innerWidth, t = window.innerHeight) : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (e = document.documentElement.clientWidth, t = document.documentElement.clientHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (e = document.body.clientWidth, t = document.body.clientHeight), e;
}

function GetWindowHeight() {
    var e = 0, t = 0;
    return "number" == typeof window.innerWidth ? (e = window.innerWidth, t = window.innerHeight) : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (e = document.documentElement.clientWidth, t = document.documentElement.clientHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (e = document.body.clientWidth, t = document.body.clientHeight), t;
}

function ThongBao(e, t) {
    TaoThongBao(), document.getElementById("divNoiDungThongBao").innerHTML = t, e = parseInt(e) / 1e3;
    var n = self.setInterval(function() { document.getElementById("divDemNguoiThoiGian").innerHTML = e + "&nbsp;", e--, 0 > e && (window.clearInterval(n), HuyThongBao()); }, 1e3);
}

function TaoThongBao() {
    var e = (GetWindowWidth() - 400) / 2;
    document.getElementById("form1").innerHTML += "<div id='divThongBao'><div id='divKhungThongBao'><div id='divDemNguoiThoiGian'>&nbsp;</div><div id='divNoiDungThongBao'><!----></div></div></div>", document.getElementById("divThongBao").style.cssText = "background:#666;position:absolute;top:10%;left:" + e + "px;z-index:9999;display:none;border:solid 1px #fff;border-radius:10px;width:400px", document.getElementById("divKhungThongBao").style.cssText = "position:relative;padding:30px 50px 30px 20px", document.getElementById("divNoiDungThongBao").style.cssText = "font:normal 18px robotocondensed;color:#fff", document.getElementById("divDemNguoiThoiGian").style.cssText = "font:normal 50px robotocondensed;color:#fff;position:absolute;top:10px;right:-5px;-moz-opacity: 0.5;opacity:.50;filter: alpha(opacity=50)", document.getElementById("divThongBao").style.display = "block", window.scrollTo(0, 0);
}

function HuyThongBao() { document.getElementById("divThongBao").style.display = "none", document.getElementById("form1").removeChild(document.getElementById("divThongBao")); }

function ScrollTo(e, t) { null == t && (t = 0), null == e || "" == e ? jQuery("html, body").animate({ scrollTop: 0 + t }, 1e3) : jQuery("html, body").animate({ scrollTop: jQuery(e).offset().top + t - 100 }, 1e3); }

function ResetAllTextBox(e) { jQuery(e + " input[type=text]").each(function() { jQuery(this).attr("value", ""); }), jQuery(e + " textarea").each(function() { jQuery(this).attr("value", ""); }), ScrollTo(); }

function ResetAllTextBox(e, t) { jQuery(e + " input[type=text]").each(function() { jQuery(this).attr("value", ""); }), jQuery(e + " textarea").each(function() { jQuery(this).attr("value", ""); }), t && ScrollTo(); }

function CheckEmail(e) {
    var t = jQuery(e), n = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return n.test(t.val()) ? !0 : (alert("Email không hợp lệ!"), t.focus, !1);
}

function CheckEmailValue(e) {
    var t = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return t.test(e) ? !0 : (alert("Email không hợp lệ!"), !1);
}

function loading(e) {
    if (!document.getElementById("AjaxLoading")) {
        var t = (GetWindowWidth() - 36) / 2, n = '<div id="AjaxLoading" onclick="loading(false)" style="background:#fff url(' + weburl + "cms/display/cs/AjaxLoading.gif.ashx) no-repeat center;display:none;width:36px;height:36px;line-height:36px;position:fixed;_position:absolute;top:40%;left:" + t + 'px;z-index:9999;border:solid 1px #fff;border-radius:36px"><!----></div>';
        jQuery("body").append(n);
    }
    "undefined" == typeof e || e ? jQuery("#AjaxLoading").show() : jQuery("#AjaxLoading").fadeOut();
}

function loading2(e, t) {
    if (jQuery(e + " .AjaxLoading2").length < 1) {
        var n = (jQuery(e).outerWidth() - 36) / 2, o = '<div class="AjaxLoading2" style="background:#fff url(' + weburl + "cms/display/cs/AjaxLoadingS.gif.ashx) no-repeat center;display:none;width:36px;height:36px;line-height:36px;position:absolute;top:50%;left:" + n + 'px;z-index:9999;border:solid 1px #fff;border-radius:36px"><!----></div>';
        jQuery(e).append(o).css({ position: "relative", "z-index": "1" });
    }
    "undefined" == typeof t || t ? jQuery(e + " .AjaxLoading2").show() : jQuery(e + " .AjaxLoading2").fadeOut();
}

function AddtoSocialMedia(e, t, n) {
    var o = document.URL, i = document.title;
    window.open(t + encodeURIComponent(o) + n + (0 == jQuery.trim(n).length ? "" : encodeURIComponent(i)), "win");
}

function ChangeYahooStatus(e, t, n) {
    for (var o, i = jQuery("a[href*='" + e + "']"), r = [], u = 0; u < i.length; u++) o = i[u].href, o = o.substring(o.indexOf("?") + 1, o.length), r.indexOf(o) < 0 && r.push(o);
    for (var u = 0; u < r.length; u++)
        o = r[u], jQuery.ajax({
            url: "http://opi.yahoo.com/online?u=" + o + "&m=t&t=1",
            type: "GET",
            title: o,
            success: function(o) {
                var i = this.title, r = o.responseText.replace(/(<([^>]+)>)/gi, "").replace(/\s*/g, "");
                "01" == r ? jQuery("a[href='" + e + i + "']").each(function() { t && jQuery(this).html(t), jQuery(this).removeClass("checking").addClass("yahooOn").removeClass("yahooOff"); }) : jQuery("a[href='" + e + i + "']").each(function() { n && jQuery(this).html(n), jQuery(this).removeClass("checking").addClass("yahooOff").removeClass("yahooOn"); });
            },
            error: function(e) {}
        });
}

function ChangeSkypeStatus(e) {
    for (var t, n = jQuery("a[href*='" + e + "']"), o = [], i = 0; i < n.length; i++) t = n[i].href, t = t.substring(t.indexOf(":") + 1, t.length), o.indexOf(t) < 0 && o.push(t);
    for (var i = 0; i < o.length; i++)
        t = o[i], jQuery.ajax({
            url: "http://mystatus.skype.com/" + t + ".num",
            type: "GET",
            title: t,
            success: function(t) {
                var n = this.title, o = t.responseText.replace(/(<([^>]+)>)/gi, "").replace(/\s*/g, "");
                "01" == o || "1" == o ? jQuery("a[href='" + e + n + "']").each(function() { jQuery(this).removeClass("skypeOn").addClass("skypeOff"); }) : jQuery("a[href='" + e + n + "']").each(function() { jQuery(this).removeClass("skypeOff").addClass("skypeOn"); });
            },
            error: function(e) {}
        });
    var r = '<script type="text/javascript" src="skypeCheck.js"/*tpa=http://download.skype.com/share/skypebuttons/js/skypeCheck.js*/></script>';
    jQuery("body").append(r);
}

function CropImage(e, t) {
    "undefined" == typeof t && (t = 1);
    for (var n, o, i, r = jQuery("" + e), u = 0; u < r.length; u++) n = jQuery(r[u]).outerWidth(), o = jQuery(r[u]).outerHeight(), i = jQuery(r[u]).find("img"), CropAnImage(i, t, n, o);
}

function CropAnImage(e, t, n, o) {
    var i = 0;
    if (!n || !o) {
        var r = jQuery(e).parent();
        n = r.outerWidth(), o = r.outerHeight();
    }
    var u, d;
    if (u = jQuery(e).outerWidth(), d = jQuery(e).outerHeight(), 1 == t)
        if (u / d > n / o) {
            u *= o / d;
            var l = u - n;
            l /= 2, jQuery(e).css({ position: "absolute", "z-index": 1, top: 0, left: 0 }), jQuery(e).animate({ left: -l + "px", top: 0, height: o + "px", width: u + "px" }, i);
        } else {
            d *= n / u;
            var a = d - o;
            a /= 2, jQuery(e).css({ position: "absolute", "z-index": 1, top: 0, left: 0 }), jQuery(e).animate({ top: -a + "px", left: 0, width: n + "px", height: d + "px" }, i);
        }
    else if (u / d > n / o) {
        d *= n / u;
        var a = o - d;
        a /= 2, jQuery(e).css({ position: "absolute", "z-index": 1, top: 0, left: 0 }), jQuery(e).animate({ top: a + "px", left: 0, width: n + "px", height: d + "px" }, i);
    } else {
        u *= o / d;
        var l = n - u;
        l /= 2, jQuery(e).css({ position: "absolute", "z-index": 1, top: 0, left: 0 }), jQuery(e).animate({ left: l + "px", top: 0, height: o + "px", width: u + "px" }, i);
    }
}

function ShowScrollToTop() {
    var e = !1, t = jQuery("#ScrollToTop");
    e = GetWindowWidth() < 980 + t.outerWidth() ? !1 : !0;
    var n = !1;
    n = f_scrollTop() > 100 ? !0 : !1, e && n ? t.fadeIn() : t.fadeOut();
}

function IncreaseTextSize() {
    var e = parseInt(jQuery(".TextSize").css("font-size"));
    e++;
    var t = parseInt(jQuery(".TextSize").css("line-height"));
    t++, jQuery(".TextSize").css({ "font-size": e + "px", "line-height": t + "px" });
}

function DecreaseTextSize() {
    var e = parseInt(jQuery(".TextSize").css("font-size"));
    e--;
    var t = parseInt(jQuery(".TextSize").css("line-height"));
    t--, jQuery(".TextSize").css({ "font-size": e + "px", "line-height": t + "px" });
}

function ResetTextSize() { jQuery(".TextSize").css({ "font-size": "12px", "line-height": "20px" }); }

function f_clientWidth() { return f_filterResults(window.innerWidth ? window.innerWidth : 0, document.documentElement ? document.documentElement.clientWidth : 0, document.body ? document.body.clientWidth : 0); }

function f_clientHeight() { return f_filterResults(window.innerHeight ? window.innerHeight : 0, document.documentElement ? document.documentElement.clientHeight : 0, document.body ? document.body.clientHeight : 0); }

function f_scrollLeft() { return f_filterResults(window.pageXOffset ? window.pageXOffset : 0, document.documentElement ? document.documentElement.scrollLeft : 0, document.body ? document.body.scrollLeft : 0); }

function f_scrollTop() { return f_filterResults(window.pageYOffset ? window.pageYOffset : 0, document.documentElement ? document.documentElement.scrollTop : 0, document.body ? document.body.scrollTop : 0); }

function f_filterResults(e, t, n) {
    var o = e ? e : 0;
    return t && (!o || o > t) && (o = t), n && (!o || o > n) ? n : o;
}

function InitCheckInputContact(e) { jQuery(e + " .required").change(function() { this.value.length < 1 ? (jQuery(this).addClass("notfilled"), this.focus()) : jQuery(this).removeClass("notfilled"); }); }

function ResetInputContact(e) { jQuery(e + " .errorms").remove(), jQuery(e + " .notfilled").removeClass("notfilled"), jQuery(e + " input").val(""), jQuery(e + " textarea").val(""); }

function CheckInputContact(e) {
    var t = "", n = !0;
    return jQuery(e + " .errorms").remove(), jQuery(e + " .notfilled").removeClass("notfilled"), jQuery(e + " .required").each(function() { this.value.length < 1 && (n = !1, jQuery(this).addClass("notfilled"), t.length < 1 && (t = this.id)); }), n ? jQuery(e + " .txtemail").length > 0 && (CheckEmail(e + " .txtemail") || (n = !1, jQuery(".txtemail").focus())) : document.getElementById(t).focus(), n;
}

Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
    for (var n = t || 0, o = this.length; o > n; n++) if (this[n] === e) return n;
    return -1;
}), function(e) {
    e.fn.ShowPopup = function(t) {
        var n = e.extend({ target: null }, t);
        return this.each(function() {
            jQuery(this).click(function() {
                var t;
                t = n.target ? jQuery(n.target).html() : jQuery(jQuery(this).attr("href")).html();
                var o = '<div id="fadePopup"><!----></div>', i = '<div id="lightPopup"><span class="btClosePopup">&nbsp;</span><div id="lightPopupContent">' + t + "</div></div>";
                jQuery("#fadePopup").remove(), jQuery("#lightPopup").remove(), jQuery("body").append(o), jQuery("body").append(i), jQuery("#fadePopup").click(function() { e.fn.ShowPopup.hide(); }), jQuery("#lightPopup .btClosePopup").click(function() { e.fn.ShowPopup.hide(); });
                var r = (GetWindowWidth() - jQuery("#lightPopup").outerWidth()) / 2;
                return jQuery("#lightPopup").css("left", r), jQuery("#lightPopup").fadeIn(), jQuery("#fadePopup").fadeIn(), !1;
            });
        });
    }, e.fn.ShowPopup.hide = function() { jQuery("#lightPopup").fadeOut(), jQuery("#fadePopup").fadeOut(); };
}(jQuery), function(e) {
    var t, n, o = 0, i = 3;
    e.fn.InitScroll = function(o) { t = e.extend({ ScrollFrame: null, ScrollFrameContent: null, LeftButton: null, RightButton: null, FrameWidth: null, AnimateTime: 300 }, o), t.FrameWidth || (t.FrameWidth = jQuery(t.ScrollFrame).outerWidth()), t.LeftButton && jQuery(t.LeftButton).click(function() { e.fn.InitScroll.Scroll(-1); }), t.RightButton && jQuery(t.RightButton).click(function() { e.fn.InitScroll.Scroll(1); }), jQuery(t.ScrollFrame).css({ width: t.FrameWidth, position: "relative", "z-index": "1", overflow: "hidden" }), jQuery(t.ScrollFrameContent).css({ position: "absolute", "z-index": "1", top: "0", left: 0 }), n = jQuery(t.ScrollFrameContent).children(), jQuery(t.ScrollFrameContent).children().each(function() { i += jQuery(this).outerWidth(!0); }), jQuery(t.ScrollFrameContent).css("width", i), i < t.FrameWidth && (jQuery(t.LeftButton).hide(), jQuery(t.RightButton).hide()), jQuery(t.ScrollFrameContent).animate({ left: 0 }, t.AnimateTime); }, e.fn.InitScroll.Scroll = function(e) {
        if (jQuery(n[o + e]).position()) {
            o += e;
            var r = -jQuery(n[o]).position().left;
            t.FrameWidth - r > i && (r = t.FrameWidth - i, o -= e), jQuery(t.ScrollFrameContent).animate({ left: r }, t.AnimateTime);
        } else jQuery(t.ScrollFrameContent).animate({ left: 0 }, t.AnimateTime);
    };
}(jQuery);

function WebForm_OnSubmit() { return "function" == typeof ValidatorOnSubmit && 0 == ValidatorOnSubmit() ? !1 : !0; }

function doClick(n, o) {
    var t;
    if (t = window.event ? window.event.keyCode : o.which, 13 == t) {
        var e = document.getElementById(n);
        null != e && (e.click(), event.keyCode = 0);
    }
}

"undefined" == typeof __doPostBack && (__doPostBack = function(n, o) {
    var t = document.forms.form1;
    t || (t = document.form1), t.onsubmit && 0 == t.onsubmit() || (t.__EVENTTARGET.value = n, t.__EVENTARGUMENT.value = o, t.submit());
});
(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() < 300) {
            $('#gotop').stop(false, true).fadeOut(3000);

        } else {
            $('#gotop').stop(false, true).fadeIn(3000);
        }
    });

    $('#gotop').click(function() {
        $('body, html').animate({ scrollTop: 0 }, 1500);
        return false;
    });
})(jQuery);

function ChangeObjectLinkToAjax(title, obj, rewrite) {
    var list = jQuery(obj).find("a");
    var href = "";
    for (var i = 0; i < list.length; i++) {
        href = list[i].href;
        if (href.indexOf("&p=") > -1) {
            var p = href.substring(href.indexOf("&p=") + "&p=".length);
            var link = weburl;
            if (typeof rewrite != "undefined")
                link += rewrite + "/";
            if (title.length > 0)
                link = link + title;
            if (p > 1)
                link = link + "/trang-" + p + ".htm";
            else
                link = link + ".htm";
            list[i].href = link;
        }
    }
}

$.fn.setAllToMaxHeight = function() {
    $(this).height(Math.max.apply(this, $.map(this, function(e) { return $(e).height(); })));
};
$(function() {
    $(".SubHomeasync").setAllToMaxHeight();
    $("#AdvLinkWebsite .tinyscrollbar .viewport").css("height", $(".SubHomeasync").height() + 25);
});
/*end common*/