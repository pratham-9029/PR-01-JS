// Product Bill

let pname, price, qty, dis, total, nettotal;

pname = 'Book';
price = 200;
qty = 3;

total = price * qty;
dis = total * 0.1;
nettotal = total - dis;

console.log('Invoice');
console.log('------------------')
console.log(`Product Name : ${pname}`);
console.log(`Product Price : ${price}`);
console.log(`Quantity: ${qty}`);
console.log('------------------');
console.log(`Total Price : ${total}`);
console.log(`Discount : ${dis}`);
console.log('------------------');
console.log(`Net Total : ${nettotal}`);

