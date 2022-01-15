// DOM
// pathname
console.log(document.location.pathname);

// head icindeki bilgiler
console.log(document.head);

// body icindeki bilgiler
console.log(document.body);

// url bilgisi
console.log(document.URL);
console.log(document.baseURI);

// document icerisinde style bilgilerini degistirmek:
document.body.style.backgroundColor = "yellow";

// ********** DOM Icinden Oge Secimi **********
let title = document.getElementById("title");
title.innerHTML = "BİLGİ DEĞİŞTİ";
console.log(title.innerHTML);

let link = document.querySelector("#kodluyoruzLink");
link.innerHTML += " Değişti...";
link.style.color = "blue";

link.classList.add("btn");

// ********** prompt ile Kullanicidan Bilgi Almak **********
let fullName = prompt("Adinizi Giriniz: ");

let greeting = document.querySelector("#greeting");

greeting.innerHTML = `${greeting.innerHTML} <bold style="color:red">${fullName}</bold>`;

// ********** css class eklemek veya cikartmak **********
greeting.classList.add("text-primary");
greeting.classList.add("title");
greeting.classList.add("new-info", "second-class", "third-class"); // birden fazla class eklemek

greeting.classList.remove("title", "second-class", "third-class"); // birden fazla class silmek

console.log(greeting.classList);

// ********** Karsilastirma Operatorleri ve Mantiksal Operatorler **********
let price1 = "0";
let user1 = "akif";

// == Eşitse
console.log("== :", price1 == 1);
console.log("== :", price1 == 100);

// === Hem değeri hem de türü eşitse
console.log("=== :", price1 === 1);
console.log("=== :", price1 === 100);

// != Eşit değilse
console.log(user1 != "guest");

// < Küçükse
console.log("price < 100", price1 < 100);

// <= Küçük veya eşitse
console.log("price <= 100", price1 <= 100);

// > Büyükse
console.log("price > 200", price1 > 200);

// >= Büyük veya eşitse
console.log("price >= 100", price1 >= 100);

// && ve
price = 0;
console.log(price > 0 && user1 != "guest");

// || veya
console.log(price > 0 || user1 != "guest");

// ! degil (tersi)
user1 = "guest";
price2 = 1;
console.log(price2 > 0 && !user1 == "guest");
