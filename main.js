//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
function favoriteFoods(person) {
    for (const key in person) {
        console.log(`${key}:`);
        
        if (Array.isArray(person[key])) {
            person[key].forEach(item => {
                console.log(` ${item}`);
            })
        } else {
            console.log(` ${person[key]}`);
        }
    }
}

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
favoriteFoods(person3)
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
const Person = function(name, age){
    this.name = name;
    this.age = age;
    this.printInfo = () =>{
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    };
    this.addAge = (years) =>{
        this.age += years;
    };

}
let person1 = new Person('Morgan', 26);
let person2 = new Person('grogu', 50)

person2.addAge(3);

console.log(person1.printInfo())
console.log(person2.printInfo())



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringLength =(string) => {
    return new Promise((resolve, reject) =>{
        if (string.length > 10){
            resolve(string);
        }else {
            reject(string);
        }
    })
}
 const string1 = 'Juxtaposition'
stringLength(string1)
    .then((result) => {
        console.log(`Wow you are so cool you know a big word! ${result}`)
    })
    .catch((small) => {
        console.log(`lol you dont know a big word ${small}`)
    })






// ===========CODEWARS =================//

