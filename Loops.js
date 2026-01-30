console.log('Loops in Javascript');
console.log(`Loops are handy, if you want to run the same code over and over again, each time with different value`);
// For Loop
console.log('For Loop-Best used when you know exactly how many times you want the code to run, such as iterating through an array or counting to a specific number.')
console.log('Print the 1 to 10 number Using for loop');
for (let i = 0; i <= 10;i++){
    console.log(i)
}
//while Loop
console.log('While loop- The while loop loops through a block of code as long as a specified condition is true.')
console.log('While Loops Output')
let index = 1;
while (index <=10) {
    console.log(index)
    index++
}

//do while loop
console.log('Do while Loop- The do while loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.')
console.log('Do while Loop Output')
let i = 1
do {
    console.log(i)
    i++
} while (i > 10) 