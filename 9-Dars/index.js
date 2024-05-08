// Numbers, Math


// JavaScript-da faqat bitta turdagi raqam mavjud. Raqamlar o'nli kasrlar bilan yoki o'nlik kasrlarsiz yozilishi mumkin.


// let x = 3.14;    // A number with decimals
// let y = 3;       // A number without decimals

// Haddan tashqari katta yoki haddan tashqari kichik raqamlar ilmiy (ko‘rsatkichli) belgilar bilan yozilishi mumkin:

// let x = 123e5;    // 12300000
// let y = 123e-5;   // 0.00123


// let x = 0.2 + 0.1;
// let x = (0.2 * 10 + 0.1 * 10) / 10;


// let x = 999999999999999;   // x will be 999999999999999
// let y = 9999999999999999;  // y will be 10000000000000000


// Agar siz ikkita raqam qo'shsangiz, natijada raqam bo'ladi:

// Misol
// let x = 10;
// let y = 20;
// let z = x + y;
// Agar siz ikkita satr qo'shsangiz, natijada qator birikmasi bo'ladi:

// Misol
// let x = "10";
// let y = "20";
// let z = x + y;



// Agar siz raqam va satr qo'shsangiz, natijada qator birikmasi bo'ladi:

// Misol
// let x = 10;
// let y = "20";
// let z = x + y;
// Agar siz satr va raqam qo'shsangiz, natijada qator birikmasi bo'ladi:

// Misol
// let x = "10";
// let y = 20;
// let z = x + y;
// Keng tarqalgan xato - bu natija 30 bo'lishini kutish:

// Misol
// let x = 10;
// let y = 20;
// let z = "The result is: " + x + y;
// Keng tarqalgan xato bu natijani 102030 bo'lishini kutishdir:

// Misol
// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z;
// JavaScript tarjimoni chapdan o'ngga ishlaydi.

// Birinchi 10 + 20 qo'shiladi, chunki x va y ikkala raqamdir.

// Keyin 30 + "30" birlashtiriladi, chunki z satrdir.


// JavaScript satrlari raqamli tarkibga ega bo'lishi mumkin:

// let x = 100;         // x is a number

// let y = "100";       // y is a string
// JavaScript barcha raqamli operatsiyalarda satrlarni raqamlarga aylantirishga harakat qiladi:

// Bu ishlaydi:

// let x = "100";
// let y = "10";
// let z = x / y;

// Bu ham ishlaydi:

// let x = "100";
// let y = "10";
// let z = x * y;

// Va bu ishlaydi:

// let x = "100";
// let y = "10";
// let z = x - y;

// Ammo bu ishlamaydi:

// let x = "100";
// let y = "10";
// let z = x + y;

// Oxirgi misolda JavaScript satrlarni birlashtirish uchun + operatoridan foydalanadi.

// NaNbu raqam qonuniy raqam emasligini ko'rsatadigan JavaScript-da zahiralangan so'zdir.

// Raqamli bo'lmagan satr bilan arifmetika qilishga urinish NaN(Raqam emas):

// Misol
// let x = 100 / "Apple";

// Biroq, agar satr raqamli bo'lsa, natija raqam bo'ladi:

// Misol
// let x = 100 / "10";
// isNaN() Qiymat raqam emasligini bilish uchun global JavaScript funksiyasidan foydalanishingiz mumkin :

// Misol
// let x = 100 / "Apple";
// isNaN(x);
// E'tibor bering NaN. Agar siz NaNmatematik operatsiyada foydalansangiz, natija ham bo'ladi NaN:

// Misol
// let x = NaN;
// let y = 5;
// let z = x + y;
// Yoki natija NaN5 kabi birlashma bo'lishi mumkin:

// Misol
// let x = NaN;
// let y = "5";
// let z = x + y;
// NaNbu raqam: typeof NaNqaytaradi number:

// Misol
// typeof NaN;
// Cheksizlik
// Infinity(yoki -Infinity) eng katta raqamdan tashqari raqamni hisoblasangiz, JavaScript qaytariladigan qiymatdir.

// Misol
// let myNumber = 2;
// // Execute until Infinity
// while (myNumber != Infinity) {
//   myNumber = myNumber * myNumber;
// }
// 0 ga bo'linish (nol) ham hosil qiladi Infinity:

// Misol
// let x =  2 / 0;
// let y = -2 / 0;
// Infinityraqam: typeof Infinityqaytaradi number.

// Misol
// typeof Infinity;
// O'n oltilik
// JavaScript raqamli konstantalarni, agar ular oldida 0x bo'lsa, o'n oltilik deb izohlaydi.

// Misol
// let x = 0xFF;
// Hech qachon bosh nol bilan raqam yozmang (masalan, 07).
// Ba'zi JavaScript versiyalari, agar ular bosh nol bilan yozilgan bo'lsa, raqamlarni sakkizlik deb izohlaydi.

// Odatiy bo'lib, JavaScript raqamlarni 10 ta asosiy kasr sifatida ko'rsatadi.

// Lekin siz 2 ta bazadan 36 tagacha toString()raqamlarni chiqarish uchun usuldan foydalanishingiz mumkin .

// O'n oltilik - 16 asos . O'nlik - 10 asos . Sakkizlik 8 asos . Ikkilik asos 2 .

// Misol
// let myNumber = 32;
// myNumber.toString(32);
// myNumber.toString(16);
// myNumber.toString(12);
// myNumber.toString(10);
// myNumber.toString(8);
// myNumber.toString(2);


//==========================================


//// Math  

// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

// Raqamni butun songa yaxlitlashning 4 ta umumiy usuli mavjud:

// Math.round(x)	X ni eng yaqin butun songa yaxlitlangan holda qaytaradi
// Math.ceil(x)	X ni eng yaqin butun songa yaxlitlangan holda qaytaradi
// Math.floor(x)	X ni eng yaqin butun soniga yaxlitlangan holda qaytaradi
// Math.trunc(x)	x ning butun qismini qaytaradi ( ES6 da yangi )