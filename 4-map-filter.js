//23-5 map, filter, find, smart way to run for loop
//1//General way using for loop:
const numbers = [2, 4, 6, 3, 5, 7];
const results = [];
for (let i = 0; i < numbers.length; i++) {
    const e = numbers[i];
    const result = e * e;
    results.push(result);
}
console.log(results);

//2//Using classic map
const result2 = numbers.map(function(element, index, array){
    console.log(element, index, array); //To see which argument return do what  
    return element * element;
});
console.log(result2);

//3//Using arrow function
const result3 = numbers.map(element => element * element);
console.log(result3);

//4//Using arrow function in short way
const result4 = numbers.map(x => x * x);
console.log(result4);

//Filter: Only give the array of value that match the conditions
//Ff do not find anything then return empty array.  
const result5 = numbers.filter(x => x > 5);
console.log(result5);

//Find: Give First element that match with the condition
const isThere = numbers.find(x => x > 5);
console.log(isThere);

//HW: Reduce
