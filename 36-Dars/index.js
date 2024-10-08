// JSON data,  Callback Hell,

/// AJAX kengaytmasi => Asinxron javascript and XML
/// AJAX bizga serverlar bilan asinxron yol bilan bog'lanish imkonini beradi.
/// AJAX chaqiruvlar bilan biz serverga dinamik tarzda bo'lanib malumot olishimiz mumkin.
/// Request so'rov..
/// Respons javob..

/// Request turlari GET,POST...
/// WEB API..
/// API => Application Programming Language...

// =============================================

// HTTPRequest

// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         // console.log(request);
//         if (request.readyState == 4 && request.status == 200) {
//             const data = JSON.parse(request.responseText)
//             callback(undefined, data);
//         } else if (request.readyState == 4) {
//             callback("Malumotni olishni iloji bo'lmadi !!!!!", undefined);
//         }
//     });

//     // open
//     request.open("GET", "todos.json");

//     // send
//     request.send();
// };

// getTodos((err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });



// HTTP Request JSON Data ...

const request = new XMLHttpRequest()
const getTodos = (callback) => {
    request.addEventListener("readystatechange", () => {
        // console.log(request);
        if(request.readyState === 4  && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(data);
        }else if(request.readyState === 4){
            callback("Qandaydir hatolik yuz berdi  !!!!!");
        }
    })
}
// open
request.open("GET", "./todos.json")

// send
request.send()

getTodos((data,err) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})