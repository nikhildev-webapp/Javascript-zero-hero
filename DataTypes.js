console.log('Javscript data types');
console.log(`Types of data types in javascript:
    1.string-text of character
    2.Number-number represent mathematical value
    3.Bigint-A number representing a large integer
    4.Boolean-A data type representing true or false
    5.Object-A collection of key-value pairs of data
    6.Undefined-A primitive variable with no assigned value
    7.Null-A primitive value representing object absence
    8.Symbol-A unique and primitive identifier
    `);
   
console.log('String Example:')
let color = 'Yellow';
console.log(color);

console.log('Number Example:');
let length = 16;
console.log(length);

console.log('BigInt Example:')
let x = BigInt(1234567890121212121212);
console.log(x)

console.log("Boolean Example:");
let BooleanValue = true;
console.log(BooleanValue);

console.log('Object Example:');
let person = {
    name: 'Nikhil',
    age: 20,
}
console.log(person)

console.log('Array Example:')
let fruit = ['apple', 'mango', 'guvava', 'pineapple']
console.log(fruit)

console.log('Date object Example:');
const date = new Date('27-1-2026');
console.log(date);

console.log('Undefined and Null Example:');
let undefinedValue;
console.log(undefinedValue);
let nullValue = null;
console.log(nullValue)