class AgedPerson{
    printAge(){
        console.log(this.age);
    }
}

class Person {
    name = 'Aman';

    constructor() {
        // super(); //Use this keyword only! when you want to extend the class.
        this.age = 30;
        // this.greet = function () {...}
    }

    // greet = () => {
    //         console.log(
    //             'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    //             );
    //     };

     greet() {
         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
     }
}

// function Person() {//This is a constructor function.
//     this. age = 30;
//     this.name = 'Aman';
// }

// Person.prototype.greet =function() {
//         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
//     };


// Person.describe = function() {//This will not be adding to the constructor functions. Instead, it interacts with the function object which is created.
//     console.log('Creating persons...');
// }

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// };

// Person.prototype.printAge = function() {
//     console.log(this.age);
// };

// console.dir(Person);

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person);
// console.log(person.toString());
// const person2 = new person.__proto__.constructor();
// console.log(person2);
// console.dir(Object.prototype);//Object here is a constructor function with a bunch of built-in properties or methods you can call. In the class world, you can also say this static properties or static methods.
//Fall back object of every object is Object.prototype. for eg: console.dir(Object.prototype);

// const person = new Person();
// const person2 = new Person();
// person.greet();
// console.log(person);//It returns true! because it's creating exact same object.

// const button = document.getElementById('btn');
// button.addEventListener('click', person.greet.bind(person));

const course = {
    title: 'JavaScript - The Complete Guide',
    rating: 5
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
    ...Object.getPrototypeOf(course),
    printRating: function() {
        console.log(`${this.rating}/5`);
    }
});

const student = Object.create({printProgress: function() {
    console.log(this.progress);
}
},{
    name:{
        configurable:true,
        enumerable:true,
        value:'Aman',
        writable: true
    }
});//This will also create a new object! Just like object literal notation but with a twist. It will create an empty object. The object you pass here as parameter will be set as prototype for this intial object.

// student.name = 'Aman';
Object.defineProperty(student, 'progress',{
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
})

student.printProgress();

console.log(student);

course.printRating();