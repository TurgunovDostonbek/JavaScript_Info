// const request = new XMLHttpRequest();

// // console.log(request);

// request.addEventListener("readystatechange", () => {
//   // console.log(request, request.readyState);
//   if (request.readyState === 4) {
//     // console.log( request.responseText);
//     const data = JSON.parse(request.responseText);
//     console.log(data);
//   }
// });

// // open
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

// // console.log(a);
// // send

// request.send();

// // var merge = function(nums1, m, nums2, n) {
// //     let a = nums1.slice(0,m)
// //     let b = nums2.slice(0,n)
// //     return a.concat(b).sort((a,b) => a - b).filter((item) => item > 0)
// // };

// // console.log(merge(nums1 = [0,1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3));

/// Sinxron  js  => javaScript default xolatda sinxron tarzda ishlaydi.  sinxron  bir vaqtning ozida bitta amal bajara oladi yani kodlarni ketma ket o'qib tushadi shu holat sinxron deyiladi javascriptda sinxron ishlagan paytida codlar steka borib keladi..


// function boshqaIsh() {
//     console.log(0);
//     console.log(0);
// }
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// boshqaIsh()
// console.log(6);


//// Asinxron JavaScript  => sinxroni aksi xisoblanadi bir vaqitning o'zida bir nechta vazifalarni bajarishi mumkin yani codlarni qaysi biri kerakli bolsa shunisini o'qiydi shu holat asinxron deyiladi...