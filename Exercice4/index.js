const button = document.querySelector("#myButton");

button.addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "Bonjour, vous avez cliqué sur le bouton !";
  document.body.appendChild(p);
});
