function stopWatch(){
    let count = 0;
    return function () {
        count ++; //External variable as reference 
        return count;
    } 
}

const clock1 = stopWatch();
//console.log(clock1); //It's actually return a function
console.log(clock1()); //return function is called here again in this way  
console.log(clock1()); 
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());

//Here same function is called in two times and they make their own environment
//And execute by maintaining the close environment one from another 
//this close scope is called closer 

console.log(clock1());