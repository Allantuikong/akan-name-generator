let akanGenerator = document.getElementById ("akanGenerator");
akanGenerator.addEventListener ("submit"); {
    event.preventDefault()

gender= document.getElementById("gender").value //Gender values

//Computation of day of birth using .getDay

dateOfBirth= document.getElementById ("date").value

dateOfBirth = new Date(dateOfBirth) 

dayOfTheWeek = dateOfBirth.getDay()

//List of Akan Names

maleAkanNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

femaleAkanNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

// Control flows

if (dayOfTheWeek ==0 && gender=="male") {
    bornday= "Monday"
    akanName= maleAkanName [0]   
} 
  else if (dayOfTheWeek ==0 && gender== "female") {
      bornday= "Monday"
      akanName= femaleAkanNames [0]
  }

  else if (dayOfTheWeek == 1 && gender == "male") {
    bornDay = "Tuesday";
    akanName = maleAkanNames[1];
} else if (dayOfTheWeek == 1 && gender == "female") {
    bornDay = "Tuesday";
    akanName = femaleAkanNames[1];


} else if (dayOfTheWeek == 2 && gender == "male") {
    bornDay = "Wednesday";
    akanName = maleAkanNames[2];
} else if (dayOfTheWeek == 2 && gender == "female") {
    bornDay = "Wednesday";
    akanName = femaleAkanNames[2];


} else if (dayOfTheWeek == 3 && gender == "male") {
    bornDay = "Thursday";
    akanName = maleAkanNames[3];
} else if (dayOfTheWeek == 3 && gender == "female") {
    bornDay = "Thursday";
    akanName = femaleAkanNames[3];


} else if (dayOfTheWeek == 4 && gender == "male") {
    bornDay = "Friday";
    akanName = maleAkanNames[4];
} else if (dayOfTheWeek == 4 && gender == "female") {
    bornDay = "Friday";
    akanName = femaleAkanNames[4];


} else if (dayOfTheWeek == 5 && gender == "male") {
    bornDay = "Saturday";
    akanName = maleAkanNames[5];
} else if (dayOfTheWeek == 5 && gender == "female") {
    bornDay = "Saturday";
    akanName = femaleAkanNames[5];


} else if (dayOfTheWeek == 6 && gender == "male") {
    bornDay = "Sunday";
    akanName = maleAkanNames[6];
} else if (dayOfTheWeek == 6 && gender == "female") {
    bornDay = "Sunday";
    akanName = femaleAkanNames[6];
}

let result = document.getElementById("results").innerHTML = `You were born on a ${bornDay} so your akan name is ${akanName}`
    document.getElementById("akanGenerator").reset();

}  

