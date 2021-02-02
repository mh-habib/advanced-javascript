//23-3 Null Vs Undefined, different ways you will get undefined
//1//Any variable that is not defined will return undefined output 
let pakhi;
console.log(pakhi);

//2//Any function that requires return value but if we do not return anything then it will show undefined output
function add(num1, num2){
    const sum = num1 + num2;
}
const result = add(5, 10);
console.log(result);

//3//If we do not pass any required parameter then it would be undefined
function addOn(num3, num4){
    console.log(num4);
}
const result2 = addOn(5);
console.log(result2);

//4//If there is no property inside the any object but we called then it will return undefined
const student = {name:'Sakib', roll: 12};
console.log(student.name);
console.log(student.gf);

//5//If we set any variable as undefined 
const fun = undefined;
console.log(fun);

//6//If we call undefined positions
let ages = [12, 15, 21, 16];
console.log(ages[12]);

//null needs to be set explicitly by programmer 