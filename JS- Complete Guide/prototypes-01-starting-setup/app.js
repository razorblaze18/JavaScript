// class AgedPerson{
//     printAge(){
//         console.log(this.age);
//     }
// }

// class Person extends AgedPerson{
//     name = 'Aman';

//     constructor() {
//         super();
//         this.age = 30;
//     }

//     greet() {
//         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
//     }
// }

function Person() {
    this. age = 30;
    this.name = 'Aman';
    this.greet = function() {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
    };
}

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// };

Person.prototype.printAge = function() {
    console.log(this.age);
};

const person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__);
const person2 = new person.__proto__.constructor();
console.log(person2);