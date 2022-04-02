//Função que seleciona o prato
function selFood(food) {
    let elt = document.querySelector(".comida.selecionado");
    let buttonFood = document.querySelector(".button-disable.comida");
if (elt !== null) {
  elt.classList.remove("selecionado");
}
  food.classList.add("selecionado");
  buttonFood.classList.add("hidden"); //pra liberar o botão de fechar pedido
    //Aqui adiciona ID ao prato escolhida para resgatá-la nas próximas funções
  let pratoselecionado = food.getElementsByTagName('h4');
  let check = document.getElementById("pratoselecionado")
  if (check !== null) {
    check.removeAttribute("id")
  }
  pratoselecionado[0].setAttribute("id", "pratoselecionado");
  //Marca o preço selecionado
  let price = food.getElementsByTagName('h5');
  let checkprice = document.getElementById("price1")
  if (checkprice !== null) {
    checkprice.removeAttribute("id")
  }
  price[0].setAttribute("id", "price1");
}

//Função que seleciona a bebida
function selDrink(drink) {
    let elt = document.querySelector(".bebida.selecionado");
    let buttonFood = document.querySelector(".button-disable.bebida");
if (elt !== null) {
  elt.classList.remove("selecionado");
}
  drink.classList.add("selecionado");
  buttonFood.classList.add("hidden"); //pra liberar o botão de fechar pedido
    //Aqui adiciona ID à bebida escolhida para resgatá-la nas próximas funções
  let bebidaselecionado = drink.getElementsByTagName('h4');
  let check = document.getElementById("bebidaselecionado")
  if (check !== null) {
    check.removeAttribute("id")
  }
  bebidaselecionado[0].setAttribute("id", "bebidaselecionado");
    //Marca o preço selecionado
  let price = drink.getElementsByTagName('h5');
  let checkprice = document.getElementById("price2")
  if (checkprice !== null) {
    checkprice.removeAttribute("id")
  }
  price[0].setAttribute("id", "price2");

}

//Função que seleciona a sobremesa
function selDessert(dessert) {
    let elt = document.querySelector(".sobremesa.selecionado");
    let buttonFood = document.querySelector(".button-disable.sobremesa");
if (elt !== null) {
  elt.classList.remove("selecionado");
}
  dessert.classList.add("selecionado");
  buttonFood.classList.add("hidden"); //pra liberar o botão de fechar pedido
  //Aqui adiciona ID à sobremesa escolhida para resgatá-la nas próximas funções
  let sobremesaselecionado = dessert.getElementsByTagName('h4');
  let check = document.getElementById("sobremesaselecionado")
  if (check !== null) {
    check.removeAttribute("id")
  }
  sobremesaselecionado[0].setAttribute("id", "sobremesaselecionado");
  //Marca o preço selecionado
  let price = dessert.getElementsByTagName('h5');
  let checkprice = document.getElementById("price3")
  if (checkprice !== null) {
    checkprice.removeAttribute("id")
  }
  price[0].setAttribute("id", "price3");
}


// Função que confirma o pedido
function setOrder() {
let confirme = document.querySelector(".confirme");
confirme.classList.remove("hidden");

// Definindo as variáveis Prato, Bebida, Sobremesa e preços
let pratoselecionado = document.getElementById("pratoselecionado");
let prato = (pratoselecionado.innerText);
let bebidaselecionado = document.getElementById("bebidaselecionado");
let bebida = (bebidaselecionado.innerText);
let sobremesaselecionado = document.getElementById("sobremesaselecionado");
let sobremesa = (sobremesaselecionado.innerText);
let price1 = document.getElementById("price1");
let price2 = document.getElementById("price2");
let price3 = document.getElementById("price3");
price1 = price1.innerText
price1 = price1.replace(",",".")
price1 = price1.slice(2)
price1 = Number(price1)
price2 = price2.innerText
price2 = price2.replace(",",".")
price2 = price2.slice(2)
price2 = Number(price2)
price3 = price3.innerText
price3 = price3.replace(",",".")
price3 = price3.slice(2)
price3 = Number(price3)

let totalPrice = price1 + price2 + price3
totalPrice = totalPrice.toFixed(2)

let minhasEscolhas = `${prato}
${bebida}
${sobremesa}`
document.querySelector(".confirmeescolhas").innerText = minhasEscolhas

let meusPreços = `${price1.toFixed(2)}
${price2.toFixed(2)}
${price3.toFixed(2)}`
document.querySelector(".confirmeprecos").innerText = meusPreços

document.getElementById("total").innerText = `R$ ${totalPrice}`;
}


//Função que envia para o WhatsApp
function setWpp() {

  // Definindo as variáveis Prato, Bebida, Sobremesa e preços
let pratoselecionado = document.getElementById("pratoselecionado");
let prato = (pratoselecionado.innerText);
let bebidaselecionado = document.getElementById("bebidaselecionado");
let bebida = (bebidaselecionado.innerText);
let sobremesaselecionado = document.getElementById("sobremesaselecionado");
let sobremesa = (sobremesaselecionado.innerText);
let price1 = document.getElementById("price1");
let price2 = document.getElementById("price2");
let price3 = document.getElementById("price3");
price1 = price1.innerText
price1 = price1.replace(",",".")
price1 = price1.slice(2)
price1 = Number(price1)
price2 = price2.innerText
price2 = price2.replace(",",".")
price2 = price2.slice(2)
price2 = Number(price2)
price3 = price3.innerText
price3 = price3.replace(",",".")
price3 = price3.slice(2)
price3 = Number(price3)

let totalPrice = price1 + price2 + price3
totalPrice = totalPrice.toFixed(2)
  
  let minhaString = `Olá, gostaria de fazer o pedido:
  - Prato: ${prato}
  - Bebida: ${bebida}
  - Sobremesa: ${sobremesa}
  Total: R$ ${totalPrice}`

  minhaString = encodeURIComponent(minhaString) //converte a string
  window.open(`https://wa.me/?text=${minhaString}`, '_blank'); //abre para o WhatsApp em nova aba
}

function cancel() {
 let cancelado = document.querySelector(".confirme");
 cancelado.classList.add("hidden")
}



 

//  encodeURIComponent(minhaString)
