//const means the assigned value cant be changed 
const accountId=1443
// there is two ways to declare variable in javascript var and let
//there was a problem in javascript it doesnt know scope, scope is basically written in {}
//let variable is mostly used in javascript
let accountEmail="jyoti@gmail.com"
var accountPassword="17378"
accountcity="Rajkot"//this is also possible
let accountState;//if we only declared the variable and dont assign the value to it then javascript will give value as undefined
/*
prefer not to use var
because of issue in block scope and functional scope
*/
//we are trying to change the value
//accountId=23;//this will give error
accountEmail="j@gmail.com"
accountPassword="5364"
accountcity="pura"
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountcity,accountState])
