// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
//this comparisions are easy to know

// console.log("2">1);
//whenever you want to comapre compare with in same datatype other wise it will not give predictable result

// console.log(null>0);//false
// console.log(null==0);//false
// console.log(null>=0);//true

//the reason is that an equality check == and comparisions > < >= <= work differently
//comparison convert null to a number ,treating it as 0
// thats why (3)null>=0 is true and (1) null>0 is false

// console.log(undefined>0);//false
// console.log(undefined==0);//false
// console.log(undefined>=0);//false

//===
console.log("2"==2)//it will check not only content but also datatype

/*Type coercion refers to the automatic conversion of values from one data type to another, 
typically performed during operations or comparisons involving different data types.*/

//== operator performs type coercion and converts the string to the number and then compare