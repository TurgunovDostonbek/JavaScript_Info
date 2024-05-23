// Map and Set, WeekMap and WeekSet...

// Map => new Map bu bizga object yasab beradi (yanni new map da ikkita object va map boladi), 

// let obj = {}
// let map = new Map()

// obj.name = "Algoritm"
// map.name = "Algoritm"  // bu yerda map objectlar bilan bir hilda ishlaydi lekin mapga malumot biriktirish uchun set() qilib biriktiriladi..
// map.set("name", "Webbrain" ) 


// console.log(obj);
// console.log(map);
// console.log(map.get("name")); // mapdan mallumotlaeni get qilib olinadi.. objectlarda esa dod(.) bilan olinadi..

  // new Map ning ozini forEach chi bor yanni new Mapni farEach qilib boladi lekin map qilib bolmaydi.
  // mapni haqqiqiy obejectga aylantirish, =>   (Object.fromEntries(map))..

//////////////////////////////////////////////////////////// 

/// new Set => new Set bu value colection yani bitta qiymatdan iborat colection 

// let obj = {name: "Algoritm"}
// let set = new Set()
// set.add(obj)  // new Setda malumotlar add qilib qoshiladi..


// console.log(set);

/// WeekMap and WeekSet deyarli map bilan set singari faqat bularda garbch colection bor bo'lib weekmap va weekset ishlatilsa hepdagi malumotlar ochib ketadi


// let map = new Map([
//     ["name", "webbrain"],
//     ["title", "IT Center"]
// ])
// map = null

// console.log(map);


// let Wmap = weakMap([
//     ["name", "webbrain"],
//     ["title", "IT Center"]
// ])

// console.log(Wmap);




