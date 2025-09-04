// Marksheet


let sname = 'Pratham Prajapati'
let maths = 90, english = 85, science = 71;
let total = maths + english + science;
let average = total / 3;
let grade;

if(average>=80)
{ 
    grade = 'A';
}else if(average>=70 && average <=80)
{
    grade = 'B';
}else if(average>=60 && average <=70)
{
    grade = 'C';
}else if(average>=50 && average <=60)
{
    grade = 'D';
}
else
{
    grade = 'F'
}

console.log('Marksheet');
console.log('-----------');
console.log(`Student name : ${sname}`);
console.log(`Maths mark is : ${maths}`);
console.log(`English mark is: ${english}`);
console.log(`Science mark is : ${science}`);
console.log(`Total Marks is: ${total}`);
console.log(`Percentage is: ${average} %`);
console.log(`Grade is: ${grade}`);