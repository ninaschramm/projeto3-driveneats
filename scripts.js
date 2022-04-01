function selFood(food) {
    let elt = document.querySelector(".comida-selecionado");
if (elt !== null) {
  elt.classList.remove("comida-selecionado");
}
  food.classList.add("comida-selecionado");

}

function selDrink(drink) {
    let elt = document.querySelector(".bebida-selecionado");
if (elt !== null) {
  elt.classList.remove("bebida-selecionado");
}
  drink.classList.add("bebida-selecionado");

}

function selDessert(dessert) {
    let elt = document.querySelector(".sobremesa-selecionado");
if (elt !== null) {
  elt.classList.remove("sobremesa-selecionado");
}
  dessert.classList.add("sobremesa-selecionado");

}

function enableButton() {
    let elt1 = document.querySelector(".comida-selecionado");
    let elt2 = document.querySelector(".bebida-selecionado");
    let elt3 = document.querySelector(".sobremesa-selecionado");
    let button = document.querySelector(".button");
    if (elt1 !== null && elt2 !== null && elt3 !==null) {
        button.classList.add("enable");
    }
    
}