//23-9 Array slice, splice, array join elements
const numbers = [1, 2, 3, 4, 5, 6, 7];
const part = numbers.slice(2, 5); //Second index to before the 5th index
console.log(part);
console.log(numbers);//Do not change the original one

//splice() function is used to remove element from the original one
const partRemoved = numbers.splice(2, 5, 77, 66, 55);//From 2nd position to next 5 elements are removed from original one & also can inject 
console.log(partRemoved);
console.log(numbers);

//Array Joining to create string
const together1 = numbers.join(""); //Just remove all , and space
const together2 = numbers.join(" "); //Just joined by space
const together3 = numbers.join(" and "); //Just joined by and
console.log(together1);
console.log(together2);
console.log(together3);
