// ==== OBJECTIVE ===========
// Write today's day in a human friendly way.
// For example, like  'Today is Saturday May 12, 2018.'

// from Lee
//enum a set of constance
//the same theme as interfaces.
// enum has a sequence like an array
// you can define enums with arbitrary items.

enum days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

enum months{
    January,
    February,
    March,
    April, 
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

enum earthPhysics{
    gravity = 9.81,
    c = Math.pow(3.88, 8),
    weight = 1
}

console.log(days[0]);

//html elements
let pTodayDate = document.getElementById("p--today-date");

//today as a date
let today : Date = new Date();

console.log(today.getMonth());


//backticks are the starting and ending of strings.
//the $ and curly braces acts as concaticating
pTodayDate.innerHTML = `Today is ${days[today.getDay()]}  ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;


