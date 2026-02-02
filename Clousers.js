console.log('Clousers in Javascript');
console.log(`Clouser is a function that remember and can access variable from its outer scope even after that outer function has executin.`);

console.log('Clouser Example:The Private Counter:');;

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const myCounter = createCounter();
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())