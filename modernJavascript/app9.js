// Arrow function Kullanimi
function hello(firstName) {
  console.log(`Merhaba ${firstName}`);
}
hello("JavaScript");

const helloFuncV1 = (firstName) => {
  console.log(`Merhaba ${firstName}`);
};
helloFuncV1("helloFuncV1");

const helloFuncV2 = (firstName) => console.log(`Merhaba ${firstName}`);
helloFuncV2("helloFuncV2");

const helloFuncV3 = (firstName, lastName) =>
  console.log(`Merhaba ${firstName} ${lastName}`);
helloFuncV3("helloFuncV3", "Last Name info");

const helloFuncV4 = (firstName, lastName) => {
  let info = `Merhaba ${firstName} ${lastName}`;
  console.log(info);
  return info;
};
helloFuncV4("helloFuncV4", "Other Info");

const myList = (param1, param2) => param1.concat(param2);
let sonuc = myList([1, 2], [3, 4, 5]);
console.log(sonuc);

let movie = {
  name: "Evet",
  thisInRegular() {
    console.log("Bu film mi? " + this.name);
  },
};
movie.thisInRegular();

const newArray = (num) => {
  const newNums = num.map((e) => {
    if (e % 2 == 0) {
      return e * 2;
    } else if (e % 2 == 1) {
      return e * 3;
    }
  });
  return newNums;
};
console.log(newArray([1, 2, 3, 4, 5]));

// DOM Etkinlikleriyle Calismak
//event.stopPropagation() => Bir etkinliğin özelliğini durdurmak için kullanılır.
//event.preventDefault() => Bir HTML elementinin varsayılan eylemini tamamen engellemek için bu eylem kullanılır.
let greeting = document.querySelector("#greeting");
greeting.addEventListener("mouseover", domClick);

function domClick() {
  console.log("etkinlik denetlendi");
  this.style.color == "red"
    ? (this.style.color = "black")
    : (this.style.color = "red");
}

let yellow = document.getElementById("yellow");
let purple = document.getElementById("purple");

yellow.onclick = function () {
  purple.style.backgroundColor = "red";
};
