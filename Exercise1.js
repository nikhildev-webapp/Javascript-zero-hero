console.log('Javascript Exercises');

console.log('Exercise1:write a function that check uf a user is eligible to apply job');
function checkEligibleJob() {
    let age = 15;
    if (age >=18) {
        console.log('You are eligible to apply job');
    } else {
        console.log('You are not eligible to apply job')
    }
}

checkEligibleJob()

console.log('Exercise2:Create a function that return the square of number useing arrow function');
const square = (n) => {
    return n * n;
}
console.log(square(2));

console.log('Exercise3: Given Array of numbers find even numbers, double the value, calauclate the total sum');
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Given Number Array', numberArray);
//Even number filter
let evenNumber = numberArray.filter(i => i % 2 === 0);
console.log('Even number from array', evenNumber);
//Double the array value
let doubleValue = numberArray.map((i) => {
    return i * 2;
})
console.log('Double Vlaue of numberarray', doubleValue);
//Sum the Value of array
let sumArray = numberArray.reduce((x, y) => {
    return x + y;
})
console.log('Sum of the Array', sumArray);
//object 
console.log('Exercise4: Create a object with name, role, skill, and log the value');
const user = {
    name: 'Nikhil',
    role: 'Web Developer',
    skills:'Html, Css, Javascript, TypeScript'
}
console.log('User object', user);
user.summary = 'I am passionate web developer with proficient in Javascript and modern javaascript framework';
console.log(user);