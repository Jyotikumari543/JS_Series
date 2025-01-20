//***************************************** */
//types of memory [Stack(Primitive), Heap(non Primitive)]

//whenever  stack memory get used ,you will get a copy of variable which you have declared
//whereas in heap memory the reference of a variable get . so whatever you will change in that reference the original stored in heap memory also get changed

let myname="jyoti"
let Iam=myname
Iam="kumari"
console.log(myname)
console.log(Iam)

let user={
    gmail:"jyoti@gmail.com",
    upi:"ueryei74673"

}
 let user2=user
user2.gmail="priya@gmail.com",

console.log(user)
console.log(user2)