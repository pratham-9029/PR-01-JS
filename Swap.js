// Swap value 

let a = 20;
let b = 10;

console.log('-----------------------');
console.log('Before Swap value is:');
console.log('-----------------------');

console.log(`a is: ${a}`);
console.log(`b is: ${b}`);

a = a + b; 
b = a - b; 
a = a - b; 

console.log('----------------------');
console.log('After Swap value is:');
console.log('----------------------');

console.log(`a is: ${a}`);
console.log(`b is: ${b}`);