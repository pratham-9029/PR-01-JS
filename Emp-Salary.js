// Employee Salary Slip

let Ename = 'Pratham Prajapati';
let basicsalary = 20000;
let hra = basicsalary * 0.1;
let da = basicsalary * 0.08;
let ma = basicsalary * 0.05;
let ta = basicsalary * 0.08;
let pf = basicsalary * 0.12;
let tds = basicsalary * 0.05;
let pt = 200;

let gross = basicsalary + hra + da + ma + ta;
let deduction = pt + pf + tds;
let netsalary = gross - deduction;

console.log('Salary Slip');
console.log('------------------');
console.log(`Employee Name: ${Ename}`);
console.log(`Basic Salary: ${basicsalary}`);
console.log(`HRA: ${hra}`);
console.log(`DA: ${da}`);
console.log(`MA: ${ma}`);
console.log(`TA: ${ta}`);
console.log(`PF: ${pf}`);
console.log(`TDS: ${tds}`);
console.log(`PT: ${pt}`);
console.log('-------------------');
console.log(`Gross Salary is: ${gross}`);
console.log(`Deduction is: ${deduction}`);
console.log('-------------------');
console.log(`Net Salary is: ${netsalary}`);
