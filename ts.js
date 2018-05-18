// ==== OBJECTIVE ===========
// Write today's day in a human friendly way.
// For example, like  'Today is Saturday May 12, 2018.'
// from Lee
//enum a set of constance
//the same theme as interfaces.
// enum has a sequence like an array
// you can define enums with arbitrary items.
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
var earthPhysics;
(function (earthPhysics) {
    earthPhysics[earthPhysics["gravity"] = 9.81] = "gravity";
    earthPhysics[earthPhysics["c"] = Math.pow(3.88, 8)] = "c";
    earthPhysics[earthPhysics["weight"] = 1] = "weight";
})(earthPhysics || (earthPhysics = {}));
console.log(days[0]);
//html elements
var pTodayDate = document.getElementById("p--today-date");
//today as a date
var today = new Date();
console.log(today.getMonth());
//backticks are the starting and ending of strings.
//the $ and curly braces acts as concaticating
pTodayDate.innerHTML = "Today is " + days[today.getDay()] + "  " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();