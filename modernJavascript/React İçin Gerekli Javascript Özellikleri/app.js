//1-ES6 Template Literals (şablon dizileri)
// ``
const isim = "Akif";
const mesaj = `Merhaba, ${isim}`;
console.log(mesaj);

const birimFiyat = 100;
const adet = 3;
const paraBirimi = "TL";

const toplamTutar = `Toplam Tutar:${birimFiyat * adet} ${paraBirimi}`;
console.log(toplamTutar);

//2-Shorthand Property Names (kısayol obje anahtarı isimleri)
const isim0 = "Ceyhun";
const yas = 25;
const kullaniciObjesi = { isim0, yas }; // { isim: isim, yas: yas } ile aynıdır

console.log(kullaniciObjesi);

//3-Arrow Functions (oklu fonksiyon ifadeleri)

const topla = (sayi1, sayi2) => {
  return sayi1 + sayi2;
};
console.log(topla(5, 7));

const topla1 = (sayi1, sayi2) => sayi1 + sayi2;
console.log(topla1(5, 9));

const kare = (a) => a * a;
console.log(kare(2));

//4-Object/Array Destructuring (obje/dizilerin parçalarına bölünüp değişkenlere atanması)
const kullanici = { isim3: "Mehmet", yas0: 23 };
const { isim3, yas0 } = kullanici; // Burada isim ve yas ismiyle iki değişken oluşturduk.
// Bu işlem, aşağıdaki iki işlemle aynıdır.
// const isim = kullanici.isim;
// const yas = kullanici.yas;

console.log(isim3);
console.log(yas0);

//Rest/Spread=>
//obje kısmı
const kullanici0 = { isim4: "Mehmet", yas2: 21, sehir: "İstanbul" };

const { isim4, ...kalanlar } = kullanici0; // (...) rest/spread operatörüdür.

console.log(isim);
console.log(kalanlar);

//dizi(array) kısmı
const sayilar = [1, 2, 3, 4, 5];
const [bir, iki, uc, dort, bes] = sayilar; // Burada 1,2,3,4,5 sayılarını bir,iki,uc,dort,bes değişkenlerine atadık.

console.log({ bir, iki, uc, dort, bes });

const sayilar1 = [1, 2, 3, 4, 5];
const [bir1, ...kalanlar1] = sayilar1; // Burada ilk elemanı bir değişkenine atadık. Kalanlar ise kalanlar değişkenine atandı.

console.log({ bir1, kalanlar });

//5-Parameter Defaults (varsayılan parametreler değerleri) =>(sayi1, sayi2 = 5) gibi..
function topla7(sayi1 = 0, sayi2 = 0) {
  // Burada eğer fonksiyon parametreleri girilmezse varsayılan olarak 0 değerini tanımladık.
  return sayi1 + sayi2;
}
console.log(topla7(3, 5)); // 8 döndürür
console.log(topla7(3)); // 3 döndürür
console.log(topla7()); // 0 döndürür

//6-Rest/Spread Operator (toparlama/yayma operatörü)
let kullanici5 = { isim: "Mehmet", yas: 35, sehir: "İstanbul" };

kullanici5.sehir = "Ankara"; //Normal kullanım
console.log(kullanici5);

let kullanici6 = { isim: "Mehmet", yas: 35, sehir: "İstanbul" };

kullanici6 = { ...kullanici6, sehir: "Ankara" }; //rest-spread kullanım
console.log(kullanici6);

const sayilar3 = [3, 5, 9];
function toplama(a, b, c) {
  return a + b + c;
}
console.log(toplama(...sayilar3));

const s1 = [1, 2, 3, 4];
const s2 = [5, 6, 7, 8];
const diziBirlestir = [...s1, ...s2];
console.log(diziBirlestir);

const kullanici00 = { isim7: "Akif", yas7: 24 };
const adres = { sehir: "İstanbul", ilce: "Kadıköy" };

const objeBirlestir = { ...kullanici00, ...adres };
console.log(objeBirlestir);

//7-Ternary Conditional Operators (üç değişkenli koşul operatörleri)
//KULLANIMI => koşul ? doğruysa : yanlışsa;
const kopruAcikMi = "Açık";

kopruAcikMi === "Açık"
  ? console.log("Anadolu yakasina gecebilirsiniz")
  : console.log("Anadolu yakasina gecisler iptal");
