// class Person {
//     name = 'Aman';

//     constructor() {
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

Person.prototype = {
    printAge() {
        console.log(this.age);
    }
};

const person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__);