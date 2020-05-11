const numbers = [1,2,3,8,5,6];

const numsGreater5 = numbers.filter(val => val > 5);
console.log(numsGreater5);

const mappedNumbers = numbers.map(val => ({num: val}));
console.log(mappedNumbers);

const multiplication = numbers.reduce((curResult, curValue) => {
    return curResult*curValue;
}, 1);
console.log(multiplication);
//for multiplication always start with 1, if you start with 0 then the resultant will be zero.

function findMax(...nums){//merge the element of the incoming list, we call is REST operator
    let curMax = nums[0];
    for(const num of nums){
        if (num > curMax){
            curMax = num;
        }
    }
    return curMax;
}

console.log(findMax(...numbers));//this is SPREAD operator, coz we spread the elements of the array.

function findMinMax(...nums){//merge the element of the incoming list, we call is REST operator
    let curMax = nums[0];
    let curMin = nums[0];
    for(const num of nums){
        if (num > curMax){
            curMax = num;
        }
        if(num < curMin){
            curMin = num;
        }
    }
    return [curMin, curMax];
}

const [min, max] = findMinMax(...numbers);
console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);//It does not get printed, because SET does not allow duplicacy.
console.log(userIds);