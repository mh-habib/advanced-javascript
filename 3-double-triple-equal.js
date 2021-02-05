//23-4 double equal (==) vs triple equal (===), implicit conversion
//Double equal only check value, But triple equal check value and type also
//True: 1==true/0==false/0 == "0" [Hut when we use === in this situations this will become false]
//Here for == the result will be true
const first = 2;
const second = '2';
if (first == second){
    console.log('condition is true')
}else{
    console.log('condition is false');
}
//Here for === result will be false
if (first === second){
    console.log('condition is true')
}else{
    console.log('condition is false');
}