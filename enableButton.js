function enableButton() {
  const myButton = document.querySelector.getElementById("mainbutton");
  myButton.disabled = true;
  if (enable1 == enable2 == enable3 == True) {
    myButton.disabled - false;
    myButton.innerText("Fechar pedido");
    myButton.classList.add("enabled");
    myButton.addEventListener("click", setOrder());
  }
}
