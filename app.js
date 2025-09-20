

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




// assignment