


function selFood(food) {
    let elt = document.querySelector(".comida.selecionado");
    let buttonFood = document.querySelector(".button-disable.comida");
if (elt !== null) {
  elt.classList.remove("selecionado");
}
  food.classList.add("selecionado");
  buttonFood.classList.add("hidden");
}

function selDrink(drink) {
    let elt = document.querySelector(".bebida.selecionado");
    let buttonFood = document.querySelector(".button-disable.bebida");
if (elt !== null) {
  elt.classList.remove("selecionado");
}
  drink.classList.add("selecionado");
  buttonFood.classList.add("hidden");
}

function selDessert(dessert) {
    let elt = document.querySelector(".sobremesa.selecionado");
    let buttonFood = document.querySelector(".button-disable.sobremesa");
if (elt !== null) {
  elt.classList.remove("selecionado");
}
  dessert.classList.add("selecionado");
  buttonFood.classList.add("hidden");
}

function enableButton() {
  let button = document.querySelector(".button");
  let qtdProd = document.querySelectorAll(".selecionado")
  console.log(qtdProd)
  if (enable1 === false || enable2 === false || enable3 === false) {
      button.classList.remove("enable");
  }
  else {
    button.classList.add("enable")
  }
}



function setOrder() {
let confirme = document.querySelector(".confirme")
confirme.classList.remove("hidden")

let minhaString = `Olá, gostaria de fazer o pedido:
  - Prato: Frango Yin Yang
  - Bebida: Coquinha Gelada
  - Sobremesa: Pudim
  Total: R$ 27.70`

let pedido = document.querySelector(".pedidoconfirmado")
pedido.innerHTML = minhaString

  encodeURIComponent(minhaString)
}



