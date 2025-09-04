// Calculate Interest

let P, R, N, interest;

P = 8000;
R = 7.5;
N = 3;

interest = P * R * N / 100;
let amount = P + interest;

console.log('Simple Interest');
console.log('---------------');
console.log(`Principle Amount : ${P}`);
console.log(`Rate of interest : ${R}`);
console.log(`Number of years : ${N}`);
console.log('---------------');
console.log(`Interest is : ${interest}`);
console.log(`Total Amount after interest: ${amount}`);