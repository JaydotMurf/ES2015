const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

// * Old way
// const a = alphabet[0]
// const b = alphabet[1]

// * New Way
const [a, b, c, ...rest] = alphabet;

console.log(a);
console.log(b);
console.log(c);
// console.log(rest);
for (let letter of rest) {
  console.log(letter);
}

const alphaNums = [...alphabet, ...numbers];
console.log(alphaNums);

// * Use array destructing when return more than one result from a func
function sumAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}

const [sum, product, division = 'No Division'] = sumAndMultiply(5, 6);

console.log(sum);
console.log(product);
console.log(division.toFixed(2));
