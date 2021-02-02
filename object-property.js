//23-6 Apply map, filter, find on an array of objects
const students = [
    {id: 1, name: 'Sakib Al Hasan'},
    {id: 2, name: 'Tamim Iqbal'},
    {id: 3, name: 'Abdur Razzak'},
    {id: 4, name: 'Habibul Bashar'},
    {id: 5, name: 'Rokibul Hasan'}
];
//Array mapping from multiple objects  
const names = students.map(s => s.name); //s can replace by any characters
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);

//Filter
const bigger = students.filter(s => s.id>3
);
console.log(bigger);

//Find
const biggerOne = students.find(s => s.id>3
);
console.log(biggerOne);