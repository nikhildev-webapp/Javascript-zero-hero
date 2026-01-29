console.log('Javascript function');
console.log(`Functions are reusable code block desgined to perform a particular task`);
console.log('why use Functions-Reuse code, organize code into smaller parts, mark code easier to read and maintain');

console.log('Functions are two types: 1-prebuilt function, 2-Arrow function');

console.log('1-Prebuilt Function example: create a function say hello to user')
function sayHello() {
    return console.log('Hello user')
}

sayHello();

console.log('2-Arrow function Example: built a function add two number');
const add = () => {
    let a = 10;
    let b = 20;
    console.log('Sum of two number is', a+b)
}

add();