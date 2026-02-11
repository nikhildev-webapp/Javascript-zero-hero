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
console.log('Chainig is a common functional programming pattern used to trasform and clean data in a single readable pipeline:');
console.log('chaining Example:');
const products = [
    {name:'laptop',price:1000,inStock:true},
    {name:'Phone',price:1000,inStock:false},
    {name:'Tablet',price:1000,inStock:true},
]

const saleItems = products.filter(p => p.inStock).map(p => `${p.name}:${p.price * 0.9}`);
console.log(saleItems);

//question four
console.log('Remove the Duplicate items from array');
const mixedArray = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8];
console.log('Mixed array befor remove duplicate item', mixedArray);
const uniqueArray = [...new Set(mixedArray)]
console.log('Array after remove duplicate item', uniqueArray);

//question five
console.log('Flatten a nested array');
const nestedArray = [1, [2, [3, [4]]]];
console.log('Nested array ', nestedArray);
const FlattenArray = nestedArray.flat(Infinity);
console.log("FlattenArray", FlattenArray)

//question six
console.log('Write the callback function run after 2 seconds');
setTimeout(() => {
   console.log('2 second pass') 
}, 2000);
