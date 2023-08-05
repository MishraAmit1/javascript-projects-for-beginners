const calculate = document.getElementById("calAge");
const birthday = document.getElementById("yourBirthday");
const result = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthday.value;
  if (birthdayValue === "") {
    alert("Pleasee enter your birthday first");
  } else {
    const age = getToAge(birthdayValue);
    result.innerHTML = `You are ${age} years old. `;
  }
}
function getToAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let currentAge = currentDate.getFullYear() - birthdayDate.getFullYear();
  return currentAge;
}
calculate.addEventListener("click", calculateAge);
