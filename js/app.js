const input = document.querySelector(".storage__slider");
actualizarInput(input);

input.addEventListener(
  "input",
  function (evt) {
    actualizarInput(input);
  },
  false
);

function actualizarInput(input) {
  let percentage = (input.value * 100) / 1000;
  let offset = 5;
  if (percentage <= 50) {
    offset = offset - (offset * percentage) / 100;
  } else if (percentage > 50) {
    offset = (-1 * (offset * percentage)) / 100;
  }
  input.style.setProperty("--value", percentage);
  input.style.setProperty("--offset", offset);
  document.querySelector("#GB").textContent = input.value;
  document.querySelector("#GB-left").textContent = 1000 - input.value;
}
