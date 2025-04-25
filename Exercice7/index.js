const decimalInput = document.querySelector("#decimalInput");
const binaryResult = document.querySelector("#binaryResult");

function convertToBinary() {
  const value = decimalInput.value.trim();

  if (Number.isNaN(value) || value < 0) {
    binaryResult.textContent = "";
    return;
  }

  if (value === 0) {
    binaryResult.textContent = "0";
    return;
  }

  let n = value;
  const binary = [];
  while (n > 0) {
    binary.push(n % 2);
    n = Math.floor(n / 2);
  }

  binaryResult.textContent = binary.reverse().join("");
}
