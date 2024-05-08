// Foor loop,  While, Do While 

// For operatori qavs ichiga olingan va nuqta-vergul bilan ajratilgan uchta ixtiyoriy ifodadan iborat boʻlgan sikl hosil qiladi, undan keyin esa siklda bajarilishi kerak boʻlgan operator (odatda blokli bayonot) keladi.
// let str = '';

// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }

// console.log(str);
// // Expected output: "012345678"

// ============================================================
/// Sintaksii

// for (initialization; condition; afterthought)
//     statement


// Ifoda (jumladan, topshiriq ifodalari) yoki o'zgaruvchilar deklaratsiyasi tsikl boshlanishidan oldin bir marta baholanadi. Odatda hisoblagich o'zgaruvchisini ishga tushirish uchun ishlatiladi. Bu ifoda ixtiyoriy ravishda var yoki let kalit so'zlari bilan yangi o'zgaruvchilarni e'lon qilishi mumkin. var bilan e'lon qilingan o'zgaruvchilar sikl uchun lokal emas, ya'ni ular for tsikli joylashgan doirada joylashgan. let bilan e'lon qilingan o'zgaruvchilar operator uchun lokaldir.

//  for (let i = "start" in window ? window.start : 0; i < 9; i++) {
//   console.log(i);
// }
// // SyntaxError: 'for-in' loop variable declaration may not have an initializer.
// JS

// // Parenthesize the whole initializer
// for (let i = ("start" in window ? window.start : 0); i < 9; i++) {
//   console.log(i);
// }

// // Parenthesize the `in` expression
// for (let i = ("start" in window) ? window.start : 0; i < 9; i++) {
//   console.log(i);
// }

// let i = 0;

// for (;;) {
//   if (i > 3) break;
//   console.log(i);
//   i++;
// }


/// ====================================
/// Do While

// Do...while iborasi sinov sharti rost deb baholansa, belgilangan operatorni bajaradigan sikl hosil qiladi. Shart bayonot bajarilgandan so'ng baholanadi, natijada ko'rsatilgan bayonot kamida bir marta bajariladi.

// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);
// // Expected output: "12345"

// while iborasi sinov sharti rost deb baholansa, belgilangan iborani bajaradigan sikl hosil qiladi. Shart bayonotni bajarishdan oldin baholanadi.

/// let n = 0;

// while (n < 3) {
//     n++;
//   }
  
//   console.log(n);
//   // Expected output: 3
  
