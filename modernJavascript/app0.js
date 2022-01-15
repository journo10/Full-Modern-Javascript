//Operatörler
let val;
const sayi1 = 10;
const sayi2 = 5;
const sayi4 = 5;
let sayi3 = 7;

//1-Aritmetik Operatörler
val = sayi1 + sayi2;
val = sayi1 - sayi2;
val = sayi1 * sayi2;
val = sayi1 / sayi2;
val = sayi1 % sayi2;
val = sayi3++;
val = ++sayi3;
val = --sayi3;
val = sayi3--;

//2-Atama Operatörleri
val = sayi1;
val += sayi1; //val=val+sayi1
val -= sayi1; //val=val-sayi1
val *= sayi1; //val=val*sayi1
val /= sayi1; //val=val/sayi1
val %= sayi1; //val=val%sayi1

//3-Karşılaştırma Operatörleri
val = sayi1 == sayi2;
val = sayi2 == sayi4;
val = sayi2 === sayi4; //Hem değer kontrolü hem de tip kontrolü yapar.
val = sayi1 != sayi2;
val = sayi1 !== sayi2;
val = sayi1 > sayi2;
val = sayi1 < sayi2;
val = sayi1 >= sayi2;
val = sayi1 <= sayi2;

//4-Mantıksal Operatörler
// && (And)
//true && true =>true
//true && false =>false
//false && false =>false
val = sayi1 > sayi2 && sayi1 > sayi4;

// || (Or)
//true && true =>true
//true && false =>true
//false && false =>false
val = sayi1 > sayi2 || sayi1 < sayi4;

// ! (Not)
val = !(sayi1 > sayi2);

console.log(val);
console.log(typeof val);

// Uygulama

let IndexCan;
let IndexAda;

const kgCan = 60;
const kgAda = 40;

const heigtCan = 1.7;
const heigtAda = 1.5;

IndexAda = kgAda / (heigtAda * heigtAda);
IndexCan = kgCan / (heigtCan * heigtCan);

console.log(IndexAda.toFixed(2), IndexCan.toFixed(3));

//toFixed => Ondalıklı sayılaları tam sayı yapar.17,8888 = 17 yapar.

let adaHigherIndex = IndexAda > IndexCan;
let canHigherIndex = IndexCan > IndexAda;

console.log(
  "Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük : " + adaHigherIndex
);

console.log(
  "Can'ın kilo indeksi ada'nın kilo indeksinden daha büyük : " + canHigherIndex
);

let AdaZayif = IndexAda >= 0 && IndexAda <= 18.4;
let AdaNormal = IndexAda >= 18.5 && IndexAda <= 24.9;
let AdaKilolu = IndexAda >= 25 && IndexAda <= 29.9;
let AdaSisman = IndexAda >= 30 && IndexAda <= 34.9;

console.log("Ada zayıf :" + AdaZayif);
console.log("Ada'nın kilosu normal : " + AdaNormal);
console.log("Ada kilolu mu : " + AdaKilolu);
console.log("Ada şişman mı : " + AdaSisman);
