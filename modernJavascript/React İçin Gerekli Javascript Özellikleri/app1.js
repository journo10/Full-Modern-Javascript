//9- Array Methods (dizi metodları)
const urunler = [
  { id: 1, name: "Kalem", fiyat: 5 },
  { id: 2, name: "Defter", fiyat: 10 },
  { id: 3, name: "Silgi", fiyat: 2 },
  { id: 4, name: "Kalemtraş", fiyat: 7 },
];

//find() => Dizide bir eleman bulmaya yarar. Eleman bulunduğu anda arama işlemi durdurur ve bulunan elemanı döndürür.
//Aynı koşulları sağlayan başka bir eleman olması durumunda ilk bulunan eleman döndürülür.

console.log(urunler.find((urun) => urun.fiyat > 5)); // {id: 2, name: "Defter", fiyat: 10}

//some() => Dizide en az bir elemanın, girilen koşulu sağlayıp sağlamadığıyla ilgili true/false döndürür.

console.log(urunler.some((urun) => urun.fiyat < 2)); // false, dizide bir tane bile fiyatı 2'den düşük olan yok
console.log(urunler.some((urun) => urun.fiyat > 9)); // true, dizide en az bir tane fiyatı 9'dan büyük olan var

//every() => Dizideki tüm elemanların girili koşulu sağlayıp sağlamadığıyla ilgili true/false döndürür.

console.log(urunler.every((urun) => urun.fiyat > 1)); // true, tüm ürün fiyatları 1'den büyük
console.log(urunler.every((urun) => urun.fiyat < 10)); // false, tüm ürün fiyatları 10'dan küçük DEĞİL

//includes() => Bir string içinde, verilen ifadenin olup olmadığını kontrol eder, küçük/büyük harf duyarlıdır.

console.log(urunler.some((urun) => urun.name.includes("Kalem"))); // true, bazı ürün isimleri Kalem içeriyor
console.log(urunler.every((urun) => urun.name.includes("Kalem"))); // false, tüm ürün isimleri Kalem içermiyor

//map() => Verilen dizi elemanlarına, girilen callback fonksiyonu uygular ve elde edilen sonuçlarla yeni bir dizi oluşturur.

console.log(
  urunler.map((urun) => `${urun.name} fiyatı ${urun.fiyat} liradır.`)
); // ["Kalem fiyatı 5 liradır.", "Defter fiyatı 10 liradır.", "Silgi fiyatı 2 liradır.", "Kalemtraş fiyatı 7 liradır."]

//filter() => Verilen dizi elemanlarına, girilen callback fonksiyonu uygular, false döndüren sonuçları eler ve true döndüren sonuçlarla yeni bir dizi oluşturur..

console.log(urunler.filter((urun) => urun.name.includes("Kalem"))); // [{id: 1, name: "Kalem", fiyat: 5}, {id: 4, name: "Kalemtraş", fiyat: 7}]

//NOT => .filter() ve .map() her ikisi de yeni bir dizi döndürdüğünden, birbirine eklenerek tek satırda kullanılabilir.

console.log(
  urunler
    .filter((urun) => urun.name.includes("Kalem")) // Önce Kalem içeren ürünleri buluyor...
    .map((urun) => `${urun.name} fiyatı ${urun.fiyat} liradır.`)
); // Ardından bulunan elemanlara verilen callbak fonksiyonu uyguluyor..

// ["Kalem fiyatı 5 liradır.", "Kalemtraş fiyatı 7 liradır."]

//reduce() => Verilen dizinin elemanları üzerinde, reducer olarak verilen callback fonksiyonu uygular. Bu fonksiyonun döndürdüğü sonuç her bir döngüde hatırlanır ve bir sonraki döndürülen sonuç bir öncekine eklenir.
//Reducer fonksiyonu dört adet parametre alır: accumulator (her döngüden çıkan sonucun toplandığı değer), current value (sırası gelen dizi değeri), current index (sırası gelen değerin dizideki konumu), ve source array (üzerinde reduce uygulanan dizi.)

console.log(urunler.reduce((toplam, urun) => toplam + urun.fiyat, 0)); // 24

console.log(
  urunler.reduce((isimler, urun) => isimler + " " + urun.name, "Ürün İsimleri:")
); // "Ürün İsimleri: Kalem Defter Silgi Kalemtraş"

console.log(
  urunler.reduce(
    (yeniUrunListesi, urun) => [
      ...yeniUrunListesi,
      `${urun.name} ${urun.fiyat} liradır.`,
    ],
    [] // Başlangıç değeri boş dizi
  )
);
// ["Kalem 5 liradır.", "Defter 10 liradır.", "Silgi 2 liradır.", "Kalemtraş 7 liradır."]

//10-Promises and async/await
//Promise
//Promise sonucu olumlu veya olumsuz gelecekte belli olacak bir işlemi ifade eder, bir kaynağa bağlanıp veri almak gibi.

const veriGetir = new Promise(icraMemuru); //Kullanımı

const veriGetir0 = new Promise((basarili, basarisiz) => {
  //basarili (resolved) veya basarisiz (rejected)
  if (veriBasariliBirSekildeGeldiyse) {
    basarili(getirilenVeri);
  } else {
    basarisiz("veriyi getiremedik");
  }
});

const veri = veriGetir0
  .then((veri) => console.log("Basarili bir sekilde gelen veri:", veri)) //basarili (resolved)
  .catch((hata) => console.log("Hatadan gelen mesaj:", hata)); //basarisiz (rejected)

//async/await
const veri0 = await veriGetir;

async function veriDondur() {
  const veri = await veriGetir;
  return veri;
}

// veya
const veriDondur = async () => await veriGetir;
