/* 
Const, let, var, undefine, console.table
Note: Prefer not to use var bcz of issue in block scope and functional scope
*/

const accountId = 1234
let accountEmail = "nitish@gmail.com"
var accountPassword = '3456'
city = "jaipur"
// city = "Patna" // don't use this not a good practise

let accountState

// accountId =3422 // value change is not allowed for const

accountEmail = "nishant@gmail.com"

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, city, accountState])

// console.table(["accountId", "accountEmail", "accountPassword"])