//PURE FUNCTION
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 5));
console.log(add(2, 5));

//IMPURE FUNCTION
function addRandom(num1) {
    return num1 + Math.random();
}
console.log(addRandom(3));

//FUNCTION WITH SIDE EFFECTS
let previousResult = 0;

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;//This is the side effects line which change a variable that is defined outside of the function
    return sum;
}

console.log(addMoreNumbers(3, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
    h.push('NEW HOBBY');
    console.log(h);
}

printHobbies(hobbies);

//FACTORY FUNCTION: function which produces another function
function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }
    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateincomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

//EVERY FUNCTION IN JS IS CLOSURE.

//CLOSURE
let userName = 'Aman';

function greetUser() {
    let name = 'Anna';//This name is called because here, name is declared inside the function.
    console.log('Hi ' + name);
}

let name = 'Max';
userName = 'Mudit';

greetUser();

//RECURSION

// function powerOf(x, n){
//     let result = 1;

//     for(i=0; i< n; i++){
//         result *=x;
//     }
//     return result;
// }

function powerOf(x, n) {
    // if(n ===1){
    //     return x;
    // }
    // return x * powerOf(x, n - 1);
    //with Ternery Operation
    return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

const myself = {
    name: 'Aman',
    friends: [
        {
            name: 'Max',
            friends: [
                {
                    name: 'Chris'
                }
            ]
        },
        {
            name: 'Mudit'
        }
    ]
};

function getFriendName(person) {
    const collectedNames = [];

    if(!person.friends){
        return [];
    }

    for (const friend of person.friends) {
        collectedNames.push(friend.name);
        collectedNames.push(...getFriendName(friend));
    }
    return collectedNames;
}

console.log(getFriendName(myself));