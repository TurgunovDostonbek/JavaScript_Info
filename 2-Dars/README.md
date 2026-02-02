# JavaScript O'zgaruvchilari (Variables) - To'liq Qo'llanma

---

## 1. Boshlang'ich Daraja (Basic)

### O'zgaruvchi nima?
O'zgaruvchi – bu ma'lumotni saqlash uchun mo'ljallangan "idish" yoki nomlangan quti. Dasturlashda biz ma'lumotlarni (sonlar, matnlar, va h.k.) keyinchalik ishlatish uchun o'zgaruvchilarga yuklaymiz.

### O'zgaruvchi yaratish (Declaration)
JavaScript-da o'zgaruvchi yaratishning 3 ta usuli bor: `var`, `let`, va `const`.

#### 1. `let`
Hozirgi zamonaviy JavaScript-da o'zgaruvchi yaratishning tavsiya etilgan usuli.
`let` bilan yaratilgan o'zgaruvchining qiymatini keyinchalik **o'zgartirish mumkin**.

```javascript
let message = "Salom";
console.log(message); // Salom

message = "Xayr"; // Qiymatni yangiladik
console.log(message); // Xayr
```

#### 2. `const`
`const` (constant - o'zgarmas) – bu o'zgarmas qiymatlar uchun.
`const` bilan yaratilgan o'zgaruvchining qiymatini **qayta tayinlab bo'lmaydi**.

```javascript
const pi = 3.14;
// pi = 5; // Xatolik beradi! (Assignment to constant variable)
```

**Qoida:** Agar o'zgaruvchining qiymati o'zgarmasligiga amin bo'lsangiz, doim `const` ishlating.

#### 3. `var`
Eski usul. Hozirgi kunda deyarli ishlatilmaydi, lekin eski kodlarda uchrashi mumkin. `let` ga o'xshash, lekin ba'zi nozik farqlari bor (buni quyida ko'ramiz).

### Nomlash Qoidalari
O'zgaruvchilarga nom berishda quyidagilarga amal qilish kerak:
1. Nom **harf**, **$** yoki **_** bilan boshlanishi mumkin. Raqam bilan boshlanib bo'lmaydi.
2. `let 1stPlace` - ❌ Xato.
3. `let firstPlace` - ✅ To'g'ri.
4. Katta-kichik harflar farqlanadi (`Apple` va `apple` boshqa-boshqa o'zgaruvchilar).
5. Zaxiralangan so'zlarni ishlatmang (masalan: `let`, `class`, `return`, `function`).
6. **CamelCase** uslubidan foydalaning: `myVariable`, `userName`.

---

## 2. O'rta Daraja (Intermediate)

### Variable Scope (O'zgaruvchi Qamrovi)
Scope – bu o'zgaruvchining qaysi qismda "ko'rinishi" yoki ishlatilishi mumkinligini belgilaydi.

#### 1. Block Scope (`let` va `const`)
`{ ... }` (jingalak qavslar) ichida `let` yoki `const` bilan yaratilgan o'zgaruvchi faqat shu blok ichida mavjud bo'ladi.

```javascript
{
  let x = 10;
  console.log(x); // 10
}
// console.log(x); // Xatolik: x is not defined
```

`if`, `for`, `while` bloklari ham shunga kiradi.

#### 2. Function Scope (`var`)
`var` blokni mensimaydi, u faqat funksiya ichida chegaralanadi.

```javascript
if (true) {
  var test = "Men ko'rinaman";
}
console.log(test); // "Men ko'rinaman" (let bo'lganda ko'rinmas edi)

function sayHi() {
  var hello = "Salom";
}
// console.log(hello); // Xatolik: hello is not defined (chunki funksiya ichida)
```

### Mutability (O'zgaruvchanlik): Primitive vs Reference
`const` primitiv turlar (son, string) uchun qat'iy ishlaydi, lekin **Object** va **Array** (Reference types) uchun biroz boshqacha.

```javascript
const user = { name: "Ali" };

// user = { name: "Vali" }; // Xatolik! Qayta tayinlash mumkin emas.

// LEKIN, ichidagi xususiyatni o'zgartirish mumkin:
user.name = "Vali"; 
console.log(user.name); // Vali (Ishlaydi!)
```
**Sababi:** `user` o'zgaruvchisi obyektning o'zini emas, uning xotiradagi **manzilini** (reference) saqlaydi. Manzil o'zgarmadi, lekin uyning ichidagi narsalar o'zgarishi mumkin.

### Shadowing (Nomlarning to'silishi)
Agar ichki blokda tashqi blokdagi bilan bir xil nomli o'zgaruvchi e'lon qilinsa, ichki o'zgaruvchi tashqisini "to'sib qo'yadi" (shadow).

```javascript
let count = 20;

function show() {
  let count = 50; // Yangi o'zgaruvchi, tashqisiga aloqasi yo'q
  console.log(count); // 50
}
show();
console.log(count); // 20
```

---

## 3. Ekspert Daraja (Expert)

### Hoisting (Ko'tarilish)
JavaScript kodi ishga tushishdan oldin, barcha o'zgaruvchi e'lonlari (declarations) o'z scope-ining tepasiga "ko'tariladi". 

#### `var` Hoisting
`var` e'lon qilinganda `undefined` qiymati bilan tepaga ko'tariladi.

```javascript
console.log(a); // undefined (Xatolik emas!)
var a = 5;
console.log(a); // 5
```
Aslida JavaScript buni shunday tushunadi:
```javascript
var a;        // Declaration tepaga chiqdi
console.log(a);
a = 5;        // Initialization joyida qoldi
```

#### `let` va `const` Hoisting (TDZ)
`let` va `const` ham hoisting bo'ladi, lekin ular **Temporal Dead Zone (TDZ)** ga tushadi.

```javascript
// TDZ boshlandi
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10; // TDZ tugadi
```
Ular xotirada joy ajratilgan bo'lsa ham, kod qatori kelmaguncha ularga murojaat qilib bo'lmaydi.

### Execution Context va Scope Chain
Har safar funksiya chaqirilganda **Execution Context** yaratiladi. U quyidagilarni o'z ichiga oladi:
1. **Variable Environment**: O'sha funksiyadagi lokal o'zgaruvchilar.
2. **Scope Chain**: O'zgaruvchi qidirilayotganda, agar lokalda topilmasa, tashqi kontekstga chiqib qidirish zanjiri.
3. **`this`** qiymati.

Example:
```javascript
let globalVar = "Global";

function outer() {
  let outerVar = "Outer";
  
  function inner() {
    let innerVar = "Inner";
    console.log(innerVar); // O'zida bor
    console.log(outerVar); // Scope Chain orqali outer() dan topadi
    console.log(globalVar); // Scope Chain orqali global dan topadi
  }
  inner();
}
```

### Global Object Pollution
Global scope-da (funksiya yoki blok tashqarisida) `var` bilan o'zgaruvchi yaratsangiz, u `window` (browser-da) obyektining xususiyatiga aylanadi.

```javascript
var g = "Men globalman";
console.log(window.g); // "Men globalman"

let l = "Men emasman";
console.log(window.l); // undefined
```
Bu katta loyihalarda nomlar to'qnashuviga olib kelishi mumkin, shuning uchun `let` va `const` xavfsizroq.

### Xulosa
1. Doim **`const`** ishlating.
2. Agar qiymat o'zgarishi kerak bo'lsa, **`let`** ishlating.
3. **`var`** dan voz keching.
4. Scope va Hoisting tushunchalarini biling, bu qiyin buglarni oldini oladi.


# JavaScript O'zgaruvchilari - Boshlang'ich Darajadagi 20 ta Savol

---

### Savollar

1. **O'zgaruvchi (Variable) o'zi nima?**
2. **JavaScript-da o'zgaruvchi yaratishning qanday 3 ta usuli bor?**
3. **`let` va `const` o'rtasidagi asosiy farq nima?**
4. **`var` kalit so'zi hozirgi kunda nega kam ishlatiladi?**
5. **O'zgaruvchi nomida qanday belgilar ishlatsa bo'ladi?**
6. **O'zgaruvchi nomi raqam bilan boshlanishi mumkinmi?**
7. **CamelCase yozish uslubi nima?**
8. **Qiymat tayinlanmagan o'zgaruvchining qiymati nima bo'ladi (null mi yoki undefined)?**
9. **`const` bilan e'lon qilingan o'zgaruvchiga keyinchalik yangi qiymat berish mumkinmi?**
10. **JavaScript-da o'zgaruvchilarning turlari (data types) qat'iy belgilanganmi (statically typed) yoki dinamikmi?**
11. **"Declaration" (e'lon qilish) va "Assignment" (qiymat berish) o'rtasida qanday farq bor?**
12. **`let x = 5;` va `x = 10;` yozuvlari o'rtasidagi farq nima?**
13. **Zaxiralangan so'zlar (Reserved words) nima va ularni o'zgaruvchi nomi sifatida ishlatsa bo'ladimi?**
14. **Agar biz `let` o'rniga hech qanday kalit so'z ishlatmasdan o'zgaruvchi yaratsak (masalan `a = 5;`), nima sodir bo'ladi?**
15. **Case-sensitive (katta-kichik harfga sezgirlik) nima degani? `Age` va `age` bir xilmi?**
16. **Bir vaqtning o'zida bir nechta o'zgaruvchini bitta qatorda e'lon qilish mumkinmi?**
17. **`const` bilan o'zgaruvchi yaratganda unga darhol qiymat berish shartmi?**
18. **String (matn) turidagi o'zgaruvchi qanday yaratiladi?**
19. **O'zgaruvchining qiymatini boshqa o'zgaruvchiga nusxalash mumkinmi?**
20. **`alert(x)` nima vazifani bajaradi?**

---

### Javoblar

1. **Javob:** O'zgaruvchi bu ma'lumotlarni saqlash uchun xotiradan ajratilgan nomlangan joy (idish).
2. **Javob:** `var`, `let`, `const`.
3. **Javob:** `let` qiymatini o'zgartirish mumkin, `const` (constant) qiymatini esa o'zgartirib bo'lmaydi (o'zgarmas).
4. **Javob:** `var` eski usul bo'lib, u blok scope-ga amal qilmaydi va hoisting bilan bog'liq muammolar chiqarishi mumkin.
5. **Javob:** Harflar, raqamlar, `$` va `_` belgilari.
6. **Javob:** Yo'q, o'zgaruvchi nomi raqam bilan boshlana olmaydi.
7. **Javob:** Birinchi so'z kichik harf bilan, keyingi har bir so'z katta harf bilan boshlanishi (masalan: `myVariableName`).
8. **Javob:** `undefined` bo'ladi.
9. **Javob:** Yo'q, mumkin emas. Xatolik beradi.
10. **Javob:** Dinamik. O'zgaruvchining turi unga yuklangan qiymatga qarab o'zgarishi mumkin.
11. **Javob:** "Declaration" bu o'zgaruvchini yaratish (`let x;`), "Assignment" bu unga qiymat yuklash (`x = 5;`).
12. **Javob:** Birinchisida yangi o'zgaruvchi yaratilyapti va qiymat berilyapti. Ikkinchisida mavjud o'zgaruvchining qiymati yangilanyapti.
13. **Javob:** Tilning o'z qoidalari uchun ishlatiladigan so'zlar (masalan `if`, `for`, `class`). Ularni o'zgaruvchi nomi sifatida ishlatib bo'lmaydi.
14. **Javob:** U global o'zgaruvchiga aylanib qoladi (agar "use strict" rejimi yoqilmagan bo'lsa). Bu tavsiya etilmaydi.
15. **Javob:** Ha, JavaScript katta-kichik harflarni farqlaydi. `Age` va `age` ikki xil o'zgaruvchi hisoblanadi.
16. **Javob:** Ha, vergul bilan ajratib yozish mumkin. Masalan: `let a = 1, b = 2, c = 3;`.
17. **Javob:** Ha, `const` e'lon qilinganda unga darhol qiymat berilishi shart.
18. **Javob:** Qo'shtirnoq (`""`), bittalik tirnoq (`''`) yoki backtick (`` ` ``) ichida yoziladi. Masalan: `let name = "Ali";`.
19. **Javob:** Ha, `let y = x;` ko'rinishida nusxalash mumkin.
20. **Javob:** `x` o'zgaruvchisining qiymatini brauzerda ogohlantirish oynasi (popup) sifatida chiqarib beradi.
