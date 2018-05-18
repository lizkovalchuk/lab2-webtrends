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




//grab html elements

    let pTodayDate = document.getElementById("p--today-date");

//today as a date

    let today : Date = new Date();



//backticks are the starting and ending of strings.
//the $ and curly braces acts as concaticating
    pTodayDate.innerHTML = `Today is ${days[today.getDay()]}  ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;


// part 2
// the user is to input thier birthday in the date picker.
// when the user clicks the "That's my birthday" button
// display in the <p> below the button day when their birthday
// will take place. 

// html elements
//let pTodayDate = document.getElementById("p--today-date");
let buttonBirthday = document.getElementById("button--birthday");
let pBirthdayMessage =  document.getElementById("p--birthday-message");
let inputDatePicker = document.getElementById("input--date-picker");



 buttonBirthday.onclick = function(){
    //  get birthday from tag
    
     let userBDay : string = inputDatePicker.value;
     let userBdate: Date = new Date(userBDay);
     console.log(userBDay);
     console.log(userBdate);

     pBirthdayMessage.innerHTML = makeDateString(userBdate);
};



function makeDateString(inputDate : Date) : string{
    // if today is user's birthday
    // console.log(inputDate);
    console.log(inputDate.getDate());
    console.log(inputDate.getMonth()); 
    console.log(today.getDate());
    console.log(today.getMonth()); 
    if(
        (inputDate.getDate()+1 === today.getDate())
        &&
        (inputDate.getMonth()=== today.getMonth())
){
       
    return `Happy Birthday!`;
}
    
    // today is not their birthday
    let thisYearsBirthday = new Date();
    thisYearsBirthday.setDate(inputDate.getDate() );
    thisYearsBirthday.setFullYear(today.getFullYear() );
    thisYearsBirthday.setMonth(inputDate.getMonth() );
    return `Your birthday is ${days[thisYearsBirthday.getDay()]} ${months[inputDate.getMonth()]} ${inputDate.getDate()}, ${today.getFullYear()}`
}


