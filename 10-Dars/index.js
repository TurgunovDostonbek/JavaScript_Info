/// String

// JavaScript qatori tirnoq ichida yozilgan nol yoki undan ortiq belgilardir.

Misol
let text1 = "John Doe";

// Siz bitta yoki ikkita tirnoqdan foydalanishingiz mumkin:

Misol
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

// Agar ular satr atrofidagi tirnoqlarga mos kelmasa, qator ichida tirnoqlardan foydalanishingiz mumkin:

Misol
let answer1 = "It's alright";
// let answer2 = "He is called 'Johnny'";
// let answer3 = 'He is called "Johnny"';


// // Shablonlar ES6 (JavaScript 2016) bilan taqdim etildi.
// // Shablonlar orqaga tiklangan satrlardir (`Bu shablon qatori`).
// // Shablonlar satr ichida bitta va qo'sh tirnoqlarga ruxsat beradi:

// Misol
// let text2 = `He's often called "Johnny"`;

// Satr uzunligini topish uchun o'rnatilgan xususiyatdan foydalaning length:

// Misol
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// Qochish qahramonlari
// Satrlar tirnoq ichida yozilishi kerakligi sababli, JavaScript bu qatorni noto'g'ri tushunadi:

// let text = "We are the so-called "Vikings" from the north.";
// Ip "Biz atalmishmiz" ga kesiladi.

// Ushbu muammoni hal qilish uchun siz teskari chiziqli qochish belgisidan foydalanishingiz mumkin .

// Teskari chiziqli qochish belgisi ( \) maxsus belgilarni qator belgilarga aylantiradi:

// Code	Result	Description
// \'	'	Single quote
// \"	"	Double quote
// \\	\	Backslash
// Misollar
// \" satrga qo'sh tirnoq qo'yadi:

// let text = "We are the so-called \"Vikings\" from the north.";
// \' satrga bitta tirnoq qo'shadi:

// let text= 'It\'s alright.';
// \\ satrga teskari chiziq qo'yadi:

// let text = "The character \\ is called backslash."


// Odatda, JavaScript satrlari literallardan yaratilgan ibtidoiy qiymatlardir:

// let x = "John";
// Ammo satrlarni kalit so'z bilan ob'ektlar sifatida ham aniqlash mumkin new:

// let y = new String("John");
// Misol
// let x = "John";
// let y = new String("John");
// Strings obyektlarini yaratmang.

// Kalit newso'z kodni murakkablashtiradi va bajarish tezligini sekinlashtiradi.

// String ob'ektlari kutilmagan natijalarga olib kelishi mumkin:

// Operatordan foydalanganda ==x va y teng :

// let x = "John";
// let y = new String("John");
// Operatordan foydalanganda ===x va y teng emas :

// let x = "John";
// let y = new String("John");
// (x==y)va o'rtasidagi farqga e'tibor bering (x===y).

// (x == y)To'g'ri yoki noto'g'ri?

// let x = new String("John");
// let y = new String("John");
// (x === y)To'g'ri yoki noto'g'ri?

// let x = new String("John");
// let y = new String("John");
// Ikki JavaScript ob'ektini solishtirish har doim noto'g'ri qaytaradi .

// Toʻliq string maʼlumotnomasi
// To'liq String ma'lumotnomasi uchun bizning sahifamizga o'ting:

// To'liq JavaScript string ma'lumotnomasi .

// Ma'lumotnomada barcha string xususiyatlari va usullarining tavsiflari va misollari mavjud.

// Mashqlar bilan o'zingizni sinab ko'ring
// Mashq:
// lengthning uzunligini ogohlantirish uchun xususiyatdan foydalaning txt.

// let txt = "Salom Dunyo!";
// x = bo'lsin
// ;
// ogohlantirish (x);