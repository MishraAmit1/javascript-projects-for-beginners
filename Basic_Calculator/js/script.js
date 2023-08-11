const inputValue = document.getElementById("input-result");
const buttons = document.querySelectorAll("button");
// Using ForEach  lOOP
buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    const buttonValue = e.target.innerHTML;
    if (buttonValue === "C") {
      inputValue.value = "";
    } else if (buttonValue === "=") {
      inputValue.value = eval(inputValue.value);
    } else if (buttonValue === "×") {
      inputValue.value = inputValue.value.toString().slice(0, -1);
    } else {
      inputValue.value += buttonValue;
    }
  });
});

// Using For Loop

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", () => {
//     const buttonValue = buttons[i].textContent;
//     console.log(buttonValue);
//     if (buttonValue === "C") {
//       inputValue.value = "";
//     } else if (buttonValue === "=") {
//       inputValue.value = eval(inputValue.value);
//     } else if (buttonValue === "×") {
//       inputValue.value = inputValue.value.toString().slice(0, -1);
//     } else {
//       inputValue.value += buttonValue;
//     }
//   });
// }
