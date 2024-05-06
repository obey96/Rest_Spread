// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

// Refactor it to use the rest operator & an arrow function:

const filter = (...args) => args.filter(v => v  % 2 === 0)

const works = filter(22,33,66,55)
console.log(works);

// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

const findMin = (...args) => Math.min(...args)

console.log(findMin(1,4,12,-3)) // -3
console.log(findMin(1,-1)) // -1
console.log(findMin(3,1)) // 1

// mergeObjects

// Write a function called mergeObjects that accepts two objects and returns a new object which
//  contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1,...obj2})

console.log(mergeObjects({a:1, b:2}, {c:3, d:4})) // {a:1, b:2, c:3, d:4})

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a 
// variable number of arguments. The function should return a new array with the
// original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [...args, ...args.map(v => v *2)]

console.log(doubleAndReturnArgs([1,2,3],4,4)) // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2],10,4)) // [2, 20, 8]

// slice AND  dice

const items = [1,2,3,5]

const removeRandom = items => {

let idx = Math.floor(Math.random() * items.length);
return[...items.slice(0,idx), ...items.slice(idx + 1)];
}

console.log(removeRandom(items));

// extend

const array1 = [1,2,3,4]
const array2 = [10,5,6,9,7]
const extend = (array1, array2) => {
    return[...array1, ...array2];
}

console.log(extend(array1,array2));

// addKeyVal

const peopleName = {

name:'Lizz',
age: 25

}
const addKeyValue = (obj,key,val) => {

let newObj = {...obj}
newObj[key] = val;
return newObj;
}

const updatePeople = addKeyValue(peopleName,'job','engineer');
console.log(updatePeople);

// removeKey


const removeKey =(obj,key) => {

let newObj ={...obj}
delete newObj[key]
return newObj;
}

const updateObj = removeKey(peopleName, 'age');
console.log(updateObj);

// combine
const obj1 = { name: 'lizz', age: 25};
const obj2 = { job:'engineer'};


const combine = (obj1,obj2) => {

    return { ...obj1, ...obj2};
}
console.log(combine(obj1,obj2));

// update

const update =(obj,key,val) => {

let newObj = { ...obj}
newObj[key] = val;
return newObj;
}

const updateAge = update(peopleName, 'age',50);

console.log(updateAge);