// Simple comparision operators:
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 != 1);
console.log("2" === 1);
console.log(2 == 1);

// problem come in comparision when we compare different datatype:
console.log("2" > 1); //true

/* The reason is that an equality check == and comparisons >, <, >=, <= work differently. Comparision convert 
null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false. Generally we avoid 
comparision of null and undefined 
*/

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

// === strict check it means it also check the datatype
console.log("2" === 2); //false
