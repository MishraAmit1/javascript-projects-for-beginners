const inputValue = document.getElementById("input-number");
const errorW = document.getElementById("error");
const result = document.getElementById("result");

function weightConvertor() {
  if (inputValue.value <= 0) {
    errorW.innerText = "Enter a Valid Number !";
    setTimeout(() => {
      errorW.innerHTML = "";
      inputValue.innerHTML = "";
      result.innerHTML = "";
    }, 2000);
  } else {
    result.innerHTML = (+inputValue.value / 2.2).toFixed(2);
    setTimeout(() => {
      inputValue.innerHTML = "";
      result.innerHTML = "";
    }, 10000);
  }
}

inputValue.addEventListener("input", weightConvertor);
