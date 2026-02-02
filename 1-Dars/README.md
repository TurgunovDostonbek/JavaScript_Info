# JavaScript: Tarix, Tabiat va Chuqur Tahlil

Ushbu hujjat JavaScript dasturlash tilining yaratilish tarixi, rivojlanish bosqichlari va uning qanday ishlashi haqida chuqur ma'lumot beradi.

## 1. Kirish
JavaScript — bu asosan veb-sahifalarga interaktivlik qo'shish uchun ishlatiladigan, yuqori darajadagi, interpretatsiya qilinadigan (yoki JIT-kompilyatsiya qilinadigan) dasturlash tili. U **HTML** va **CSS** bilan birga World Wide Web (WWW) ning uchta asosiy texnologiyasidan biridir.

---

## 2. Yaratilish Tarixi (1995-yil)

JavaScript 1995-yilda **Netscape Communications** korporatsiyasi tomonidan yaratilgan. O'sha paytda Netscape Navigator eng mashhur veb-brauzer edi.

### Asosiy Faktlar:
*   **Muallif:** Brendan Eich (Brendan Eyk).
*   **Vaqt:** 1995-yil may oyi.
*   **Muddat:** Bor-yo'g'i **10 kun** ichida prototipi yaratilgan!
*   **Maqsad:** "Scheme" tiliga o'xshash, lekin sintaksisi "Java"ga o'xshash, oddiy foydalanuvchilar va dizaynerlar uchun skript tili yaratish edi.

### Nomlarning O'zgarishi:
1.  **Mocha:** Loyihaning dastlabki kod nomi.
2.  **LiveScript:** 1995-yil sentyabrda Netscape Navigator 2.0 beta versiyasida shu nom bilan chiqarilgan.
3.  **JavaScript:** 1995-yil dekabrda marketing maqsadida nomi JavaScript ga o'zgartirilgan.
    *   *Nega Java?* O'sha paytda Java tili juda mashhur edi. Netscape Java mashhurligidan foydalanish uchun shunday nom qo'ygan. Aslida esa Java va JavaScript o'rtasida "Car" (mashina) va "Carpet" (gilam) so'zlari o'rtasidagi kabi bog'liqlik bor xolos (ya'ni deyarli yo'q).

---

## 3. Brauzerlar Urushi va Standartlashtirish

1996-yilda Microsoft o'zining Internet Explorer brauzeri uchun JavaScript'ning teskari muhandislik (reverse-engineered) nusxasini yaratdi va uni **JScript** deb nomladi.

Bu holat muammolarni keltirib chiqardi: veb-saytlar bir brauzerda ishlab, boshqasida ishlamasligi mumkin edi. Sanoatga standart kerak edi.

### ECMA International
1997-yilda Netscape tilni standartlashtirish uchun **ECMA International** tashkilotiga murojaat qildi.
*   **ECMAScript:** Bu tilning rasmiy standart nomi. JavaScript esa ushbu standartning eng mashhur amalga oshirilishi (implementatsiyasi) hisoblanadi (JScript va ActionScript kabi).
*   **TC39:** (Technical Committee 39) — bu ECMAScript standartini rivojlantiruvchi va yangi xususiyatlarni tasdiqlovchi qo'mita.

---

## 4. Versiyalar Evolyutsiyasi

JavaScript rivojlanishi bir necha bosqichlarga bo'linadi:

| Versiya | Yil | Tavsif |
| :--- | :--- | :--- |
| **ES1** | 1997 | Birinchi rasmiy standart. |
| **ES2** | 1998 | Kichik o'zgarishlar. |
| **ES3** | 1999 | Juda katta yangilanish (Regular Expressions, try/catch). 10 yil davomida asosiy versiya bo'lib qoldi. |
| **ES4** | - | *Bekor qilingan.* Juda murakkab o'zgarishlarni o'z ichiga olgani uchun tashlab ketilgan. |
| **ES5** | 2009 | "Strict mode" (qat'iy rejim), JSON qo'llab-quvvatlash, Array metodlari (forEach, map, filter). |
| **ES6 (ES2015)** | 2015 | **Eng katta inqilob.** `let`/`const`, Arrow functions, Classlar, Modullar, Promiselar va boshqalar qo'shildi. |
| **ES2016+** | Har yili | Endi har yili kichik yangilanishlar chiqadi (ES7, ES8 va h.k). |

---

## 5. JavaScript Qanday Ishlaydi? (Under the Hood)

JavaScript bu **High-level** (yuqori darajali) til, ya'ni biz xotira boshqaruvi (memory management) bilan to'g'ridan-to'g'ri shug'ullanmaymiz, buni "Garbage Collector" bajaradi.

### JavaScript Dvigatellari (Engines)
Brauzerlar JS kodini tushunishi uchun maxsus dvigatellardan foydalanadi:
*   **V8:** Google Chrome va Opera, hamda Node.js da ishlatiladi (C++ da yozilgan).
*   **SpiderMonkey:** Firefox (birinchi dvigatel, yangilangan).
*   **JavaScriptCore (Nitro):** Safari.

### Ishlash Tamoyili (JIT Compilation)
Dastlab JS faqat **interpretator** edi (kodni qator-ma-qator o'qib bajarish). Hozirgi zamonaviy dvigatellar (ayniqsa V8) **JIT (Just-In-Time) compilation** texnologiyasidan foydalanadi:
1.  Dvigatel kodni o'qiydi (Parsing).
2.  Uni mashina kodiga (machine code) kompilyatsiya qiladi.
3.  Tezkorlik bilan bajaradi va ish jarayonida kodni optimizatsiya qilib boradi.

### Asosiy Xususiyatlari
1.  **Single Threaded (Yagona oqim):** JS bir vaqtning o'zida faqat bitta ishni bajara oladi.
2.  **Non-blocking I/O & Event Loop:** Asinxron ishlarni (masalan, serverdan ma'lumot olish) orqa fonda bajarish va natija tayyor bo'lganda asosiy oqimga qaytarish imkoniyati. Bu JS ni juda tezkor qiladi.

---

## 6. JavaScript Imkoniyatlari

### Brauzerda nima qila oladi?
*   HTML sahifaga yangi elementlar qo'shish, o'zgartirish, o'chirish.
*   Foydalanuvchi harakatlariga (bosish, yozish) reaksiya bildirish.
*   Serverga so'rov yuborish va javob olish (AJAX/Fetch).
*   Cookie fayllarini o'qish va yozish.
*   Lokal xoturada (LocalStorage) ma'lumot saqlash.

### Brauzerda nima qila OLMAYDI? (Xavfsizlik uchun)
*   Foydalanuvchi kompyuteridagi fayllarni to'g'ridan-to'g'ri o'qish yoki yozish (faqat user ruxsati bilan input orqali mumkin).
*   Operatsion tizim dasturlarini ishga tushirish.
*   Boshqa tablar yoki saytlardan ma'lumot o'g'irlash (Same Origin Policy).

### Brauzerdan tashqarida
2009-yilda **Ryan Dahl** ismli muhandis V8 dvigatelini brauzerdan sug'urib olib, **Node.js** ni yaratdi. Bu JS ga server tomonida (backend), kompyuter dasturlarida va hatto robototexnikada ishlash imkonini berdi.

---

## Xulosa
JavaScript — bu 10 kunda yaratilgan oddiy skript tilidan bugungi kunda dunyodagi eng mashhur va talabgir dasturlash tiliga aylangan fenomenal texnologiya. Uning rivojlanishi to'xtagani yo'q va u har yili yangi imkoniyatlar bilan boyib bormoqda.


# Savolar...?

1.  **JavaScript o'zi nima va u asosan nima uchun ishlatiladi?**
2.  **JavaScript qaysi yilda va kim tomonidan yaratilgan?**
3.  **JavaScript dastlabki prototipi necha kunda ishlab chiqilgan?**
4.  **JavaScript yaratilgan paytda qaysi kompaniya homiylik qilgan?**
5.  **JavaScriptning rivojlanish davrida nomlari qanday o'zgargan? (Ketma-ketlikda ayting)**
6.  **Java va JavaScript tillari o'rtasida qanday bog'liqlik bor?**
7.  **JScript nima va u qaysi kompaniya tomonidan yaratilgan?**
8.  **ECMA International tashkilotining JavaScript rivojlanishidagi o'rni qanday?**
9.  **ECMAScript va JavaScript tushunchalari o'rtasidagi farq nima?**
10. **ES6 (ES2015) versiyasi nima uchun JavaScript tarixidagi eng katta inqilob deb ataladi?**
11. **JavaScript qanday turdagi til hisoblanadi (Low-level yoki High-level) va bu niman anglatadi?**
12. **JavaScript kodi brauzerda ishlashi uchun nima kerak bo'ladi va mashhur dvigatellarni (engines) sanab bering.**
13. **V8 dvigateli qaysi brauzerlarda va qayerda ishlatiladi?**
14. **Interpretatsiya va JIT (Just-In-Time) kompilatsiya o'rtasidagi farq qanday va zamonaviy JS dvigatellari qaysi biridan foydalanadi?**
15. **JavaScriptning "Single Threaded" (Yagona oqim) ekanligi nimani anglatadi?**
16. **Non-blocking I/O va Event Loop mexanizmlari JavaScriptga qanday ustunlik beradi?**
17. **Brauzerda ishlaydigan JavaScript qanday imkoniyatlarga ega? (Kamida 3 ta misol keltiring)**
18. **Xavfsizlik nuqtai nazaridan JavaScript brauzerda nimalarni qila olmaydi?**
19. **Node.js nima, u qachon yaratilgan va JavaScript imkoniyatlarini qanday kengaytirdi?**
20. **DOM (Document Object Model) nima va JavaScript u orqali qanday ishlaydi?**
