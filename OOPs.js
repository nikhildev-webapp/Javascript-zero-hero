console.log('OOPs in Javascript:');
console.log('Object-oriented programming(oop) in javascript is a styled of programming that uses ibject to represent real-world entities.');
console.log('Its groups related data(properties) and action methods into single, reusable unit classes.');

//classes and objects
console.log('Classes and Objects: class is a blue print while object is a specific instance created from theat blueprint.');
console.log('Class and Object Example: create a car object using class:');
class Car{
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    drive() {
        console.log(`${this.brand} is moving at ${this.speed} km/h`);
    }
}

const myCar = new Car('Tesla', 120);
myCar.drive();

//The four pillars of oops
//1.Inheritance
console.log('Four Pillar of OOps:');
console.log('1.Inheritance: allows on class to derive properties and methods from another, promoting code resue(Don,t repeat yourself)');
console.log('Inheritance Example:');
//parent class
class Vehicle{
    start() {
        console.log('Vehicle starting..')
    }
}

//child class inheritance from vehicle;
class Bike extends Vehicle{
    wheelie() {
        console.log('Doing Wheelie');
    }
}

const myBike = new Bike();
myBike.start();
myBike.wheelie();

//2.Encapsulation
console.log('2.Encapsulation: Bundles data and method together and restricts direct access to internal details to prevent bugs. in modern javascript, use the # prefix for private fields');
console.log('Encapsulation example:')
class BankAccount{
    #balance = 0;
    deposite(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. new Blance:${this.#balance}`);
    }
    getBalance() {
        return this.#balance
    }
}

const account = new BankAccount();
account.deposite(20000);
console.log(account.getBalance());

//3.Polymorphism
console.log('3.Polymorphism: The ability of different classes to respond to the same method call in their own unique way');
console.log('Polymorphism Example:');
class Animal{
    makeSound() {
        console.log('Genric Sound')
    }
}

class Dog extends Animal{
    makeSound() {
        console.log('woof');
    }
}

class Cat extends Animal{
    makeSound() {
        console.log('Meow')
    }
}

const animal = [new Dog(), new Cat()];
animal.forEach(a => a.makeSound());

//.4Abstraction
console.log('4.Abstraction: Hiding Complex implemetation details and showing only the essential feature to the user.This reduce complexitiy and increase usability');
console.log('Abstraction Example:')
class CoffeMachine{
    #boilWater() {
        console.log('Boiling Water...')
    }
    #addCoffe() {
        console.log('Add coffer in it')
    }

    makeCoffer() {
        this.#boilWater();
        this.#addCoffe();
        console.log('Coffe is ready');
    }
}

const machine = new CoffeMachine();
machine.makeCoffer();

//*Bonus-Implemeting these concepts using prototypes intsted of Classes
console.log('Example: Bonus- Implementing these concept using prototypes instead Classes');

function Cars(brand, speed) {
    this.brand = brand;
    this.speed = speed;
}

Cars.prototype.drive = function () {
    console.log(`${this.brand} is moving at ${this.speed} km/h`);
}
const myCars = new Cars('Telsa', 120);
myCars.drive()