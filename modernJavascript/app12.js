// array - dizilerle calismak

// Array olusturmak
let arr = [1, 2, 3];
let arr1 = [1, 2, "bir string ifade", false, { title: "kodluyoruz" }];
let arr2 = [1, 2, 3, ["dört", "beş", "altı"], 7, 8];
let domain = "kodluyoruz her zaman";
let isActive = false;
let items = [15, 25, 35, isActive, domain];
console.log(items);

let arr3 = [1, 2, 3, "dört", "beş"];
console.log(arr3[3]);
console.log(arr3[0]);

let arr4 = [1, 2, 3, "dört", "beş"];
for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}

let arr5 = [1, 2, 3, "dört", "beş"];
arr5.forEach((item, index) => {
  console.log(item, index);
});

let emptyArray = []; // bos list

// Array icerisindeki eleman/oge sayisini ogrenmek
console.log(
  items.length // array icindeki oge sayisi
);

// Array icindeki ilk elemanin cagirilmasi
console.log(items[0]);

// Array icindeki son elemanin cagirilmasi
console.log(items[items.length - 1]);

// Array icindeki ortadaki elemanin cagirilmasi
console.log("ortadaki :", items[Math.floor(items.length / 2)]);

// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
console.log(
  typeof items // object olarak cikti veriyor,tipini veriyor..
);
console.log(Array.isArray(items));

// hangileri isArray -> True verir ?
console.log("[] : ", Array.isArray([]));
console.log("1 : ", Array.isArray(1));
console.log("true : ", Array.isArray(true));

// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi
let items1 = [10, 20, 30, 40];
console.log("items - ilk hali : ", items1);

// push => sona eleman eklemek
items.push(50);
console.log("50 : ", items);

let sports = ["basketball", "football", "tennis"];
console.log(sports);
sports.push("baseball");
console.log(sports);

// unshift => basa oge eklemek
items.unshift(5);
console.log("5 : ", items);

var sports1 = ["basketball", "football", "tennis"];
console.log(sports1);
sports1.unshift("baseball");
console.log(sports1);

//NOT: Dizilerden pop(), shift() ve splice() metotlarıyla eleman silebiliriz.
// pop => sondaki ogeyi cikarmak
let lastItem = items.pop(); // son elemani lastItem icerisine ekledin
console.log("lastItem: ", lastItem, ", items: ", items);

var sports4 = ["basketball", "football", "tennis"];
console.log(sports4);
sports4.pop();
console.log(sports4);

// shift => bastaki ogeyi cikarmak
let firstItem = items.shift(); // ilk elemani firstItem icerisine ekledin
console.log("firstItem: ", firstItem, ", items: ", items);

let sports5 = ["basketball", "football", "tennis"];
console.log(sports5);
sports5.shift();
console.log(sports5);

//splice() =>splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılır.
//Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.
let sports3 = ["basketball", "football", "tennis"];
console.log(sports3);
sports3.splice(1, 0, "baseball");
console.log(sports3);

// Array icindeki bir ogenin bilgisinin degistirilmesi:
// ilk ogenin degistirilmesi
items[0] = 5;
console.log(items);

// sonuncu ogenin degistirilmesi:
items[items.length - 1] = 1000;
console.log(items);

items[2] = 10000;
console.log(items);
