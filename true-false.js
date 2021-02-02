//23-2 Truthy and Falsy values
//False Value: 0/""/undefined/null/NaN/false
//Truthy Value: "0"/" "/[]
//Any Number +ve or -ve condition will be true
//Condition will be false when it is only = 0   
const age = 0; // May be +ve, -ve or 0
if (age){
    console.log('Condition is True');
}else{
    console.log('Condition is False');
}

//Any string " "/ "0"/"Name" will return true
//Empty string will return false 
const name = ''; // May be +ve, -ve or 0
if (name){
    console.log('Condition is True');
}else{
    console.log('Condition is False');
}

//If any variable is undefined, then it will return false 
let sex;
console.log(sex);
if (sex){
    console.log('Condition is True');
}else{
    console.log('Condition is False');
}

//null will return false //false will also return false
let occupation = null;
if (sex){
    console.log('Condition is True');
}else{
    console.log('Condition is False');
}

//NaN will return false 
let email = NaN;
if (email){
    console.log('Condition is True');
}else{
    console.log('Condition is False');
}