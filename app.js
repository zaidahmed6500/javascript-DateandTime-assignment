

// Assignmen 1
function formatDate(date){
    
    return date.toLocaleDateString("dafault", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"

    }

    );
}

const format = new Date("2025-08-09")
console.log(formatDate(format))



// Assignment 3
function calculateBirthday(){
    let currentDate = new Date().getTime();
let birthDate = new Date("September 13, 2007 13:25:00").getTime();
let remaining = currentDate - birthDate;
let calculateAge = Math.floor(remaining / 1000 / 60 / 60 / 24 / 365);
let calculateDays = Math.floor(remaining / 1000 / 60 / 60 / 24);
console.log(calculateAge)
console.log(calculateDays)
}

calculateBirthday();
// console.log(calculateBirthday())



// assignment 4
const firstDay = new Date()
firstDay.setDate(1)
console.log(firstDay)



// Assignment 5
function lastDate(){
    const current = new Date()
    return new Date(current.getFullYear(), current.getMonth() + 1, 0).getDate();

}
console.log(lastDate())




// Assigmnet 9
function checkDay(dateString){
    var date = new Date(dateString)
    var day = date.getDay()

    if(day === 0 || day === 6){
        return "Weekend";
    }
    else{
        return "Weekday";
    }
}

console.log(checkDay("2025-09-20"))
console.log(checkDay("2025-09-22"))



// assignment 10
function whoIsOlder(birth1, birth2){
    var date1 = new Date(birth1)
    var date2 = new Date(birth2)

    if(date1 < date2){
        return "Person1 Older and Person2 Younger"
    }
    else if(date2 < date1){
        return "Person2 Older and Person1 younger"
    }
    else{
        return "Both are the same age"
    }
}

console.log(whoIsOlder("2007-09-13", "2005-09-13"))



// Assignment 16
function monthDates() {
  var dates = [];
  var today = new Date();

  var year = today.getFullYear();
  var month = today.getMonth();      // 0 = January
  var lastDay = new Date(year, month + 1, 0).getDate(); // days in this month

  for (var i = 1; i <= lastDay; i++) {
    var day = i;
    if (day < 10) day = "0" + day;           // add 0 if single digit
    var mon = month + 1;
    if (mon < 10) mon = "0" + mon;           // add 0 if single digit
    dates.push(day + "-" + mon + "-" + year);
  }

  return dates;
}

// Example:
console.log(monthDates());




// assignment 17 
function utcToLocal(utcString){
    var date = new Date(utcString)
    return date.toLocaleString();
}
// utcToLocal();
console.log(utcToLocal("2025-09-20T10:00:00Z"))




// Assignmen 19
function formatDate() {
  var d = new Date();

  var year  = d.getFullYear();
  var month = d.getMonth() + 1;   // months start at 0
  var day   = d.getDate();

  // add leading zeros
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  return year + "-" + month + "-" + day;
}

// Example:
console.log(formatDate());  // 👉 "2025-09-20"



// assignment 20
function daysInMonth(month, year) {
  // month is 1–12 (1 = Jan, 12 = Dec)
  return new Date(year, month, 0).getDate();
}

// 🔹Examples:
console.log(daysInMonth(2, 2024)); // 👉 29 (Feb 2024 is a leap year)
console.log(daysInMonth(2, 2025)); // 👉 28
console.log(daysInMonth(8, 2025)); // 👉 31 (August 2025)
