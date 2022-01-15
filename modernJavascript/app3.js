// Dokumana(document) Yazdirma Islemi ile Merhaba Dunya:
// document.write('Merhaba Dunya');

// Uyari Mesaji (Alert) ile Merhaba Dunya:
// alert("Merhaba Dunya")

// console.log ile Merhaba Dunya:
console.log("Merhaba Dunya");

// var ile degisken tanimlamak
var serverName = "api.kodluyoruz.org";
console.log(serverName);

// let ile degiskene bilgi atamak:
serverName = "https://kodluyoruz.org";
console.log(serverName);

// let ile degiskene bilgi atayarak tanimlamak:
let password = "1234";
console.log(password);

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:
fullName = "Lorem Ipsum Dolor";
console.log(fullName);

// birlestirme veya ekleme islemi
fullName + "Yeni Eklenen Bilgi";
console.log(fullName + " Test Bilgisi");

fullName = fullName + " Yeni Bilgi";
fullName = "2: Bilgi : " + fullName;

fullName = "Sifirlandi";
fullName += " ve Yeni Bilgi Eklendi";
console.log(fullName);

// const ile degisken tanimlamak:
const SERVER_PASSWORD = "ojswdzqktr5079";
console.log(SERVER_PASSWORD);

// ********** Number Veri Turu ile Calismak **********
// number veri turu tanimlamak:
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
  "Fiyat:",
  price,
  "KDV Orani:",
  tax,
  "KDV Tutari:",
  priceTax,
  "Fiyat: ",
  total
);

let stringNumber = "193";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log(newNumber);
console.log("Number Constructor icine bilgi gonderildi:", Number("11"));

// arttirma ve azaltma islemleri:
let counter = 320;
counter = counter + 1; // uzun yontem
counter += 1;
counter++;
console.log(counter);

counter--;
counter -= 1;
console.log(counter);

counter *= 10;
console.log(counter);

counter /= 2;
console.log(counter);

// islem onceligi:
console.log(2 + 3 * 10); // 50 ???????????
console.log((2 + 3) * 10); // 50 ???????????

// mod(kalan) alma %:
console.log(17 % 2); // 0 ise cift, 1 ise tek

// 8 urun alan koliye tum urunler sigiyor mu ?
console.log("Koli Kalan Urun Ornegi: ", 18 % 8);

// us alma **:
console.log(2 * 2 * 2 * 2);
console.log(2 ** 4);

// asagi yuvarlama islemi -> Math.floor:
console.log("Asagi Yuvarlama:", Math.floor(1.9)); // -> 1

// yukari yuvarlama islemi -> Math.ceil :
console.log("Yukari Yuvarlama:", Math.ceil(1.9)); // -> 2

// yakina yuvarlama islemi -> Math.round :
console.log("Yakina Yuvarlama: ", Math.round(1.5)); // 1.4 ->1, 1.5 ->2

// ********** Boolean Veri Turu ile Calismak **********

// 0 ve 1'i Anlamak ->
let isActive = false; // 0
isActive = true; // 1
console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);

Boolean("11"); // true
Boolean("0"); // true
Boolean(""); // false

userName = "user";
console.log("User Name:", Boolean(userName));
Boolean(0); //  false
Boolean(-0); // false
Boolean(-0.1); // true
Boolean(0 === 0); // true
Boolean(userName.length > 0); // true
