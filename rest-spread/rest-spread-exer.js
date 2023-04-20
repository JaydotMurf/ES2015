// * Rest / Spread Operator Exercises

// TODO Given this function:

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

// TODO Refactor it to use the rest operator & an arrow function:

const filteredOdds = (...numbers) =>
  numbers.filter((number) => {
    return number % 2 === 0;
  });

// * findMin
// TODO Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
// ! Make sure to do this using the rest and spread operator.

function findMin(...numbers) {
  return numbers.reduce((lowNumber, number) => {
    if (lowNumber > number) {
      lowNumber = number;
    }
    return lowNumber;
  });
}

// * mergeObjects
// TODO Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects(...objects) {
  return objects.reduce((mergeredObj, currentObj) => {
    Object.assign(mergeredObj, currentObj);
    return mergeredObj;
  }, {});
}

// * doubleAndReturnArgs
// TODO Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(arr, ...numbers) {
  const mergedArgs = [...arr];
  numbers.forEach((num) => {
    mergedArgs.push(num);
  });

  const doubles = mergedArgs.map((num) => {
    return num * 2;
  });

  return doubles;
}

// * Slice and Dice!
// TODO For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// ! Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (...items) => {
  const randomNumber = Math.floor(Math.random() * [...items].length);
  return [...items].filter((num, index) => {
    if (index !== randomNumber) return num;
  });
};

/** Return a new array with every item in array1 and array2. */

const extendedArr = (array1, array2) => {
  return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  const returnObject = {};
  Object.assign(returnObject, obj);

  returnObject[key] = val;
  return returnObject;
}

/** Combine two objects and return a new object. */

function combine(...objs) {
  const combinedObject = {};
  objs.forEach((object) => {
    for (const [key, value] of Object.entries(object)) {
      combinedObject[key] = value;
    }
  });
  return combinedObject;
}

/** Return a new object with a modified key and value. */

const updateObject = (obj, key, val) => {
  obj[key] = val;
  return obj;
};
