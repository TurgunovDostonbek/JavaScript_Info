//  call, apply, bind..(Advanced function..) 

// let user = {
//     name: "Webbrain",
//     lastname: "Academy",
//     title: "IT center",
// }

// let user1 = {
//     name: "NT",
//     lastname: "Academy",
//     title: "IT center",
// }

// function getFull(){
//     console.log(`${this.name} ${this.lastname}`);
// }

// getFull.call(user)
// getFull.call(user1)

// let user2 = {
//     name: "webbrain",
//     lastname: "Academy",
//     title: "IT center",
// }



////  call  => call bu this ni alohida function ga olib generator function sifatida ishaltish imkonini beradi. yani bitta aloxida function yoziladi va uni hammajoyda universal qilib ishlatsak boladi masalan

// let user = {
//     name: "Webbrain",
//     lastname: "Academy",
//     title: "IT center",
// }

// ///////////////// 

// let users = [
//     {
//         name: "webbrain",
//         lastname: "Academy",
//         title: "IT center",
//     },
//     {
//         name: "Digital",
//         lastname: "One",
//         title: "IT center",
//     }
// ]

// function getFull(){ //// bu yerda bitta function yozib olindi va uni universal qilib ishlatsak boladi...
//     console.log(`${this.name} ${this.lastname} ${this.title}`); ///bu yerga yozilgan this esa userdan name va lastname larni olib kelayabdi...
// }
// // getFull.call(user)


// for(let value of users){
//     getFull.call(value)
// }


/////////////////////////////////////////////////////////////////////

// apply  => call va apply deyarli bir xil ishlaydi lekin applyda argumentni array korinishida bersak boladi,
// callda unday emas argument callda string korinishida boladi 

// let users = [
//     {
//         name: "webbrain",
//         lastname: "Academy",
//         title: "IT center",
//     },
//     {
//         name: "Digital",
//         lastname: "One",
//         title: "IT center",
//     }
// ]

//  function getFull(a,b){
//     console.log(a,b);
//         console.log(`${this.name} ${this.lastname}`);
//     }


//     for(let value of users){
//         getFull.apply(value, ['Salom','Hayr'])
//     }



    //////////////////////////////////////////////////

 ///   bind  => call va apply bilan deyarli bir xil ishlaydi lekin call va applydan  argumentni spred korinishida bersak boladi,
 //    bind call va applydan farqi shuki uni aloxida ozgaruvchiga tenglab olinadi va qaytada yana ishlatish imkonini beradi.



 let users = [
    {
        name: "webbrain",
        lastname: "Academy",
        title: "IT center",
    },
    {
        name: "Digital",
        lastname: "One",
        title: "IT center",
    }
]

 function getFull(a,b){
    console.log(a,b);
        console.log(`${this.name} ${this.lastname}`);
    }


    for(let value of users){
    let mt = getFull.bind(value, 'Salom','Hayr'); // bu yerda aloxida ozgaruvchiga tenglab olindi uni pasda chaqirildi
    //shuning uchun bind call va apply dan farq qiladi..
    mt()
    }