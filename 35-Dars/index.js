// AJAX va API and HTTP Request....

/// AJAX kengaytmasi => Asinxron javascript and XML
/// AJAX bizga serverlar bilan asinxron yol bilan bog'lanish imkonini beradi.
/// AJAX chaqiruvlar bilan biz serverga dinamik tarzda bo'lanib malumot olishimiz mumkin.
/// Request so'rov..
/// Respons javob..

/// Request turlari GET,POST...
/// WEB API..
/// API => Application Programming Language...

// =============================================

/// HTTP Request  ......

// const request = new XMLHttpRequest()

// request.addEventListener("readystatechange", () => {
//     // console.log(request, request.readyState);
//     if(request.readyState === 4){
//         console.log(request.responseText);
//     }
// })

// // open
// request.open("GET", "https://jsonplaceholder.typicode.com/todos");

// // send
// request.send()

// HTTPRequest

const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        // console.log(request);
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if (request.readyState == 4) {
            callback("Malumotni olishni iloji bo'lmadi !!!!!", undefined);
        }
    });

    // open
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

    // send
    request.send();
};

getTodos((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
