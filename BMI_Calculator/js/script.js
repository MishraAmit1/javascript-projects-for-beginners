let h = document.getElementById("height").value;
let w = document.getElementById("weight").value;
let button = document.getElementById("btn");

function calculateBMI() {
  let h = document.getElementById("height").value;
  let w = document.getElementById("weight").value;
  if (h == "") {
    alert("Your Height is empty");
  }
  if (w == "") {
    alert("Your Weight is empty");
  }

  var bmi = w / (((h / 100) * h) / 100);
  var total = bmi.toFixed(2);
  document.getElementById("result").innerHTML = " Your BMI is " + total;
}

button.addEventListener("click", calculateBMI);
