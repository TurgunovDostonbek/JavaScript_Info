// Advanced Object, setter and getter functions..

// faglarr

// let user = {name: "webbbrain", title: "IT Center"}

// //write
// // delete
// // loop
// // value

// // console.log(Object.getOwnPropertyDescriptor(user, "name"));


// // value: 'webbbrain',
// // writable: true,
// // enumerable: true,
// // configurable: true

// // console.log(Object.getOwnPropertyDescriptor(user, "name"));
// // Object.defineProperty(user, "name",{writable: false, configurable: false })
// // delete user.title
// // console.log(user);


// console.log(Object.getOwnPropertyDescriptor(user, "name"));
// Object.defineProperty(user, "name",{writable: false, enumerable: false })
// for(let vl in user){
//     console.log(vl);
// }


//// Setter Getter

// getter malumotlarni olish uchun islatiladi,
// setter malumot qoshish uchun ishlatiladi,
// getter setterlarda function oldiga qavuslar yozilmaydi


// const user = {
//     name: "webbrain",
//     last: "Academy",
//      fullName(){
//         console.log(this.name, this.last);
//     }
// }

// user.fullName()

///// =============================
// Gett olish

// const user1 = {
//     name: "webbrain",
//     last: "Academy",
//     get fullName(){
//         console.log(this.name, this.last);
//     }
// }

// user1.fullName

///// ===============================
// Set qilish,
// set qilgan paytda set function bitta value oladi valueni pasdan obekt sifatida betamiz


const user = {
    name: "webbrain",
    last: "Academy",
    get fullName(){
        console.log(this.name, this.last);
    },
     set fullName(value){
        this.name = value.name
        this.last = value.last
        // console.log(this.name, this.last);
    }
}

user.fullName = {name: "salom", last: "hayr"}
user.fullName