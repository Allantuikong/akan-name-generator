// Akan names 
let maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

let femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

// Getting day of birth from date given

let dob= function(){
    document.getElementById("date").value;
} 

function calculate(){ 
    let givenDate=dob()
    dayOfTheWeek= givenDate.getDay()
}

let result = function () {
    dayOfTheWeek = calculate()
}




