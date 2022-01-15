// ********** String Veri Turu Islemleri **********
let email = "akif@gmail.com";
let firstName = "Ceyhun";
let lastName = "Yıldırım";

// string karakter sayisi -> length
console.log(email.length);

// Ilk Karakteri Bulmak -> [0]:
console.log(firstName[0]);
console.log(firstName.charAt(0));

// buyuk harf / kucuk harf :
//toUpperCase metin içinde bulunan tüm karakterleri büyük harf yapmamıza olanak sağlar.
//toLowerCase metin içinde bulunan tüm karakterleri küçük harf yapmamıza olanak sağlar.
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
console.log(email.search("@"));
console.log(email[15]);

email.search("olmayan"); // -1

// belli bir yere kadar al -> slice :  (domain bilgisi)
let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(
  DOMAIN.slice(0, DOMAIN.indexOf(".")) // sadece gmail kismini aldik
);

// bilgiyi degistir -> replace :
email = email.replace("gmail.com", "kodluyoruz.org");
console.log(email);

// istedigim bilgi var mi ? -> includes :
email.includes("dkfhsd"); // false
email.includes("@"); // true

// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
console.log(email.endsWith("kodluyoruz.org"));

// Ilk Harflerini Buyuk Yapmak
firstName = "FIRST";
lastName = "LAST";
let fullName1 = `${firstName[0].toUpperCase()}${firstName
  .slice(1)
  .toLowerCase()} ${lastName[0].toUpperCase()}${lastName
  .slice(1)
  .toLowerCase()}`;

// indexOf => Metnin içinde aramak istediğimiz değerin index numarasını bize verir.
let isim = "Ceyhun Yıldırım";
console.log(isim.indexOf("d"));

//lastIndexOf =>indexOf ile arasındaki tek fark aranan kelime birden fazla geçiyor ise en son eşleşmeden gelen index numarasını döndürür.
console.log(isim.lastIndexOf("ı"));

// slice => Metin içinden almak istediğimiz yerlerin index numaralarını vererek metin içinde bulunan parçayı alabiliriz.Bitiş index numarasındaki karakter sonuca dahil edilmez.
console.log(isim.slice(2, 10));

//Not: Tek index yazmak ise yazılan index numarasından sonra gelen tüm karakterleri almasına neden olur.
console.log(isim.slice(3));

//Concat =>Elimizde bulunan iki string türündeki veriyi birleştirmemize olanak sağlar.
let ad = "Akif";
let soyisim = "Cihan";
console.log(ad.concat(" ", soyisim));

//charAt =>Belirtilen index numarasında yer alan karakteri verir.
console.log(isim.charAt(7));

//charCodeAt =>Belirtilen index numarasında yer alan karakterin Unicode değerini verir.
console.log(isim.charCodeAt(7));

//Split =>Split metodu ile istenilen metin diziye çevrilebilir. Kullanılan parametre ile metnin nasıl parçalanacağı belirtilir
let isim1 = "Akif, Cihan, Ceyhun, Semih";
let isimler = isim1.split(",");
console.log(isimler);

//Replace =>Aranan metni istediğimiz metin ile değiştirmemize olanak sağlar.
let domain = "www.kodluyoruz.org";
let language = "Java";
language = language.replace("Java", "JavaScript");
console.log(language);