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
