//Date Object
let d = new Date();

//Set Metodu => Üzerinde değişiklik yapılabilir.
d.setFullYear(2011);
d.setMonth(5);
d.setDate(20);
d.setHours(10);
d.getMinutes(45);
d.setSeconds(21);

//Get Metodu
console.log(d.getDate()); //Ay'ın kaçı
console.log(d.getDay()); // Haftanın kaçıncı günü
console.log(d.getFullYear()); // Hangi yıl
console.log(d.getHours()); //Şuanki saat bilgisi
console.log(d.getMonth()); // Kaçıncı ay
console.log(d.getSeconds()); // Şuanki saniye

console.log(d);
console.log(typeof d);

//Uygulama
// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.
let dt = new Date();

console.log(dt);
console.log(dt.getMonth() + 1);
console.log(dt.getDate());
console.log(dt.getFullYear());

// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
let dt0 = new Date("11/11/2011 11:11:20");
let dt1 = new Date(2010, 5, 11, 15, 10, 5);
console.log(dt0);
console.log(dt1);
// 1/1/1990 tarihinden bir gün öncesini gösteriniz.
var dtC = new Date("1/1/1990");
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth - 1);
console.log(dtC);

// iki tarih arasındaki geçen zamanı bulunuz.
var start = new Date("1/1/1990");
var end = new Date("2/10/1992");

var milisecond = end - start;
var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gun = saat / 24;

console.log("milisecond :" + milisecond);
console.log("saniye : " + saniye);
console.log("dakika :" + dakika);
console.log("saat :" + saat);
console.log("gun : " + gun);
// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır ?

var annelerGunu = new Date();
annelerGunu.setHours(0, 0, 0, 0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while (annelerGunu.getDay() != 0) {
  annelerGunu.setDate(annelerGunu.getDate() + 1);
}
annelerGunu.setDate(annelerGunu.getDate() + 7);
console.log(annelerGunu);

// ** Yaş hesaplama nasıl yapılır ?

var birthday = new Date("8/1/1985");
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 1970);
// console.log(birthday.getTime());
// console.log(Date.now())
