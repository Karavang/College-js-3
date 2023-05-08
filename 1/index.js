const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const first = document.getElementById("n1");
const second = document.getElementById("n2");

plus.addEventListener("click", () => {
  document.getElementById("out").textContent = `Результат:${
    parseInt(first.value) + parseInt(second.value)
  }`;
});

minus.addEventListener("click", () => {
  document.getElementById("out").textContent = `Результат:${
    parseInt(first.value) - parseInt(second.value)
  }`;
});
