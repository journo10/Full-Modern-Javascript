// ** Ilk Fonksiyonumuzu Tanimlamak:
function helloWorld() {
  console.log("Hello World");
}

function hello(name) {
  console.log("Merhaba " + name);
  helloWorld();
}
hello("Akif");

let sayi1 = 5;
let sayi2 = 2;
function addition() {
  let sayi3 = 3;
  let toplam = sayi1 + sayi2 + sayi3;
  return toplam;
}
let genelToplam = addition();
console.log(genelToplam);

const PI = 3.14;
function daireHesapla(r) {
  let sonuc = PI * r * r;
  return sonuc;
}
let donenSonuc = daireHesapla(5);
console.log(donenSonuc);

// ********** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridonus Almak **********

// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir

let firstName = "Lorem";

function greetings(firstName = "", lastName = "") {
  // default parametre aliyor
  // console.log(`Merhaba ${firstName ? firstName : ""}`)
  // console.log(`Merhaba ${firstName}`)
  console.log(`Merhaba ${firstName} ${lastName}`);
}

console.log(firstName); // degisken
greetings(); // fonksiyona parametre gondermedik ??
greetings("Parametre");

function greetings2(firstName, lastName) {
  let info = `Merhaba ${firstName} ${lastName}`;
  return info;
}

let greetingsInfo = greetings2("Ad", "Soyad");
// let info = "deneme" // ?????
console.log(greetingsInfo);

function domIdWriteInfo(id, info) {
  let domObject = document.querySelector(`#${id}`);
  domObject.innerHTML = info;
}

let htmlInfo = `<span style="color:red">Color REDDDD</span>`;

domIdWriteInfo("greeting", htmlInfo);
domIdWriteInfo("info", greetings2("Lorem", "Ipsum"));

//Uygulama
function Question(hobby) {
  switch (hobby) {
    case "car":
      return function (name) {
        console.log(name + " do you have a car ?");
      };
      break;

    case "book":
      return function (name) {
        console.log(name + " what is your favorite author?");
      };
      break;

    case "software":
      return function (name, type) {
        console.log(name + " are you interested in " + type + "?");
      };
      break;

    default:
      return function (name) {
        console.log(name + "  how are you ?");
      };
      break;
  }
}

var softwareQuestion = Question("software");
softwareQuestion("Cemre", "nodejs");
console.log(softwareQuestion);
