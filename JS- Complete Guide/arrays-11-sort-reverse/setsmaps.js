
//SETS
// const ids = new Set(['hi', 'from', 'set!']);
// ids.add(1);
// if(ids.has('hi')){
// ids.delete('hi');
// };

// for(const entry of ids.entries()){
//     console.log(entry);
// }


//MAPS
// const person1 = {name: 'Aman'};
// const person2 = {name: 'Max'};

// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

// personData.set(person2, [{date: 'Two weeks ago', price: 100}]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()){
//     console.log(key, value);
// };

// for(const key of personData.keys()){
//     console.log(key);
// };

// for(const value of personData.values()){
//     console.log(value);
// };

// console.log(personData.size);

// WEAKSET................ store data in a set and eventually release some of that data and you want to make sure that this thing can be garbage collected.
let person = {name: 'AMAN'};
const persons = new WeakSet();
persons.add(person);

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info');

person = null;
console.log(personData);