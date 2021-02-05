//23-10 break continue in a for loop
const numbers = [1, 2, 3, -4,  4, 5, -7, 6, 7];
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    if(numbers[i]>4){ //Break the loop when the condition found
        break;
    }
    
}
//continue:
for (let i = 0; i < numbers.length; i++) {
    
    if(numbers[i]<0){ //Skip the value when the condition found
        continue;
    }
    console.log(numbers[i]);
    
}