const score = 400
console.log(score);
console.log(score.toFixed(3)); // o/p- 400.000

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // use in ecom_website
console.log(typeof balance);

const otherNumber =23.8966
console.log(otherNumber.toPrecision(3)); // o/p- 23.9

const otherNumber1 =123.8966
console.log(otherNumber1.toPrecision(3)); // o/p- 124

const hundreds = 100000
console.log(hundreds.toLocaleString()); //USA type
console.log(hundreds.toLocaleString('en-IN')); // Indisn type

//+++++++++++++++++++++++++++++ Maths +++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // o/p= 4
console.log(Math.round(4.2)); // o/p= 4
console.log(Math.ceil(4.6)); // o/p= 5
console.log(Math.floor(4.9)); // o/p= 4
console.log(Math.sqrt(4)); // o/p= 2
console.log(Math.min(5, 3, 2, 6));
console.log(Math.random()); // Value of math.random lies b/w 0-1 always
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 30
console.log(Math.floor(Math.random() *  (max - min + 1)) + min)