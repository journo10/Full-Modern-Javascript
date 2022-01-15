//Javascript Giriş
console.log("Merhaba Javascript");
console.log(true);
console.log([1, 2, 3, 4, 5]);
console.error("Bilinmeyen bir hata oluştu.");
console.warn("Bir uyarınız var.");
console.clear(); //consol tümü silme

//Değişkenler var,let,const
var age = 21;
console.log(age);
let city = "İstanbul";
console.log(city);
const email = "abc@gmail.com"; //Sabit
console.log(email);
email = "def@gmail.com";
console.log(email); //Yukarıda const ile yaptığın için hata verir.

//Değişken Tipleri
//1-Primitive Types
//String
let name1 = "Akif";
//Number
let age1 = 25;
console.log(typeof age1);
//Boolean
let isActive = false;
//Null
let job = null;
//Undefined
let car;
console.log(typeof car);

//2-Reference Types -Objects
//Array
let names = ["Akif", "Ceyhun", "Cihan"];
//Object
let address = {
  city1: "İstanbul",
  country: "Türkiye",
};
//Function
var calculateAge = function () {
  return 0;
};

console.log(typeof calculateAge);

//Javascript Tür Dönüşümü
let val;
//number to string
val = String(10);
//boolean to string
val = String(true);
//date to string
val = String(new Date().getFullYear());
//array to string
val = String([1, 2, 3, 4, 5]);

//toString => kısa yol string
val = (11).toString();
val = false.toString();

//String to number
val = Number("11");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("a");
val = Number([1, 2, 3, 4, 5]);

//parseInt, parseFloat
val = parseInt("10");
val = parseInt("10.5");
val = parseFloat("10.5");

console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));

let order1 = Number("100");
let order2 = Number("150");

let total = order1 + order2;
console.log(total);

const yearOfBirth = 1993;
let age0 = new Date().getFullYear() - yearOfBirth;
console.log(age0);
