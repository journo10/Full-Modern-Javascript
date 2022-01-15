// Local Storage:
// localStorage icerisine bilgi kaydetmek:
let email = "akif@gmail.com";
localStorage.setItem("userEmail", email); // -> anahtar, deger yapisi kullanilir(key, value)

// localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak:
let localStorageEMailInfo = localStorage.getItem("userEmail"); // daha once atadigimiz anahtar bilgisi

console.log(localStorageEMailInfo);

// localStorage icerisinden istenilen Key bilgisinin silinmesi:
localStorage.removeItem("userEmail"); // key bilgisini yazarak silebiliriz..

// Eger tutacagimiz bilgi object ise JSON.stringify ile objeyi string yapiya cevirebiliriz.
let user = { userName: "Akif", isActive: true };
console.log(user);
localStorage.setItem("userInfo", JSON.stringify(user));

let userInfo = localStorage.getItem("userInfo"); // bilgiyi al
userInfo = JSON.parse(userInfo);
console.log(userInfo);

let items = [1, 2, 3, user];
// localStorage.setItem('newItems', items) // hatalidır...
localStorage.setItem("newItems", JSON.stringify(items));

let newItems = JSON.parse(localStorage.getItem("newItem")); //JSON Parse ile localStorage icindeki bilginin cekilip kullanilmasi..

//Uygulama
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.getElementById("item");
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

const liMaker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach((item) => {
  liMaker(item);
});

button.addEventListener("click", function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});
