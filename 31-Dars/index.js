// Dom haqida. Dom Selectorlari..

// ===============================/// Dom ///////======================== 

// HTML DOM (Hujjat obyekti modeli)
// Veb-sahifa yuklanganda, brauzer sahifaning D hujjati O ob'ekt M odelini yaratadi.



// Ob'ekt modeli bilan JavaScript dinamik HTML yaratish uchun zarur bo'lgan barcha quvvatni oladi:

// JavaScript sahifadagi barcha HTML elementlarini o'zgartirishi mumkin
// JavaScript sahifadagi barcha HTML atributlarini o'zgartirishi mumkin
// JavaScript sahifadagi barcha CSS uslublarini o'zgartirishi mumkin
// JavaScript mavjud HTML elementlari va atributlarini olib tashlashi mumkin
// JavaScript yangi HTML elementlari va atributlarini qo'shishi mumkin
// JavaScript sahifadagi barcha mavjud HTML hodisalariga munosabat bildira oladi
// JavaScript sahifada yangi HTML hodisalarini yaratishi mumkin


// HTML DOM usullari siz bajarishingiz mumkin bo'lgan harakatlardir (HTML elementlarida).

// HTML DOM xossalari siz o'rnatishingiz yoki o'zgartirishingiz mumkin bo'lgan qiymatlar (HTML elementlari).

// DOM dasturlash interfeysi
// HTML DOM ga JavaScript (va boshqa dasturlash tillari bilan) orqali kirish mumkin.

// DOMda barcha HTML elementlari ob'ektlar sifatida aniqlanadi .

// Dasturlash interfeysi har bir ob'ektning xossalari va usullaridir.

// Xususiyat siz olishingiz yoki o'rnatishingiz mumkin bo'lgan qiymatdir (masalan, HTML elementining mazmunini o'zgartirish) .

// Usul - bu siz bajarishingiz mumkin bo'lgan harakat (masalan , HTML elementini qo'shish yoki o'chirish).





// ================= Dom Selektorlari ================================

// 1) getElementsByTagName;

// const listItem = document.getElementsByTagName("body")
// const listItem2 = document.getElementsByTagName("li")
// console.log(listItem);
// console.log(listItem2);
// let a = Array.from(listItem2)
// a.forEach((item ) => {
//     console.log(item);
// })

// 2) getElementsByClassName;

// const list = document.getElementsByClassName("list")
// console.log(list);


// 3) getElementById

// const id = document.getElementById("id1")

// console.log(id);




// 4) querySelector  // querySelectorAll  => query selektor orqali biz hohlagan malumotlarni tanlab olishimiz mumkin faqat oldiga class bolsa nuqta id bolsa # qoyamiz. query selector all da esa hammasini olib beradi va shu Node list qaytaradi...

// Node list va HTML Collection bir biriga oxshash boladi. lekin farqi boladi..
// Node listni forEach qilsa boladi Node listni esa forEach qilib bolmaydi

const container = document.querySelector(".container")
const id = document.querySelector("#id1")

console.log(container);
console.log(id);