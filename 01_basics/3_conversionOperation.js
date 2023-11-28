let score = 33
// two ways to know type in js
 console.log(typeof score);
 console.log(typeof(score)); //as a method

 /*
 Type conversion

 .String to Number:
    "33" => 33
    "33abc" => NaN (value is NaN but type is number)
    "null" => NaN 
 
 .null to Number:
    null => 0

 .undefined to Number:
    undefined => NaN

.boolean to Number:
    true => 1
    false => 0

.Number to boolean:
    1 => true; 0=> false

.String to boolean:
    "" => false; "Nitish" => true

.Number to string:
    33 => 33
 */

    
//String to Number:

let valueInStr = "33abc"
let valueInNum = Number(valueInStr)
console.log(typeof(valueInNum))
console.log(valueInNum)

//null to Number

let valueInNull = null
let valueInNum2 = Number(valueInNull)
console.log(typeof(valueInNum2))
console.log(valueInNum2)

// undefined to Number:

let valueInUn = undefined
let valueInNum3 = Number(valueInUn)
console.log(typeof(valueInNum3))
console.log(valueInNum3)

// boolean to Number:

let valueInBool = true
let valueInNum4 = Number(valueInBool)
console.log(typeof(valueInNum4))
console.log(valueInNum4)


let valueInBool1 = false
let valueInNum4a = Number(valueInBool1)
console.log(typeof(valueInNum4a))
console.log(valueInNum4a)


// Number to boolean:

let valueInNum1 = 1
let valueInBool2 = Boolean(valueInNum1)
console.log(typeof( valueInBool2))
console.log(valueInBool2)

// String to boolean:


let valueInStr1 = "Nitish"
let valueInBool3 = Boolean(valueInStr1)
console.log(typeof( valueInBool3))
console.log(valueInBool3)


let valueInStr2 = ""
let valueInBool4 = Boolean(valueInStr2)
console.log(typeof( valueInBool4))
console.log(valueInBool4)

// Number to string:

let num = 123
let str = String(num)
console.log(typeof(str))
console.log(str)

// ************************* Operations *************************************

let value = 3
let negvalue = -value
console.log(negvalue)

console.log(2+2) //add
console.log(2-2) //sub
console.log(2*2) //multi
console.log(2**3) //power
console.log(2/3) //div
console.log(2%2) //modulus

// concatinations; Read more on js docs under Abstract Operations:

let string1 = "hello"
let string2 = " Nitish"
let newString = string1 + string2
console.log(newString)

// string + number

console.log("1" + 2)
console.log("1" + 2 + 2)
console.log("1" + 2 + "4")
console.log("1" + "2" + 5)

// number + string

console.log(1+ "2")
console.log(1+ "2" + "1")
console.log(1+ "2"+ 1)
console.log(1+ 2 + "5")
console.log((1+7) * 4 / 7)

console.log(true)
console.log(+true)
// console.log(true+)
console.log(+"")
console.log(-"")

// Postfix operation
let a = 3
const y = a++
console.log(a, y)
console.log(`a:${a} , y:${y}`);

// Prefix operation
let b = 3
const z = ++b
console.log(b, z)
console.log(`b:${b} , z:${z}`);
// there is one concept of prefix and postfix in js read from mdm
