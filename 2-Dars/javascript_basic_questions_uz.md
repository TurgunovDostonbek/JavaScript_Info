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
