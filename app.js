

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

const formatted = new Date("2025-08-09")
console.log(formatDate(formatted))



// Assignment 2
