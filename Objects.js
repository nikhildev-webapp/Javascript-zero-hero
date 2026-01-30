console.log('Objects in Javascript');
console.log(`An Object is a variable that can hold many variables.
Objects are collections of key-value pairs, where each key (known as property names) has a value.
Objects can describe anything like houses, cars, people, animals, or any other subjects.`)

console.log('Object Example-create a car object with name,color,model');
const Car = {
    name: 'BMW',
    color: 'Black',
    Model:'BMWX-01'
}

console.log('Car Object', Car)
console.log('Add the price in Car object using object method');
Car.price = '1Cr';
console.log('Car object after adding Price', Car)

console.log('Creating a Person object using `NEW` Keyword')
const Person = new Object({
    name: 'Nikhil',
    age: 20,
    Education: 'Graduate',
    Profession:'Software Developer'
})

console.log('Person Object using New KeyWord:', Person)
console.log('Delete the Education from Person object using the `Delete properties` and add the skills');
delete Person.Education;
console.log('Person object after delete education', Person);
Person.skill = ['Html', 'Css', 'Javascript', 'TypeScript', 'React.js', 'React Native'];
console.log('Person object after adding skills:',Person)

console.log('Create A Nested Objects');
const PersonsalData = {
    Name: 'Nikhil',
    Age: 20,
    Hobbies: {
        hobby1: 'Listening Music',
        hobby2:'Watching Movies'
    },
    FavMovies: {
        Fantasy: 'Harry Potter',
        ScienceFiction:"Spider Man"
    }
}
console.log('Nested Object:', PersonsalData)
console.log('Access Hobbies from Nested object')
console.log(PersonsalData.Hobbies)
console.log('Access Fanatsy movie from nested object');
console.log(PersonsalData.FavMovies.Fantasy)

console.log('Create a Object and destructuring their value');
const Movies = {
    ActionMovie: 'Jhon Wick',
    RomanceMovie: 'Hi Nana',
    SciFiMovie: 'Spider Man',
}
console.log('From the Movies object destruturing');
let { ActionMovie} = Movies;
console.log()
