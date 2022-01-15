// hata-yonetimi-icin-try-catch-kullanimi
//Kullanımı
try {
  //Çalıştırılacak kodlar
} catch (hata) {
  //Hata yakalandığında çalışacak kodlar
} finally {
  //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
}

let products;

try {
  products.forEach((item) => console.log(item));
} catch (error) {
  console.log("error:", error);
}
console.log("hata yonetimi duzgun calisiyor....");

// fetch api

//*fetch() => bu yöntem bir kaynak almak için kullanılır.
//*Headers => response/request başlıklarını temsil ederek bunları sorgulamanıza ve sonuçlara bağlı olarak farklı eylemler gerçekleştirmenize olanak tanır.
//*Request => bir kaynak talebini temsil eder.
//*Response => bir isteğe verilen yanıtı temsil eder.

//Kullanımı
// fetch(url).then( function() {})

//// GET İsteği
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json()) //parse json data
  .then(function (todos) {
    todos.forEach((todo) => {
      console.log(todo.title);
    });
  });

// POST isteği
let payload = {
  title: "Blog Title",
  body: "lorem ipsum",
  userId: 1,
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(payload),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

//Uygulama
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => json.forEach((item) => console.log(item.email)))
  .catch((err) => console.log(err));

//Uygulama 2
let userListDOM = document.querySelector("#userList");
// API uzerinden veri cektik
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((responseJson) => {
    responseJson.forEach((item) => {
      console.log(item);
      let liDOM = document.createElement("li");
      liDOM.innerHTML = item.title;
      userListDOM.appendChild(liDOM);
    });
  });
