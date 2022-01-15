// Object(Nesne)
let arrayObj = [1, 2, 3];
let object1 = { obj: 1 };

console.log("arrayObj", typeof arrayObj);
console.log("object1", typeof object1);

let item1 = new Object();
let item2 = {};
console.log("item1", typeof item1);
console.log("item2", typeof item2);

// Object olusturmak
let item3 = {};
let item4 = new Object();

console.log("object1", object1);

// Object Key - Value:
let laptop1 = {
  brand: "Apple",
  model: "MacBook Pro",
  "2kg": 2,
  modelName: "MacBook Pro",
  model_name: "MacBook Pro",
};

console.log(laptop1);

console.log(laptop1.brand, laptop1["brand"]);
console.log(laptop1.model, laptop1["model"]);
console.log(laptop1["2kg"]);

laptop1.brand = "Mac"; // Anahtar bilgisine yeni deger eklemek
laptop1["brand"] = "Mac1";
console.log(laptop1);

// Yeni Bilgi Eklemek
laptop1.version = "10.15.7";
console.log(laptop1);

// Anahtar Bilgilerine Ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1);
console.log(keys);
console.log(Object.keys(laptop1));

keys.forEach((keyInfo) => {
  console.log(keyInfo);
  console.log(laptop1[keyInfo]);
});

// Deger Bilgilerine Ulasmak (values) -> Object.values(item)
console.log(Object.values(laptop1));

let values = Object.values(laptop1);

values.forEach((value) => {
  console.log("value: ", value);
});

let person5 = {
  name: "Jack",
  age: 20,
};

document.getElementById("info").innerHTML = JSON.stringify(person5);
// Bu objenizi bir stringe çevirip demo idsine basacaktır.

let stringObject = JSON.stringify(person5);

let newPerson = JSON.parse(stringObject);
// parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir

// Object icinde metot nasil ekleme
let user1 = {
  firstName: "Bilgin",
  lastName: "Uzman",
  score: [1, 2, 3, 4],
  isActive: true,
  shortName: function () {
    return `${this.firstName[0].toUpperCase()}. ${this.lastName}`;
  },
};
console.log(user1);
console.log(user1.shortName);

var person6 = {
  name: "Akif",
  surname: "ceyhun",
  age: 23,
  introduce: () => {
    return `My name is ${this.name}  ${this.surname}, I'm ${this.age} yo.`;
  },
};
console.log(person6.introduce());

// Object ve Array Destructuring
//Normal
const foo = { a: 123, b: true };
const a = foo.a;
const b = foo.b;
console.log("a:" + a, "b:" + b);

// Object Destructuring:
const foo0 = { a1: 123, b1: true };
const { a1, b1 } = foo0;
console.log("a1:" + a1, "b1:" + b1);

const cikarma = ({ sayi1, sayi2 }) => {
  let sonuc = sayi1 - sayi2;
  console.log(sonuc);
  return;
};

const sayilar = {
  sayi2: 3,
  sayi1: 5,
};
cikarma(sayilar);

let settings = {
  userName: "loremIpsum",
  password: "BadPassword",
  isActive: false,
  ip: "127.0.0.1",
  serverName: "kodla",
};
let userName = settings.userName;
console.log(userName);

// rename && destructuring
let { userName: user, password, isActive, ip: serverIP, serverName } = settings;

console.log(user, password, isActive, serverIP, serverName);
console.log(settings);
console.log(user);

// obje icindeki bazi bilgilerin cikarilmasi
let {
  userName: userName2,
  password: password2,
  isActive: isActive2,
  ...newSettings
} = settings;
// eger degisken ismi daha once tanimlanmadiysa:
let { userName0, password0, isActive0, ...newSettings0 } = settings;

console.log(userName2, password2, isActive2, newSettings);

// objenin destructuring ile kopyalanmasi
let settings2 = { ...settings };
settings2.userName = "Degisen Bilgidir...";
console.log("settings", settings);
console.log("settings2", settings2);

let score = [100, 200, 300, 400];

let [score1, score2, ...otherScore] = score;
console.log(score1, score2, otherScore);

// object kopyalama ile ayni... let settings2 = {...settings}
let copyOfScore = [...score];
console.log(copyOfScore);

const toplama = ({ sayi1, sayi2, ...args }) => {
  let sonuc = sayi1 + sayi2;
  for (let sayi in args) {
    sonuc += args[sayi];
    console.log(sonuc);
  }
  return sonuc;
};
const sayilar2 = {
  sayi1: 8,
  sayi2: 4,
  sayi3: 7,
  sayi4: 9,
  sayi5: 11,
};
toplama(sayilar2);
