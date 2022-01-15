// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
let items = [1, 2, 3, 4, 5];

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"];
let maleUsers = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUsers);

//push => Push metodu var olan bir diziye yeni bir eleman eklememizi sağlıyor.
items.push(maleUsers);

let alisverisListem = ["elma", "ekmek", "süt"];
alisverisListem.push("yumurta");

console.log(alisverisListem);

console.log(items);
console.log(items.length);
console.log(items[0].length); // Array icindeki istedigimiz Array'in length bilgisini aldik
console.log(items[0][0]); // Ayse bilgisine ulastik :)

// Array icerisinden oge ayirmak -> splice(pos, item?)
let newItems = items.splice(1, 5);

console.log("newItems: ", newItems);
console.log("items: ", items);
// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem");
items.push("ipsum");

console.log(items.indexOf("ipsum"));

// Array Kopyalamak -> slice, [...ES6]
let copyItems = items;
console.log(items);

copyItems.pop(); // son ogeyi cikarttin
console.log("copyItems", copyItems);
console.log("items", items);

console.log("kopyalandiktan sonraki hali:");
copyItems = items.slice(); // kopyalama yapti
copyItems.pop(); // son ogeyi cikarttin
console.log("copyItems", copyItems);
console.log("items", items);

let es6Items = [...items]; // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items);

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers]; // es6 birden fazla array yapisini birlestirmek
console.log(allUsers);

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(allUsers.toString());
console.log(allUsers.join(" --- "));

// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length - 1, 0, "Melissa");
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem");
console.log(allUsers);

// pop() =>Pop metodu var olan bir dizideki en son elemanı silmemizi sağlar.
let alisverisListem2 = ["elma", "ekmek", "süt"];
alisverisListem2.pop();

console.log(alisverisListem2);

//includes() =>Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.
const alisverisListem3 = ["elma", "ekmek", "süt"];

const elmaVar = alisverisListem3.includes("elma");
console.log(elmaVar); // Dizi içerisinde elma olduğu için true yazdırmasını bekleriz.

const armutVar = alisverisListem3.includes("armut");
console.log(armutVar); //false

// slice() => slice (dilimleme) metodu bir dizinin bir kısmının kopyasıyla yeni bir dizi oluşturmamıza olanak sağlıyor.
//Parantez içerisine ise kopyalamak istediğimiz elemanların aralığını başlangıç ve bitiş indeksleri olacak şekilde iki parametre olarak giriyoruz. Bitiş indeksindeki değerin aralığa dahil olmadığını unutma
//Bu metot uygulandığı dizinin orijinal halini değiştirmiyor bu yüzden yeni oluşacak diziyi farklı bir değişkende saklıyoruz.
const alisverisListem4 = ["elma", "ekmek", "süt"];
const yeniAlisverisListem = alisverisListem4.slice(0, 2); // "elma"dan başlayıp "süt"e kadar olan elemanları kopyala."süt" dahil değil.

console.log(yeniAlisverisListem); // ["elma", "ekmek"]

//join() =>Parantez içerisine dizi elemanları arasına koymak istediğimiz string'i parametre olarak girebiliriz. Eğer bir parametre vermezsek virgül bastırır.
const alisverisListem5 = ["elma", "ekmek", "süt"];

const stringAlisverisListem = alisverisListem5.join();
console.log(stringAlisverisListem); // Çıktıda elma,ekmek,süt

const stringAlisverisListem2 = alisverisListem5.join(" kiraz ");
console.log(stringAlisverisListem2); // Çıktıda elma kiraz ekmek kiraz süt

//concat() => Bu metot farklı dizileri birleştirip tek bir diziye çevirmemizi sağlıyor.
const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];

const menu = yiyecekler.concat(icecekler);
console.log(menu); // Çıktıda ["pasta", "baklava", "puding", "su", "kahve"]

//forEach() => Her bir elemanın üzerinde gezer
const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function (malzeme, malzemeIndeksi) {
  console.log(malzeme, malzemeIndeksi);
});

//map() =>Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır.
const sayilar = [1, 2, 3];

let sayilarin5kati = sayilar.map(function (sayi) {
  return sayi * 5;
});

console.log(sayilarin5kati); // Çıktı olarak [5,10,15]
console.log(sayilar); // Çıktı olarak [1,2,3]

//some()
const sayilar2 = [4, 5, 6];

const sonuc1 = sayilar2.some(function (sayi) {
  return sayi > 5;
});
console.log(sonuc1); // Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda true döner...

const sonuc2 = sayilar2.some(function (sayi) {
  return sayi < 3;
});
console.log(sonuc2); // Dizi içerisinde 3'ten küçük herhangi bir sayı olmadığı için çıktıda false döner..

//every() => every metodu belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol eder.
//some metodunda olduğu gibi, Boolean yani true veya false olarak döner.
//True dönebilmesi için dizideki tüm elemanların fonksiyondaki koşula uyması gerekir.

const sayilar4 = [4, 5, 6];

const sonuc0 = sayilar4.every(function (sayi) {
  return sayi > 3;
});
console.log(sonuc0); // Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true döner...

const sonuc00 = sayilar4.every(function (sayi) {
  return sayi > 5;
});
console.log(sonuc00); // Dizideki tüm sayılar 5'ten büyük olmadığı için sonucun false döner...

const sonuc000 = sayilar4.every(function (sayi) {
  return sayi > 7;
});
console.log(sonuc000); // Dizideki hiçbir sayı 7'den büyük olmadığı için sonucun false döner..

//filter() => ilter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor.
//Yeni oluşacak diziyi bir değişkende saklıyoruz.
//Orijinal dizi bozulmuyor.
const sayilar5 = [1, 2, 3, 4, 5];

const filtrelenmisSayilar = sayilar5.filter(function (sayi) {
  return sayi > 3;
});
console.log(filtrelenmisSayilar); // Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.
console.log(sayilar5); // Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5]

//find() => Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
//Diğer metotların aksine find metodu elemanın kendisini döner.
//Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
//Koşulu sağlayan bir eleman bulamazsa undefined döner.
const sayilar6 = [4, 5, 6, 7];

const bulunacakEleman1 = sayilar6.find(function (sayi) {
  return sayi === 5;
});
console.log(bulunacakEleman1); // Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 döner.

const bulunacakEleman2 = sayilar6.find(function (sayi) {
  return sayi > 5;
});
console.log(bulunacakEleman2); // Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı döner..

const bulunacakEleman3 = sayilar6.find(function (sayi) {
  return sayi < 3;
});
console.log(bulunacakEleman3); // Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined döner..

//sort()
//Bu metot, dizi içerisindeki elemanları sıralamaya yarar.
//Orijinal dizi sıralanmış şekilde döner.
//Eğer parametre olarak bir fonksiyon verilmezse dizi elemanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır.
//Artan veya azalan olarak sıralamak için farklı bir yol izlenmelidir.
const sayilar8 = [3, 5, 2, 10, 4];

sayilar8.sort();
console.log(sayilar8);
// Çıktı olarak [10, 2, 3, 4, 5] alırız.(Sayıların string halleri UTF-16 değerlerine göre sıralandıkları için)

const sayilar9 = [3, 5, 2, 10, 4];

sayilar9.sort(function (a, b) {
  return b - a;
});
console.log(sayilar9); // Çıktı olarak [10, 5, 4, 3, 2]

//reduce() =>
//Bu metot dizimizi yalnızca bir değere indirger.
//Parantez içerisine parametre olarak bir fonksiyon ve toplayıcının başlangıç değeri girilir.
//Bu metot orijinal diziyi değiştirmez.

const sayilar10 = [10, 20, 30];

function indirgeyici(akumulator, sayi) {
  return akumulator + sayi;
}
const sonuc10 = sayilar10.reduce(indirgeyici, 0);
console.log(sonuc10); //0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 

const sonuc11 = sayilar10.reduce(indirgeyici, 5);
console.log(sonuc11); // 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65







