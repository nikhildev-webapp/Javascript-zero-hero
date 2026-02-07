console.log('Javascript Exercise-part two')
//question one
console.log('Write a function that prints the type of every value in an array.');
function TypeArray(arr) {
    return arr.forEach(element => {
        console.log(typeof element)
    });
}
TypeArray(['hell0', 23, true, [122], { nikhil: 'nikhil' }]);

//question two
console.log('Swap two variable without third varibale');
let x = 10;
let y = 20;
console.log(`Value of x: ${x} and y: ${y} before swap`);
[x, y] = [y, x];
console.log(`Value of x: ${x} and y: ${y} After swap`);

//question three
console.log('Grading Sytem using if/else and switch');
console.log('1-using if else');
let StudentMark = 90;
if (StudentMark < 33) {
    console.log('F better luck next time')
} else if (StudentMark<=50) {
    console.log('C you can improve')
} else if (StudentMark > 50) {
    console.log('B Better')
} else if (StudentMark > 80) {
    console.log('A outstanding')
} else {
    console.log('Enter valid number')
}

console.log('2-using switch case');
switch (StudentMark) {
    case 30:
        console.log('Fali better luck next time')
        break
    case 33:
        console.log('D improve yourself')
        break
    case  60:
        console.log('C improve')
        break
    case  80:
        console.log('B better')
        break
    case 90:
        console.log('A outstanding')
}

//question four
console.log('write a function that checks 1-Even/Odd, 2-Positive/Negative Number');
function checkOddEvent(num) {
    if(num%2===0) {
        console.log('Number is Even',num)
    } else {
        console.log('Number is Odd',num)
    }
}
checkOddEvent(2)

function checkPositiveNegative(num) {
    if (num < 0) {
        console.log('Number is negative',num)
    } else {
        console.log('Number is positive',num)
    }
}
checkPositiveNegative(-1)

//question five
console.log('Use a ternary operator to return "Adult" or "Minor".');
age=19
let status = age >= 18 ? "Adult" : "Minor";
console.log('You are', status);

//question six
console.log('Create a Clouser-based counter');
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count
    }
}
const myCounter = createCounter();
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())
