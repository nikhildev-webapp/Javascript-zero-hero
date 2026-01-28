console.log('Conditional statment in javascript');
console.log('If/Else, switch case');

console.log('IF/Else Example:Check the user age is greater than 18 or not')
let age = 18;
if (age >= 18) {
    console.log('User is Adult',age)
} else {
    console.log('User is minor',age)
}

console.log('Switch case Example:Check today day and log the day value')
let day = 'sunday';
switch (day) {
    case 'sunday':
        console.log('Today is ',day)
        break
    case 'monday':
        console.log('Today is ', day)
        break
    default:
        console.log('Not match to any case')
}