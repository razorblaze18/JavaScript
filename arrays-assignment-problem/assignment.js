const numbers = [1,2,3,4,5,6];

const numsGreater5 = numbers.filter(val => val > 5);
console.log(numsGreater5);

const mappedNumbers = numbers.map(val => ({num: val}));
console.log(mappedNumbers);

const multiplication = numbers.reduce((curResult, curValue) => {
    return curResult*curValue;
}, 1);
console.log(multiplication);
//for multiplication always start with 1, if you start with 0 then the resultant will be zero.

