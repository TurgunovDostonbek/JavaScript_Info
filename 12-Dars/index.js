

// let b = a.split("").join("")
// console.log(b);

// if(a.length % 2 === 1){
//     console.log(`${a}_`);
// }else{
//     console.log(a);
// }

// let a  = 'abchjhd'

// let c = []

// for(let i = 0; i<a.length; i += 2){
//     if(a.length % 2 === 0){
//         c.push(a.slice(i,i+2))
//     }else{
        
//     }
// }

// console.log(c);


// function getName(str) {
//     let count1 = []
//         for(let i = 0; i<str.length; i += 2){
//                 count1.push(str.slice(i,i+2));
//         }
//         let a =  count1.map((item) => {
//             if(item.length % 2 === 0){
//                 return item
//             }else{
//                return `${item}_`
//             }
//         })
//     // return a
//     console.log(a);
// }
// getName('alsseff')



let a = [1,2]
let b = [1]

let c = a.filter((item) => {  
    if(b.includes(item)){
        return item
    }
})
console.log(c);