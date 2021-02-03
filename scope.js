let bonus =20; //Global access able from inside {} and outside also 
function sum(first, second){
    let result = first + second; //Result's scope is only inside the function {}
    return result;
}
const output = sum(3, 5);
console.log(output);

//If we declare any variable inside a condition by var then it will be whisted to mother function and access able  

//what is whisting?
//What is block scop?
//What is global scop?
//Helpful: https://www.thatjsdude.com/jsConcepts/concepts/scope.html 