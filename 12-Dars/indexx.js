//// CRUD  Array Expert .....

const user = [
    {id:1, year: 2000, name:"Turgunov Dostonbek" },
    {id:2, year: 2001, name:"Abdurahmonov Ravshanjon" },
    {id:3, year: 2002, name:"Isoqov Otabek" },
    {id:4, year: 2003, name:"Tursunov Baxtiyor" },
    {id:5, year: 2004, name:"Axmadjonov Akmalxon" },
    {id:6, year: 2005, name:"Qaharov Muhammadjon" },
    {id:7, year: 2006, name:"Yusupov Ayyubxon" },
    {id:8, year: 2007, name:"Abdulboriev Qobiljon" },
    // {id:9, year: 2008, name:"Abdulajanov Azizbek" }
]

/// CRUD

// Create .......

const addUser = (item) => {
// console.log(item);
 user == [  ...user, {id: user.length + 1,  ...item }];
 console.log(item);
};

addUser({year:2019, name: "webbrain"})
console.log(user);



// Read  ......

// const sortByAlf = () => {
//     const res = user.sort((a,b) => a.name.localeCompare(b.name))
//     user == res;
// }

// const sortByYear = () => {
//     const res = user.sort((a,b) => a.year - b.year)
//     user == res;
// }

// sortByAlf();
// sortByYear();



// Update  ...... 




// Delete  ...... 

// const deleteByfilter = (id) => {
//     const res = user.filter((item) => {
//     return item.id !== id})
    
//      user == res
// };

// deleteByfilter(5);

// console.log(user);




































/////////////////////////////////////////////////////////////
// // let b = a.split("").join("")
// // console.log(b);

// // if(a.length % 2 === 1){
// //     console.log(`${a}_`);
// // }else{
// //     console.log(a);
// // }

// // let a  = 'abchjhd'

// // let c = []

// // for(let i = 0; i<a.length; i += 2){
// //     if(a.length % 2 === 0){
// //         c.push(a.slice(i,i+2))
// //     }else{
        
// //     }
// // }

// // console.log(c);


// // function getName(str) {
// //     let count1 = []
// //         for(let i = 0; i<str.length; i += 2){
// //                 count1.push(str.slice(i,i+2));
// //         }
// //         let a =  count1.map((item) => {
// //             if(item.length % 2 === 0){
// //                 return item
// //             }else{
// //                return `${item}_`
// //             }
// //         })
// //     // return a
// //     console.log(a);
// // }
// // getName('alsseff')



// let a = [1,2]
// let b = [1]

// let c = a.filter((item) => {  
//     if(b.includes(item)){
//         return item
//     }
// })
// console.log(c);