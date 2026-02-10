console.log('Exercise3: Level Three');
//question1
console.log('Double the number array using map()');
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Orignal Number array:', numberArray)
const dobulNumberArray = numberArray.map((i) => i * 2);
console.log('Number array after double the value', dobulNumberArray);

//question two
console.log('Filter user older than 18');
const Users = [
    {
        name: 'nikhil',
        age:17
    },
     {
        name: 'nikhil',
        age:18
    },
      {
        name: 'nikhil',
        age:16
    },
       {
        name: 'nikhil',
        age:19
    },
        {
        name: 'nikhil',
        age:20
    },
       {
        name: 'nikhil',
        age:15
    },
        {
        name: 'nikhil',
        age:21
    }
       
]
console.log('Users Befor the Filter', Users);
const adultUser = Users.filter(i => i.age >= 18);
console.log('Adult Users Array:', adultUser);

//question three
console.log('Sum the array using reduce():');
console.log('Number Array before Sum', numberArray);
const ArraySum = numberArray.reduce((i, s) => { return i + s; });
console.log('Sum of the array is:', ArraySum);

//Topic-Chaining + Map
console.log('Chainig is a common functional programming pattern used to tra')
