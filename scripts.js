
function enableButton() {
  let button = document.querySelector(".button");
  if (enable1 === false || enable2 === false || enable3 === false) {
      button.classList.remove("enable");
  }
  else {
    button.classList.add("enable")
  }
}

function selFood(food) {
    let elt = document.querySelector(".comida.selecionado");
if (elt !== null) {
  elt.classList.remove("selecionado");
}
  food.classList.add("selecionado");
}

function selDrink(drink) {
    let elt = document.querySelector(".bebida.selecionado");
if (elt !== null) {
  elt.classList.remove("selecionado");
}
  drink.classList.add("selecionado");
}

function selDessert(dessert) {
    let elt = document.querySelector(".sobremesa.selecionado");
if (elt !== null) {
  elt.classList.remove("selecionado");
}
  dessert.classList.add("selecionado");
}

function setOrder() {


let minhaString = `Olá, gostaria de fazer o pedido:
  - Prato: Frango Yin Yang
  - Bebida: Coquinha Gelada
  - Sobremesa: Pudim
  Total: R$ 27.70`

  alert(minhaString)

  encodeURIComponent(minhaString)
}



