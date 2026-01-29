console.log('Arrays in JavaScript');
console.log('An Array is an object type designed for storing data collections.');

console.log('Array Example:create a fruit array and log them');
const fruits = ['Apple', 'Mango', 'Guvava', 'Cherry', 'PineApple'];
console.log(fruits)

console.log('Create a Array of vegetable using New keyword');
const vegetable = new Array('spinach', 'cucmber', 'carrot', 'brinjal');
console.log('Vegetable array created using New keyword:', vegetable)
console.log('Accessing the Array element using index value:', vegetable[2])

console.log('Create a array and convert into string');
const movies = ['harry potter', 'marvel', 'spidermen', 'spiderwick'];
console.log('Convert array to string:', movies.toString());

console.log('Array Methods: 1.map, 2.filter, 3.reduce,');
console.log('Example1-Map method in javascript');
const todos = ['write the email', 'Watch clip', 'stranger things', 'instgram scrolling'];
todos.map((i) => {
    console.log(' Today Todo',i)
})

console.log('Example 2- filter method- filter even number from number array');
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Mixed number Array', numberArray);
const EvenArray = numberArray.filter(i => i % 2 == 0)
console.log('Event number array', EvenArray)

console.log('Example3-Reduce method-add the sum of number array');
const sumArray = numberArray.reduce((i, p) => i + p);
console.log('Sum of array is:',sumArray)

