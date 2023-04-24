// Maps and Sets

// Data structures in JavaScript
// * Data structures are formats for efficiently collecting or storing data
// * So far we’ve seen Arrays and Objects
// * ES2015 introduces two new ones, Maps and Sets

// Maps
// * Also called “hash maps” in other languages
// * Until ES2015 - objects were replacements for maps
// * Similar to objects, except the keys can be ANY data type!
// * Created using the new keyword

// Maps and Sets Exercise
// TODO: Quick Question #1

// ? What does the following code return?
const example1 = new Set([1, 1, 2, 2, 3, 4]);
console.log(example1);
// !This will return the SET {1,2,3,4}

// TODO: Quick Question #2

// ? What does the following code return?
[...new Set('referee')].join('');
// !This will return the string 'ref'

// TODO: Quick Questions #3

// ? What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
console.log(m);
// !Map {[1,2,3] => true, [1,2,3] => false}

// hasDuplicate
// TODO: Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// function hasDuplicate(arr) {
//   const numberSet = new Set(arr);
//   console.log(numberSet.size);
//   if (numberSet.size !== arr.length) return true;
//   return false;
// }

// ! refactored
function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(hasDuplicate([1, 3, 2, 1]));
console.log(hasDuplicate([1, 5, -1, 4]));

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// function vowelCount(word) {
//   const vowelsOnly = word.match(/[aeiou]/gi);
//   const wordMap = new Map();

//   vowelsOnly.forEach((vowel) => {
//     wordMap.set(vowel, (wordMap.get(vowel) || 0) + 1);
//   });

//   return wordMap;
// }

// ! refactored
function vowelCount(word) {
  //     The replace method was replaced with the match method. This is because match will return
  //   an array of matches, which is what we need to loop through in order to count the vowels.

  const vowelsOnly = word.match(/[aeiou]/gi);
  const wordMap = new Map();

  //   The reduce method was replaced with a forEach loop.This is because
  // forEach is more concise and easier to read.
  vowelsOnly.forEach((vowel) => {
    // Object.entries method was removed. This is because
    // Map objects can be directly constructed from an array
    // of key-value pairs, which is what match returns.
    wordMap.set(vowel, (wordMap.get(vowel) || 0) + 1);
  });

  return wordMap;
}

console.log(vowelCount('awesome'));
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
