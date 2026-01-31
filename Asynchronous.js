console.log('CallBack in javascript');
console.log(`A call back function passed an argument to another function.
This technique allows a function to call another function.` )

console.log('CallBack Example: Add two Number and display the result');
function displayResult(sum) {
    console.log('The total is:',sum)
}

function addNumber(num1, num2, callBack) {
    let total = num1 + num2;
    callBack(total)
}

addNumber(5, 10, displayResult);

console.log('Promise in javascript');
console.log('Promise is in javascript object that represents thd eventual completion or failure of an asynchronous task.')
console.log(`The 3 state of Promise
1.Pending
2.Fulfilled
3.Rejected`)

console.log('Promise Example: Imagin you are writing code to order pizza.')
//create the promise
const orderPizza = new Promise((res, rej) => {
    let isShopOpen = true;
    console.log('Placing order...(Pending)');
    
    setTimeout(() => {
        if (isShopOpen) {
            res('Your pizza is here')
        } else {
            rej('Soory, the shop is closed')
        }
    }, 3000)
});
//consume the promise
orderPizza
    .then((message) => {
        console.log('Success:', message)
    })
    .catch((error) => {
        console.log('Error:', error)
    })
    .finally(() => {
        console.log('Order process finished')
    })

console.log(`Async/Await, Error handling in javascript(try/catch) in javascript`);
console.log(`Async: Used to declare a function as asynchronous. An 'async' function always return a promise.
Await: can only be used inside an 'async' function. its tell javascript to pause execution untill promise is settled`)

console.log(`try: Contains the code you want to run
catch: automatically runs if any error occurs inside the try block`)

console.log('Async/Await, Error Handling(try/catch) Example: Fetch the data from user api')

async function getUserData() {
    try {
        console.log('Fetching data...')
        const reponse = await fetch('https://jsonplaceholder.typicode.com/users/')
        if (!reponse.ok) {
            throw new Error('User Not found')
        }
        const user = await reponse.json()
        console.log('User:',user)
    } catch (error) {
        console.log('OOps! something went wrong:',error.message)
    } finally {
        console.log('Process complete')
    }
}

getUserData()