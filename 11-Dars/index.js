// let a = "This is a test salom Munchogim"
// let b = a.split(' ')
// let c = b.map((item) => {
//     if(item.length > 4){
//        return  item.split('').reverse().join("");
//     }else{
//         return item 
//     }
// })
// let  diemvoweledStr = a.replace(/[aeiou]/gi,"");
// console.log(diemvoweledStr);
// console.log(c.join(" "))


// function disemvowel(str) {
//     return str.replace(/[aeiou]/ig,'');
//   }


// function disemvowel(str) {
//     var diemvoweledStr = str.replace(/[aeiou]/gi,"");
//     return diemvoweledStr;
//   }
  // length 
// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); // 3

// ///=========================

// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6


// /// =============================

// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });
// // Output:
// // 0: red
// // 1: yellow
// // 2: blue
// // 5: purple

// colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

// // =====================

// arr.copyWithin(0, 1, 2); // mutates arr
// const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
// const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr

// // ====================

// function method(callbackFn, thisArg) {
//     const length = this.length;
//     for (let i = 0; i < length; i++) {
//       if (i in this) {
//         const result = callbackFn.call(thisArg, this[i], i, this);
//         // Do something with result; maybe return early
//       }
//     }
//   }


//   //========================
//     const a = { length: 0.7 };
//     Array.prototype.push.call(a);
//     console.log(a.length); // 0

//     function f() {
//         console.log(Array.prototype.join.call(arguments, "+"));
//       }
      
//       f("a", "b"); // 'a+b'

// /// ==============================

//       const fruits = ["Apple", "Banana"];
// const fruitsString = fruits.join(", ");
// console.log(fruitsString);
// // "Apple, Banana"

// // ==============================

// const fruits = ["Apple", "Banana"];

// fruits.includes("Banana"); // true
// fruits.includes("Cherry"); // false

// // If indexOf() doesn't return -1, the array contains the given item.
// fruits.indexOf("Banana") !== -1; // true
// fruits.indexOf("Cherry") !== -1; // false


// ///==============================

// const fruits = ["Apple", "Banana"];
// const newLength = fruits.push("Orange");
// console.log(fruits);
// // ["Apple", "Banana", "Orange"]
// console.log(newLength);
// // 3

// // ============================

// const fruits = ["Apple", "Banana", "Orange"];
// const removedItem = fruits.pop();
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItem);
// // Orange

// // ========================
// const fruits = ["Apple", "Banana"];
// const removedItem = fruits.shift();
// console.log(fruits);
// // ["Banana"]
// console.log(removedItem);
// // Apple

// // ===========================

// const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
// const start = 0;
// const deleteCount = 3;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Banana", "Mango"]
// console.log(removedItems);
// // ["Apple", "Strawberry", "Cherry"]

// //===============================

// const fruits = ["Strawberry", "Banana", "Mango"];
// const start = fruits.indexOf("Banana");
// const deleteCount = 1;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Strawberry", "Mango"]
// console.log(removedItems);
// // ["Banana"]


// // ============================
// const fruits = ["Banana", "Mango"];
// const newLength = fruits.unshift("Strawberry");
// console.log(fruits);
// // ["Strawberry", "Banana", "Mango"]
// console.log(newLength);
// // 3


//=============================

// const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
// const start = 1;
// const deleteCount = 2;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Apple", "Mango"]
// console.log(removedItems);
// // ["Banana", "Strawberry"]


//==================================

// const fruits = ["Apple", "Banana", "Strawberry"];
// const start = -2;
// const deleteCount = 2;
// const removedItems = fruits.splice(start, deleteCount, "Mango", "Cherry");
// console.log(fruits);
// // ["Apple", "Mango", "Cherry"]
// console.log(removedItems);
// // ["Banana", "Strawberry"]

// ==================================

// const fruits = ["Apple", "Mango", "Cherry"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }
// // Apple
// // Mango
// // Cherry

// =================================

// const fruits = ["Apple", "Mango", "Cherry"];
// fruits.forEach((item, index, array) => {
//   console.log(item, index);
// });
// // Apple 0
// // Mango 1
// // Cherry 2

// ====================================

// const fruits = ["Apple", "Banana", "Strawberry"];
// const moreFruits = ["Mango", "Cherry"];
// const combinedFruits = fruits.concat(moreFruits);
// console.log(combinedFruits);
// // ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// // The 'fruits' array remains unchanged.
// console.log(fruits);
// // ["Apple", "Banana", "Strawberry"]

// // The 'moreFruits' array also remains unchanged.
// console.log(moreFruits);
// // ["Mango", "Cherry"]

// =====================================

// const fruits = ["Strawberry", "Mango"];

// // Create a copy using spread syntax.
// const fruitsCopy = [...fruits];
// // ["Strawberry", "Mango"]

// // Create a copy using the from() method.
// const fruitsCopy2 = Array.from(fruits);
// // ["Strawberry", "Mango"]

// // Create a copy using the slice() method.
// const fruitsCopy3 = fruits.slice();
// // ["Strawberry", "Mango"]

// /// =====================================

// const board = [
//     ["R", "N", "B", "Q", "K", "B", "N", "R"],
//     ["P", "P", "P", "P", "P", "P", "P", "P"],
//     [" ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " "],
//     [" ", " ", " ", " ", " ", " ", " ", " "],
//     ["p", "p", "p", "p", "p", "p", "p", "p"],
//     ["r", "n", "b", "q", "k", "b", "n", "r"],
//   ];
  
//   console.log(`${board.join("\n")}\n\n`);
  
//   // Move King's Pawn forward 2
//   board[4][4] = board[6][4];
//   board[6][4] = " ";
//   console.log(board.join("\n"));
  
//   Mana natija:

//   R,N,B,Q,K,B,N,R
// P,P,P,P,P,P,P,P
//  , , , , , , ,
//  , , , , , , ,
//  , , , , , , ,
//  , , , , , , ,
// p,p,p,p,p,p,p,p
// r,n,b,q,k,b,n,r

// R,N,B,Q,K,B,N,R
// P,P,P,P,P,P,P,P
//  , , , , , , ,
//  , , , , , , ,
//  , , , ,p, , ,
//  , , , , , , ,
// p,p,p,p, ,p,p,p
// r,n,b,q,k,b,n,r


