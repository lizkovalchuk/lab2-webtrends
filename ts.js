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
//grab html elements
var pTodayDate = document.getElementById("p--today-date");
//today as a date
var today = new Date();
//backticks are the starting and ending of strings.
//the $ and curly braces acts as concaticating
pTodayDate.innerHTML = "Today is " + days[today.getDay()] + "  " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
// part 2
// the user is to input thier birthday in the date picker.
// when the user clicks the "That's my birthday" button
// display in the <p> below the button day when their birthday
// will take place. 
// html elements
//let pTodayDate = document.getElementById("p--today-date");
var buttonBirthday = document.getElementById("button--birthday");
var pBirthdayMessage = document.getElementById("p--birthday-message");
var inputDatePicker = document.getElementById("input--date-picker");
buttonBirthday.onclick = function () {
    //  get birthday from tag
    var userBDay = inputDatePicker.value;
    var userBdate = new Date(userBDay);
    console.log(userBDay);
    console.log(userBdate);
    pBirthdayMessage.innerHTML = makeDateString(userBdate);
};
function makeDateString(inputDate) {
    // if today is user's birthday
    // console.log(inputDate);
    console.log(inputDate.getDate());
    console.log(inputDate.getMonth());
    console.log(today.getDate());
    console.log(today.getMonth());
    if ((inputDate.getDate() + 1 === today.getDate())
        &&
            (inputDate.getMonth() === today.getMonth())) {
        return "Happy Birthday!";
    }
    // today is not their birthday
    var thisYearsBirthday = new Date();
    thisYearsBirthday.setDate(inputDate.getDate());
    thisYearsBirthday.setFullYear(today.getFullYear());
    thisYearsBirthday.setMonth(inputDate.getMonth());
    return "Your birthday is " + days[thisYearsBirthday.getDay()] + " " + months[inputDate.getMonth()] + " " + inputDate.getDate() + ", " + today.getFullYear();
}
