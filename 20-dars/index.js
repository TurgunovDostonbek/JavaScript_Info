//// setTimeOut  vs setInterval ..

// setTimeout(callback, time, arg)  => setTimeOut bu ishga tushganda berilgan vaqt kutadi..

// console.log(1);

// setTimeout(() =>{
//     console.log("after one sec");
// },2000)

// console.log(3);

////// setInterval  =>

// setInterval(() => {
//     console.log(1);
// }, 2000 )

// let a = [1,2,'a','b']

// let b = new RegExp([0-9])

// a.forEach((item) => console.log(item.match(b)))
// //  let res = a.match(b)
// //  console.log(res)
// console.log(m);

//// setTimeOut  vs setInterval ..

// const time = setTimeout(() => {
//   console.log("hello");
// }, 2000);
// let count = 0;
// const time2 = setInterval(() => {
//   console.log(count++);
// }, 1000);

// const h1 = document.querySelector(".h1");
// const start = document.getElementById("start");
// const stop = document.getElementById("stop");

// let count = 0;
// function plus() {
//   let interval = setInterval(() => {
//     count++;
//     h1.textContent = count;
//     h1.style.color = "green";
//   }, 1000);
//   stop.addEventListener("click", () => {
//     clearInterval(interval);
//     h1.style.color = "red";
//   });
// }
// const card = document.querySelector(".card");
// const list01 = document.getElementById("list01");

// function listItem() {
//   setTimeout(() => {
//     card.style.transform = "translateY(0px)";
//   }, 2000);
// }

// function getData(a = 0, b = 1) {
//   return a + b;
// }

// console.log(getData(3) * 3);

const obj = {
  name: "WebBrian",
  surname: "Academy",
  status: "IT",
};
const status = "name";
console.log(obj.status);
