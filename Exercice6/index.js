const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".calculator button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const v = btn.textContent;
    if (v === "C") clearDisplay();
    else if (v === "=") calculateResult();
    else appendToDisplay(v);
  });
});

const appendToDisplay = (number) => {
  display.value += number;
};

const clearDisplay = () => {
  display.value = "";
};

const calculateResult = () => {
  try {
    result = eval(display.value);
    if (result === Infinity || result === -Infinity) {
      display.value = "Division by zero is not allowed";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Erreur";
  }
};
