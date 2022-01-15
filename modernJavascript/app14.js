// For Dongusu
let index = 0;

for (let index = 0; index < 10; index++) {
  console.log(index);
}

for (let i = 1; i < 5; i++) {
  console.log(i); // 1, 2, 3, 4
}

for (let i = 0; i < 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let users = ["Lorem", "Ipsum", "Dolor"];

const userListDOM = document.querySelector("#userList");

for (index = 0; index < users.length; index++) {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = users[index];
  userListDOM.appendChild(liDOM);
}

// Break & Continue Konusu
for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
  if (counter === 5) {
    break; //5'e gelince dur
  }
}

for (let counter = 0; counter < 10; counter++) {
  if (counter === 5) {
    continue; //5'i geç
  }
  console.log(counter);
}

for (var i = 0; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log("i:" + i);
}
console.log("Döngüden çıkıldı");

for (var i = 0; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log("i:" + i);
}
console.log("Döngüden çıkıldı");

for (var i = 0; i <= 10; i++) {
  console.log("dış döngü: " + i);
  for (var j = 0; j <= 5; j++) {
    if (j == 3) {
      break;
    }
    console.log("iç döngü" + j);
  }
}

cikis_etiketi: for (var i = 0; i <= 5; i++) {
  for (var j = 0; j <= 50; j++) {
    if (j == 9) {
      break cikis_etiketi;
    }
    console.log("iç döngüden j :" + j);
  }
}

gec_etiketi: for (var i = 0; i <= 5; i++) {
  for (var j = 0; j <= 4; j++) {
    if (j == 2) {
      continue gec_etiketi;
    }
    console.log("iç döngüden j :" + j);
  }
}

// While Dongusu
let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter++;
}

let userName = "";

while (!userName) {
  userName = prompt("Kullanici Adini Giriniz: ");
  console.log(userName);
}

// forEach Metotu=>
//Döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.
//forEach fonksiyonu item, index, array olmak üzere 3 parametre alabilir.
const animals = ["cat", "dog", "bird", "horse"];
animals.forEach((animal) => console.log(animal));

const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function (numbers) {
  newArray.push(numbers * 3);
});
console.log(newArray);

const PRODUCTS = [
  "Laptop",
  "Phone",
  "Speaker",
  "Desktop PC",
  "Server",
  "Mouse",
  "Keyboard",
];

PRODUCTS.forEach(
  (product, index, array) => (array[index] = `${product.toUpperCase()}`)
);
console.log(PRODUCTS);

const userListDOM1 = document.querySelector("#userList");

PRODUCTS.forEach((item) => {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = item;
  userListDOM1.append(liDOM);
});

//Filter Metodu => Dizi elemanlarını döngüye alıp istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır.
const products = [
  "Mikrofon",
  "Kablo",
  "Telefon",
  "Bilgisayar",
  "Mouse",
  "Klavye",
  "Ekran",
];

const newProducts = products.filter((eleman) => eleman.length > 5);
console.log(newProducts);

const users1 = [
  { fullName: "Mehmet Veli", isActive: false },
  { fullName: "Ali Duran", isActive: true },
  { fullName: "Ahmet Yılmaz", isActive: true },
  { fullName: "Oğuz Şahin", isActive: false },
];

const activeUsers = users1.filter((user) => user.isActive === true);
console.log(activeUsers);

const person = [
  {
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
  },
];

const newPreson = person.filter((p) => p.age > 30);
console.log(newPreson);

const newPersonJS = person.filter((p) => p.languages.includes("JavaScript"));
console.log(newPersonJS);

// map() =>Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir.
let meyveler = ["Kivi", "Muz"];
console.log(meyveler.length); // 2

let ilkMeyve = meyveler[0]; // Kivi
let sonMeyve = meyveler[meyveler.length - 1]; // Muz

const sayilar = [2, 3, 4, 5, 10];
const yeniArray = sayilar.map((deger) => {
  return deger * 2;
});
console.log(sayilar); //[2, 3, 4, 5, 10]
console.log(yeniArray); //[4, 6, 8, 10, 20]

const maaslar = [1100, 13000, 2500, 4500, 1500, 25000, 2000];
const yeniMaaslar = maaslar.map((e) => {
  if (e > 3000) {
    return e * 1.15;
  } else {
    return e * 1.25;
  }
});
console.log(yeniMaaslar);

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"];

const NEW_USERS = USERS.map((user) => user.toLowerCase());
console.log(NEW_USERS);
