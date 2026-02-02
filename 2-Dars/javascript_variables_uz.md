# JavaScript O'zgaruvchilari (Variables) - To'liq Qo'llanma

Ushbu qo'llanma JavaScript-dagi o'zgaruvchilarni **boshlang'ich (basic)** darajadan **ekspert** darajasigacha qamrab oladi.

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
