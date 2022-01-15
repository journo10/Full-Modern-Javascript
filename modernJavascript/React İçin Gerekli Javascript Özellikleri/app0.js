//8-ESModules (ES modülleri)

//Modül sistemi sayesinde belirli kod blokları yeniden kullanmak ve organizasyon amaçlı import/export (içe/dışa aktarma) edilebilir.
//İki adet içe/dışa aktarma yöntemi vardır: named (isimli) ve default (varsayılan).

//1-İsimli dışa aktarmada export ifadesi ardından dışa aktarılmak istenen Javascript ifadesi gelir.
//2-Dışa aktarılan değişken, fonksiyon, obje, vs. aynı isimle import edilmelidir.
//3-Bir dosyada birden fazla named export (isimli dışa aktarma) yer alabilir.

//1-Named Exports & Imports (isimli dışa/içe aktarmalar)

//a-)Javascript ifadeleri oluşturulduğu yerde dışa aktarılabilir.

export let isim = "Mehmet"; // oluşturuldu ve dışa aktarıldı
export const kullanici = { isim, yas: 35 }; // oluşturuldu ve dışa aktarıldı
export function merhaba(isim) {
    // oluşturuldu ve dışa aktarıldı
    return `Merhaba, ${isim}`;
}

//b-)Bu üç ifade, isim, kullanici, merhaba, önce oluşturulup ardından liste şeklinde tek bir satırda dışa aktarılabilir.

let isim = "Mehmet";
const kullanici = { isim, yas: 35 };
function merhaba(isim) {
    return `Merhaba, ${isim}`;
}

export { isim, kullanici, merhaba };

//c-) Named exports (isimli dışa aktarmalar) başka dosyalarda içe aktarılırken, süslü parantezler içinde, dışa aktarma sırasında kullanılan isimlerle eşleşecek şekilde kullanılır.

//Yukarıdaki dışa aktarmalar başka dosyalarda şöyle içe aktarılır:

import { isim, kullanici, merhaba } from "./dosyaadi.js";

//İçe aktarma sırasında içe aktarılan ifadenin adı değiştirilebilir.
import {
    isim as name,
    kullanici as user,
    merhaba as hello,
} from "./dosyaadi.js";


//2-Default Exports & Imports (varsayılan içe/dışa aktarmalar)

//a-) Her dosyada yalnızca bir tane default export (varsayılan dışa aktarma) yapılabilir.
export default function merhaba(isim) {
    return `Merhaba, ${isim}!`;
}

// Aynı satırda hem isimli hem de varsayılan dışa aktarma aynı anda yapılabilir.
export { merhaba as default, isim1, kullanici1 }; // merhaba varsayılan, diğerleri isimli dışa aktarma

//Varsayılan olarak dışa aktarılan ifadeler süslü parantezler olmadan içe aktarılır.
// merhaba.js
export default function merhaba(isim) {
    return `Merhaba, ${isim}!`;
}

// anasayfa.js
import merhaba from "./merhaba.js";


//Hem varsayılan hem isimli dışa aktarma olan bir dosyadan içe aktarılırken, süslü parantez kullanılır ve varsayılan içe aktarmaya isim verilir.
import { default as merhaba, isim3, kullanici3 } from "./dosyaadi.js"; // merhaba varsayılan, diğerleri isimli içe aktarma

//3-Immediate re-export (anında yeniden dışa aktarma)

// İçe aktarılan bir modül aynı satırda hiç bekletmeden dışa aktarılabilir. Varsayılan ve isimli olarak içe aktarılan modüller tek bir satırda anında yeniden dışa aktarılamazlar. Bu yüzden iki ayrı satırda ayrı ayrı dışa aktarmak gerekir.
export { default as merhaba } from "./dosyaadi.js"; // bir dosyadaki varsayılan dışa aktarmayı merhaba ismiyle yeniden dışa aktarma
export * from "./dosyaadi.js"; // bir dosyadaki tüm isimli dışa aktarmaları tek bir obje olarak dışa aktarma

