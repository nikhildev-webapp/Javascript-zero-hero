console.log('ES6+ Feature');

console.log('1.Template Literals: Template literals allow you to create string using backticka instead of regular quotes')
console.log('Key Feature: User variable to insert values directly into the string.');
console.log('Template literal example:')

const name = 'Alice';
const age = 20
const message = `Hello, ${name}! You are ${age} years old`;
console.log(message);

console.log('2.Optional chaining (?.)')
console.log('Optional Chainig example');

const User = {
    name: 'Nikhil',
    age: 20,
    isActive: true
}

console.log(User.age?.setting)

console.log('3.Default Parameter: Default Parameter allow you to set FallBack value for function arguments if they are missing or undefied when the function is called');
console.log('Default Parameter Example:');
function greet(name = 'Guest') {
    console.log(`Hello, ${name}`)
}

greet('Nikhil');
greet()