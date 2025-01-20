// const name="jyoti"
// const repoCount=26
// console.log(name+repoCount+"value"); this syntax is outdated
//string interpolation
// console.log(`hello my name is ${name} and my repoCunt is ${repoCount}`);
//ways to declared string
 const gamename =new String('jyoti');//in this it get stored as object in key:value pair
//  console.log(gamename[0]);
//  console.log(gamename._proto_);
//  console.log(gamename.length);
//  console.log(gamename.toUpperCase());
//  console.log(gamename.charAt(2));
//  console.log(gamename.indexOf('t'));
const newString=gamename.substring(0,3)
console.log(newString)
const anotherString= gamename.slice(-5,3)
console.log(anotherString)

const newStringone="   jyoti   .";
console.log(newStringone);
console.log(newStringone.trim());
const url="htttps://hiteshjyoti"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
console.log(gamename.split('-'))




 