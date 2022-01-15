// ********** Kosullarla Calismak **********

let username = prompt("Kullanici Adinizi Giriniz:");
if (username.length > 0) {
  // if kismi her zaman true ise calisir
  console.log(`Kullanici Bilginiz ${username}`);
} else {
  console.log("bilgi yok");
}

//Uygulama, vize final not ortalamsı hesaplama
let vizeNot = prompt("Vize Notunuzu giriniz.");
let finalNot = prompt("Final Notunuzu giriniz.");
let ortalama = (vizeNot * 40) / 100 + (finalNot * 60) / 100;

if (ortalama >= 0 && ortalama <= 30) {
  console.log("Not Ortalamsı: " + ortalama + " Kaldı:FF");
} else if (ortalama >= 31 && ortalama <= 49) {
  console.log("Not Ortalamsı: " + ortalama + " Koşullu:DC");
} else if (ortalama >= 50 && ortalama <= 75) {
  console.log("Not Ortalamsı: " + ortalama + " Geçti:BB");
} else if (ortalama >= 75 && ortalama <= 100) {
  console.log("Not Ortalamsı: " + ortalama + " Geçti:AA");
} else {
  console.log("Sınava girmedi...");
}

// ********** Coklu Kosullarla Calismak **********
let userName = prompt("Kullanici Adiniz:");
let age = prompt("Yasiniz:");
let info = document.querySelector("#info");

if (userName && age >= 18) {
  info.innerHTML = "Ehliyet alabilirsiniz";
} else if (!userName) {
  info.innerHTML = "Kullanici Adiniz Yok";
} else if (!(age >= 18)) {
  info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz";
}

switch (ifade) {
  case a:
    // kod bloğu
    break;
  case b:
    // kod bloğu
    break;
  default:
  // kod bloğu
}

//Uygulama
let hava = "Gunesli";
switch (hava) {
  case "Yagmurlu":
    console.log("Semsiyeni yanina almayi unutma");
    break;
  case "Gunesli":
    console.log("Hafif giyin");
  case "Bulutlu":
    console.log("Disari cik");
    break;
  case "Karlı":
    console.log("Kalin giyin");
    break;
  case "Firtinali":
    console.log("Bir süre disari cikma");
    break;
  default:
    console.log("Bilinmeyen hava durumu:", hava);
}

//Uygulama 2
let islem = function (a, b, operator) {
  switch (operator) {
    case "topla":
      return a + b;
      break;
    case "cikar":
      return a - b;
      break;
    case "carp":
      return a * b;
      break;
    case "bol":
      return a / b;
      break;
    default:
      return "Tanimlanmamis islem";
      break;
  }
};
console.log(islem(45, 17, "topla"));
console.log(islem(11, 5, "mod"));

// ********** ternary operator ile short if kullanimi **********
// ternary kullanimi: kosul ? dogruysa : yanlissa
let userName1 = prompt("Kullanici Bilginiz Yaziniz");
let info1 = document.querySelector("#info1");

info1.innerHTML = `${userName1 ? userName1 : "Kullani Bilginiz Bulunamadi..."}`;

//Uygulama
const isim = "Akif";
let isimDoğruMu;

isimDoğruMu = (isim === "Akif") ? "isim doğru" : "isim yanlış";
console.log(isimDoğruMu);

let city1 = "Ankara";
let city2 = "İstanbul";

const isCity = (city1 === city2) ? "İki şehir aynı" : "İki şehir aynı değil";
console.log(isCity)
