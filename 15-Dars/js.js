// Prototype, __Proto__


// let user1 = {name: "webbrain"} 
// let user2 = {title: "Academy"} 
// Object.assign(user1,user2)

// console.log(user1);

/// proto prototypeni ichida boladi proto ham prototypega referens qiladi//

// let user1 = {name: "webbrain"} 
// let user2 = {title: "Academy"} 
// // Object.assign(user1,user2)
// user1.__proto__ = user2 // bu yerda protoga birikib qoldi, keginchalik protodagi malumotni ochirmoqchi bolsak null ga tenglab qoysak ochib ketadi.. 

// console.log(user1);
// console.log(user1.title);

/// prototype hamma nan primativlarda boladi
// proto oddiy malumotlarni bir biriga set qilishda ishlatilsa => prototype esa globalar bilan ishlatiladi.


// let user1 = {name: "webbrain", last: "Academy"}
// let user2 = {name: "PDP", last: "Academy"}
// let user3 = {name: "NT", last: "Academy"}

// Object.prototype.fullName = function(){  // bu yerda objectni prototypega fullname degan function biriktirib qoydik.
//     console.log(this.name, this.last);
//     return this
// } 

// user1.fullName()
// user2.fullName()
// user3.fullName()


let arr = [1,2,3,4,5,6,7]

Array.prototype.remove = function(n){
    let res = this.filter((item) => item !== n)
    console.log(res);
}

arr.remove(4)