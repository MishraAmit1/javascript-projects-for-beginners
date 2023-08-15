const result = document.getElementById("result");
const btns = document.querySelectorAll(".btn");
let num = 0;

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const styleClass = e.currentTarget.classList;
    if (styleClass.contains("btn-decrement")) {
      num--;
    } else if (styleClass.contains("btn-increment")) {
      num++;
    } else {
      num = 0;
    }

    result.textContent = num;
  });
});
