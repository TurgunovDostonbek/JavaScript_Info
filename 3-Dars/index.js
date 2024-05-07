// Type conversion Operators 

// Dasturlashda turdagi konvertatsiya bir turdagi ma'lumotlarni boshqasiga aylantirish jarayonidir . Masalan, qator ma'lumotlarini raqamga aylantirish .

// JavaScript-da konvertatsiya qilishning ikki turi mavjud:

// Implicit Conversion - Avtomatik turdagi konvertatsiya qilish.
// Aniq konvertatsiya - qo'lda turdagi konvertatsiya qilish.


// Muayyan holatlarda JavaScript avtomatik ravishda bir turdagi ma'lumotlarni boshqasiga (to'g'ri turga) aylantiradi. Bu yashirin konversiya sifatida tanilgan. Masalan,

// // numeric string used with + gives string type
// let result;

// // convert number to string
// result = "3" + 2; 
// console.log(result, "-", typeof(result));

// result = "3" + true; 
// console.log(result, "-", typeof(result));

// result = "3" + null; 
// console.log(result, "-", typeof(result));


// let result;

// // convert string to number
// result = Number("5");
// console.log(result, "-", typeof(result));

// // convert boolean to string
// result = String(true);
// console.log(result, "-", typeof(result));

// // convert number to boolean
// result = Boolean(0);
// console.log(result, "-", typeof(result));


 // Operators

//  JavaScript operatorlari bir yoki bir nechta operandlar (qiymatlar) ustida amallarni bajaradigan maxsus belgilardir. Masalan,

// 2 + 3;  // 5
// Bu erda biz 2 va 3+ operandlarini qo'shish uchun operatordan foydalandik .

// JavaScript operatori turlari
// Mana, ushbu qo'llanmada o'rganadigan turli xil JavaScript operatorlarining ro'yxati:

// Arifmetik operatorlar
// Belgilash operatorlari
// Taqqoslash operatorlari
// Mantiqiy operatorlar
// Bitwise operatorlari
// String operatorlari
// Turli operatorlar
// 1. JavaScript arifmetik operatorlari
// Qo‘shish, ayirish va hokazo kabi arifmetik hisoblarni bajarish uchun arifmetik operatorlardan foydalanamiz. Masalan,

// 5 - 3;  // 2
// Bu yerda operator yordamida 5 dan 3 ni- ayirish uchun foydalandik .

// Ko'p ishlatiladigan arifmetik operatorlar
// Operator	Ism	Misol
// +	Qo'shish	3 + 4  // 7
// -	Ayirish	5 - 3  // 2
// *	Ko'paytirish	2 * 3  // 6
// /	Bo'lim	4 / 2  // 2
// %	Qolgan	5 % 2  // 1
// ++	O'sish ( 1 ga oshadi )	++5yoki5++  // 6
// --	Kamaytirish ( 1 ga kamayadi )	--4yoki4--  // 3
// **	Eksponentsiya (quvvat)	4 ** 2  // 16
// 1-misol: JavaScript-dagi arifmetik operatorlar
// let x = 5;

// // addition operator
// console.log("Addition: x + 3 = ", x + 3);

// // subtraction operator
// console.log("Subtraction: x - 3 =", x - 3);

// // multiplication operator
// console.log("Multiplication: x * 3 =", x * 3);

// // division operator
// console.log("Division: x / 3 =", x / 3);

// // remainder operator
// console.log("Remainder: x % 3 =", x % 3);

// // increment operator
// console.log("Increment: ++x =", ++x);

// // decrement operator
// console.log("Decrement: --x =", --x);

// // exponentiation operator
// console.log("Exponentiation: x ** 3 =", x ** 3);
// Kodni ishga tushirish
// Chiqish

// Qo'shish: x + 3 = 8
// Ayirish: x - 3 = 2
// Ko'paytirish: x * 3 = 15
// Bo'linish: x / 3 = 1,666666666666667
// Qolgan: x % 3 = 2
// O'sish: ++x = 6
// Kamaytirish: --x = 5
// Ko'rsatkich: x ** 3 = 125
// Eslatma: O'sish operatori operandga 1++ qo'shadi . Va dekrement operatori operand qiymatini 1 ga kamaytiradi .--

// Qo'shimcha ma'lumot olish uchun O'sish ++ va kamaytirish -- Operatorlarga tashrif buyuring .

// 2. JavaScript tayinlash operatorlari
// O'zgaruvchilarga qiymatlarni belgilash uchun tayinlash operatorlaridan foydalanamiz . Masalan,

// let x = 5;
// Bu erda biz o'zgaruvchiga 5= qiymatini belgilash uchun operatordan foydalandikx.

// Tez-tez ishlatiladigan tayinlash operatorlari
// Operator	Ism	Misol
// =	Belgilash operatori	a = 7;
// +=	Qo'shimcha topshiriq	a += 5;  // a = a + 5
// -=	Ayirish topshirig'i	a -= 2;  // a = a - 2
// *=	Ko'paytirish topshirig'i	a *= 3;  // a = a * 3
// /=	Bo'lim topshirig'i	a /= 2;  // a = a / 2
// %=	Qolgan topshiriq	a %= 2;  // a = a % 2
// **=	Ko'rsatkichni belgilash	a **= 2;  // a = a**2
// 2-misol: JavaScript-da tayinlash operatorlari
// // assignment operator
// let a = 7;
// console.log("Assignment: a = 7, a =", a);

// // addition assignment operator
// a += 5;  // a = a + 5
// console.log("Addition Assignment: a += 5, a =", a);

// // subtraction assignment operator
// a -= 5;  // a = a - 5
// console.log("Subtraction Assignment: a -= 5, a =", a);

// // multiplication assignment operator
// a *= 2;  // a = a * 2
// console.log("Multiplication Assignment: a *= 2, a =", a);

// // division assignment operator
// a /= 2;  // a = a / 2
// console.log("Division Assignment: a /= 2, a =", a);

// // remainder assignment operator
// a %= 2;  // a = a % 2
// console.log("Remainder Assignment: a %= 2, a =", a);

// // exponentiation assignment operator
// a **= 2;  // a = a**2
// console.log("Exponentiation Assignment: a **= 7, a =", a);
// Kodni ishga tushirish
// Chiqish

// Topshiriq: a = 7, a = 7
// Qo'shish topshirig'i: a += 5, a = 12
// Ayirish topshirig'i: a -= 5, a = 7
// Ko'paytirish topshirig'i: a *= 2, a = 14
// Bo'limni belgilash: a /= 2, a = 7
// Qolganlarni belgilash: a %= 2, a = 1
// Darajani belgilash: a **= 7, a = 1
// 3. JavaScript solishtirish operatorlari
// Ikki qiymatni solishtirish va mantiqiy qiymatni ( trueyoki ) qaytarish uchun taqqoslash operatorlaridan foydalanamiz false. Masalan,

// const a = 3, b = 2;
// console.log(a > b);

// // Output: true 
// Kodni ishga tushirish

// >Bu erda biz taqqoslash operatoridan foydalanganmiza(qiymati 3 ) dan kattab(uning qiymati 2 ga teng ).

// 3 2 dan katta bo'lgani uchun biz truechiqish sifatida olamiz.

// Eslatma: Yuqoridagi misolda mantiqiy ifodaa > b deyiladi , chunki uni baholash mantiqiy qiymatga olib keladi.

// Ko'p ishlatiladigan taqqoslash operatorlari
// Operator	Ma'nosi	Misol
// ==	ga teng	3 == 5bizga beradifalse
// !=	ga teng emas	3 != 4bizga beraditrue
// >	dan kattaroq	4 > 4bizga beradifalse
// <	Dan kichik; .. dan kamroq	3 < 3bizga beradifalse
// >=	dan katta yoki teng	4 >= 4bizga beraditrue
// <=	dan kichik yoki teng	3 <= 3bizga beraditrue
// ===	ga qat'iy teng	3 === "3"bizga beradifalse
// !==	ga qat'iy teng emas	3 !== "3"bizga beraditrue
// 3-misol: JavaScript-da taqqoslash operatorlari
// // equal to operator
// console.log("Equal to: 2 == 2 is", 2 == 2);

// // not equal operator
// console.log("Not equal to: 3 != 3 is", 3 != 3);

// // strictly equal to operator
// console.log("Strictly equal to: 2 === '2' is", 2 === '2');

// // strictly not equal to operator
// console.log("Strictly not equal to: 2 !== '2' is", 2 !== '2');

// // greater than operator
// console.log("Greater than: 3 > 3 is", 3 > 3);

// // less than operator
// console.log("Less than: 2 > 2 is", 2 > 2);

// // greater than or equal to operator
// console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);

// // less than or equal to operator
// console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);
// Kodni ishga tushirish
// Chiqish

// Teng: 2 == 2 rost
// Teng emas: 3 != 3 noto'g'ri
// Qattiq teng: 2 === '2' noto'g'ri
// Qat'iy teng emas: 2 !== '2' to'g'ri
// Kattaroq: 3 > 3 noto‘g‘ri
// Kichikroq: 2 > 2 noto‘g‘ri
// dan katta yoki teng: 3 >= 3 rost
// Kichik yoki teng: 2 <= 2 rost
// Tenglik (== va !=) va qat'iy tenglik (=== va !==) operatorlari orasidagi farq.






// 4. JavaScript mantiqiy operatorlari
// Mantiqiy ifodalar ustida mantiqiy amallarni bajarish uchun mantiqiy operatorlardan foydalanamiz. Masalan,

// const x = 5, y = 3;
// console.log((x < 6) && (y < 5));

// // Output: true
// Kodni ishga tushirish
// Mana, AND&& mantiqiy operatori . Ikkala va ham bo'lgani uchun , birlashtirilgan natija bo'ladi .x < 6y < 5truetrue

// Ko'p ishlatiladigan mantiqiy operatorlar
// Operator	Sintaksis	Tavsif
// &&(Mantiqiy VA)	expression1 && expression2	truefaqat ikkalasi expression1ham expression2bo'lsatrue
// ||(Mantiqiy OR)	expression1 || expression2	trueagar expression1yoki expression2bo'lsatrue
// !(Mantiqiy EMAS)	!expression	falsebo'lsa expressionva trueaksincha
// 4-misol: JavaScript-dagi mantiqiy operatorlar
// let x = 3;

// // logical AND
// console.log((x < 5) && (x > 0));  // true
// console.log((x < 5) && (x > 6));  // false

// // logical OR
// console.log((x > 2) || (x > 5));  // true
// console.log((x > 3) || (x < 0));  // false

// // logical NOT
// console.log(!(x == 3));  // false
// console.log(!(x < 2));  // true






































// let arry = [1,2,3,4,5,6,76,7,-1,-3]

// let sum = arry.filter((item) => item > 0 ).sort((a,b) => a - b).slice(-1)

// let res = arry.filter((item) => item < 0).reduce((sum, item) => sum += item ,0)

// sum.push(res)

// console.log(sum);
// console.log(res);

// let a = arry.sort((a,b) => a - b )
// let c = a.filter((item) => item <  0)
// let s = c.reduce((sum, item) => sum += item , 0)
// b.push(s)

// let b = a.slice(-1) + s
// console.log(Number(b.split(' ')));
// console.log(c);
// console.log(s);
// console.log(c);

// let a = 12 
// const b = 32
// var c = 34

// let a  = 12
// let c  = 11
// let b = "+"
// let x = eval(`${a}${b}${c}`)
// console.log(x);
 
// let input = [1,2,3,4,5,6,7,8,9,0]
// // input.toString().split('')
// input.splice(0,0,"(")
// input.splice(4,0,")")
// input.splice(9,0,"-").join(',')
// let sum = input.toString().split("").sort((a,b) => b - a ).join('')
// console.log(input);
// input.co
// input.re
// let sum = input.filter((item) => item > 0 ).length
// console.log(typeof sum);


// function basicOp(operation, value1, value2){
//     //Code
//     console.log(operation);
//   }
// basicOp("+",12,34)

// let sum = 0
// let str = "sddssdaaaaasd"
// for(let i = 0; i<=str.length; i++){
//     if(str[i] == "a"){
//         sum += str[i]
//     }
    
//     }
//     console.log(sum);

// for(let i = 0; i<=sum; i++){
//     // console.log(`${i} sheep...`);
//         if(sum == 0){
//             console.log(" ");
//         }
            
        
// }


// var countSheep = function (num){
//     for(let i = 0; i<=num; i++){
//     if(i == 0){
//       console.log(`""`);
//      }else
//       console.log(`${i} sheep...`); 
//     }
    
    
//   }

//   countSheep(7)
// let n = 1234
// let sum = n.toString().split('').join("+")
//   let a = eval(sum)
//   console.log(a);