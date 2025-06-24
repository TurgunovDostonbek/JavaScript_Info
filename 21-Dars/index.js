
// JSON data,  Callback Hell,

/// AJAX kengaytmasi => Asinxron javascript and XML
/// AJAX bizga serverlar bilan asinxron yol bilan bog'lanish imkonini beradi.
/// AJAX chaqiruvlar bilan biz serverga dinamik tarzda bo'lanib malumot olishimiz mumkin.
/// Request so'rov..
/// Respons javob..

/// Request turlari GET,POST...
/// WEB API..
/// API => Application Programming Language...

// =============================================

// HTTPRequest

// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         // console.log(request);
//         if (request.readyState == 4 && request.status == 200) {
//             const data = JSON.parse(request.responseText)
//             callback(undefined, data);
//         } else if (request.readyState == 4) {
//             callback("Malumotni olishni iloji bo'lmadi !!!!!", undefined);
//         }
//     });

//     // open
//     request.open("GET", "todos.json");

//     // send
//     request.send();
// };

// getTodos((err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// HTTP Request JSON Data ...

const getTodos = (resurs) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      // console.log(request);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Qandaydir hatolik yuz berdi  !!!!!");
      }
    });
    // open
    request.open("GET", resurs);
    // send
    request.send();
  });
};

getTodos("./todos.json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// getTodos((data,err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// Promise

// const getData = () => {
//     return new Promise((resolve, reject) => {
//         request.addEventListener("readystatechange", () => {
//             // console.log(request);
//             if(request.readyState === 4  && request.status === 200){
//                 const data = JSON.parse(request.responseText)
//                 callback(data);
//             }else if(request.readyState === 4){
//                 callback("Qandaydir hatolik yuz berdi  !!!!!");
//             }
//         })
//     })
// }
=======
// localStorage...

// let name = "Sardor, Anvar";
// let arry = [1, 2, 3, 4, 5];

// localStorage.setItem("list", JSON.stringify(arry));
// let l1 = JSON.parse(localStorage.getItem("list"));

// // localStorage.setItem("list", arry);
// // let getitems = localStorage.getItem("list");
// let l2 = l1.slice(0, 3);
// console.log(l2);
// localStorage.setItem("list", JSON.stringify(l2));

// let count = JSON.parse(localStorage.getItem("list"));

// function plus() {
//   count++;
//   localStorage.setItem("list", JSON.stringify(count));
//   h1.textContent = count;
// }
// h1.textContent = count;

// function minus() {
//   count--;
//   h1.textContent = count;
// }

let products = [
  {
    id: 1,
    img: "./img/Image-Placeholder (1).png",
    name: "CHAIR",
    model: "Minimal LCD chair",
    skidka: "$180",
    sum: "$250",
  },
  {
    id: 2,
    img: "./img/img_2.png",
    name: "sofa",
    model: "Modern Sofa",
    skidka: "$120",
    sum: "$150",
  },
  {
    id: 3,
    img: "./img/img_3.png",
    name: "sofa",
    model: "Modern Sofa",
    skidka: "$130",
    sum: "$150",
  },
  {
    id: 4,
    img: "./img/img_4.png",
    name: "tabble",
    model: "Wood Coffee Tables",
    skidka: "$100",
    sum: "$120",
  },
  {
    id: 5,
    img: "./img/img_5.png",
    name: "CHAIR",
    model: "Acacia Wood  Chairs",
    skidka: "$100",
    sum: "120",
  },
  {
    id: 6,
    img: "./img/img_6.png",
    name: "Bench",
    model: "Amalia Cowhide Bench",
    skidka: "$130",
    sum: "$150",
  },
  {
    id: 7,
    img: "./img/img_7.png",
    name: "Storage",
    model: "Juno-Hinged  Storage",
    skidka: "$180",
    sum: "$250",
  },
  {
    id: 8,
    img: "./img/img_8.png",
    name: "Furniture",
    model: "Delicia 3 Piece  Room",
    skidka: "$120",
    sum: "$150",
  },
];

localStorage.setItem("list", JSON.stringify(products));

let product = JSON.parse(localStorage.getItem("list"));

product.map((item, index) => {
  console.log(item);
  delete item.name;
});
localStorage.setItem("list", JSON.stringify(product));

console.log(product);
let loctad = "SAlom";
const name = "Eshmat";
const name1 = "Eshmat";
const name2 = "Eshmat";
const name3 = "Eshmat";

