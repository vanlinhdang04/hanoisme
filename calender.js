//Modified by:    ThoNguyen (http://tatthanh.com.vn)

$.fn.Calender = function (op) {
    $.extend(DF, op);
    return $(this).each(function() {

    });
}
function display(elementById) {
    getCalender(nows.month, nows.year, elementById);
}
var langVI = {
    day: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
    shortDay: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'],
    month: ['Tháng 1,', 'Tháng 2,', 'Tháng 3,', 'Tháng 4,', 'Tháng 5,', 'Tháng 6,', 'Tháng 7,', 'Tháng 8,', 'Tháng 9,', 'Tháng 10,', 'Tháng 11,', 'Tháng 12,'],
    shortMonth: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
}
var langEN = {
    day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDay: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    shortDay2: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonth: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};
var DF = {
    lang: 'vi',
    type: 'default',    //short
};
var now = new Date();
var nows = {
    day: now.getDay(),
    date: now.getDate(),
    month: now.getMonth(),
    year: Y2KFix(now.getYear())
};
var dynamic = {
    day: nows.day,
    date: nows.date,
    month: nows.month,
    year: nows.year,
};
function Y2KFix(year) {
    // Y2K Fix, Isaac Powell 
    // http://onyx.idbsu.edu/~ipowell
    return year < 2000 ? year + 1900 : year;
}
function isLeapYear(year) {
    if (((year % 4) == 0) && ((year % 100) != 0) || ((year % 400) == 0)) return true;
    else return false;
}
function getDateFnc(month, year) {
    var date;
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) date = 31;
    else if (month == 4 || month == 6 || month == 9 || month == 11) date = 30;
    else {
        if (isLeapYear(year)) date = 29;
        else date = 28;
    }
    return date;
}
function nextMonth(elementById) {
    if (dynamic.month < 11) dynamic.month++;
    else {
        dynamic.month = 0;
        dynamic.year++;
    }
    getCalender(dynamic.month, dynamic.year, elementById);
}
function prewMonth(elementById) {

    if (dynamic.month > 0) dynamic.month--;
    else {
        dynamic.month = 11;
        dynamic.year--;
    }
    getCalender(dynamic.month, dynamic.year, elementById);
}
function getCalender(month, year, elementById) {

    var date = "";
    var day = "";
    var firstOfMonth = new Date(year, month, 1);
    var lastOfMonthsub = getDateFnc(month, year);
    var starPoint = firstOfMonth.getDay();
    var dislay = document.getElementById(elementById);
    for (i = 0; i < 7; i++) {
        if (i == nows.day && month == nows.month && year == nows.year)
            day += "<th class=\"selectedDay\">" + langVI.shortDay[i] + "</th>";
        else
            day += "<th>" + langVI.shortDay[i] + "</th>";
    }
    var addEnd = 0;
    for (i = 0; i < 35; i++) {
        if (i % 7 == 0) {
            day += "</tr><tr>";
        }
        if ((i - starPoint) >= 0 && (i - starPoint) < getDateFnc(month + 1, year)) {
            if ((i + 1 - starPoint) < 10) {
                if ((i + 1 - starPoint) == nows.date && month == nows.month && year == nows.year)
                    day += "<td class=\"selectedDate tbDate\" data='" + (parseInt(month) + parseInt('1')) + "/" + (i + 1 - starPoint) + "/" + year + "'><i data='" + (parseInt(month) + parseInt('1')) + "/" + (i + 1 - starPoint) + "/" + year + "'>" + (i + 1 - starPoint) + "</i></td>";
                else
                    day += "<td class=\"tbDate\" data='" + (parseInt(month) + parseInt('1')) + "/" + (i + 1 - starPoint) + "/" + year + "'><i>" + (i + 1 - starPoint) + "</i></td>";
            } else {
                if ((i + 1 - starPoint) == nows.date && month == nows.month && year == nows.year)
                    day += "<td  class=\"selectedDate\" data='" + (parseInt(month) + parseInt('1')) + "/" + (i + 1 - starPoint) + "/" + year + "'><i data='" + (parseInt(month) + parseInt('1')) + "/" + (i + 1 - starPoint) + "/" + year + "'>" + (i + 1 - starPoint) + "</i></td>";
                else
                    day += "<td class=\"tbDate\" data='" + (parseInt(month) + parseInt('1')) + "/" + (i + 1 - starPoint) + "/" + year + "'><i>" + (i + 1 - starPoint) + "</i></td>";
            }
        } else {
            if (i < starPoint)
                day += "<td class='disable' data='0'>" + (lastOfMonthsub + i + 1 - starPoint) + "</td>";
            else {
                addEnd++;
                day += "<td class='disable' data='0'>" + addEnd + "</td>";
            }
        }
    }
    //echo html
    dislay.innerHTML =
    //echo month & control
    "<div class=\"calenderHead\"><div class=\"lControl\" onclick=\"prewMonth('" + elementById + "')\"></div>" +
    "<label>" + langVI.month[month] + " " + year + "</label>" +
    "<div class=\"rControl\" onclick=\"nextMonth('" + elementById + "')\"></div></div>" +
    //echo Date
    "<table><tr>" + day + "</tr>" +
    //echo Day
    "" + date + "</table>";
    //return echo
    return dislay;
}
//}(jQuery)