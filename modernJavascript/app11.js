// Form Submit Konusu

// onSubmit => Form submit olduğu anda ne yapacağını söyleyeceğimiz event'tir.
// onChange => Form'un içindeki form elementlerinin(input) value'su her değiştiğinde bu değişen value'yu bizim her defasında elde etmemize olanak sağlayan eventtir.
let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault(); // default islemi engellenmesi için...
  console.log(" score islemi gerceklesti");

  let scoreInputDOM = document.querySelector("#score");
  console.log(scoreInputDOM.value);
  localStorage.setItem("score1", scoreInputDOM.value);
}

// Uygulama
let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);
const alertDOM = document.querySelector("#alert");

const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;

function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");

  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value); // gonderdikten sonra sifirlandı..
    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    alertDOM.innerHTML = alertFunction(
      "Baslik Bilgisi",
      "Eksik Bilgi Girdiniz",
      "success"
    );
  }
}

let userListDOM = document.querySelector("#userList");

const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `
        ${userName} 
        <span class="badge bg-primary rounded-pill">${score}</span>
    `;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  userListDOM.append(liDOM);
};
