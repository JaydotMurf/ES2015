// * Object Enhancements Exercise
//  TODO: In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.

// * Same keys and values
function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

// ! Same keys and values ES2015
/* Write an ES2015 Version */
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// console.log(createInstructor('Jerraill', 'Murphy'));

// * Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: 'Colt',
};

instructor[favoriteNumber] = 'That is my favorite!';

// ! Computed Property Names ES2015
/* Write an ES2015 Version */

let firstName = 'Jerraill';

let person = {
  [firstName]: "That's me!",
};

console.log(person.Jerraill);

// * createAnimal function
// TODO: Write a function which generates an animal object. The function should accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.

// const d = createAnimal('dog', 'bark', 'Woooof!');
// {species: "dog", bark: ƒ}
// d.bark(); //"Woooof!"

// const s = createAnimal('sheep', 'bleet', 'BAAAAaaaa');
// {species: "sheep", bleet: ƒ}
// s.bleet(); //"BAAAAaaaa"

function createAnimal(species, verb, noise) {
  return {
    // ! Object Key Shorthand
    // * When the keys are the same name as the variable values, no need to repeat
    species,
    // ! Object Method & Computed Property Name Shorthand
    // * Write this way when a key in an object represents a function
    // * Create an object with a key that JavaScript can compute at definition
    [verb]() {
      return noise;
    },
  };
}

const d = createAnimal('dog', 'bark', 'Woooof!');
console.log(d.bark());

const s = createAnimal('sheep', 'bleet', 'BAAAAaaaa');
console.log(s.bleet());

// Current usage
// These new shorthand methods are everywhere!
// Object shorthand and methods allow for writing less code
// Computed property names are everywhere in modern web frameworks.
