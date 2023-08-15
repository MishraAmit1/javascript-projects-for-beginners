// const inputValue = document.querySelector("#input-box");
// const toDoBox = document.querySelector("#to-do-box");
// const btn = document.querySelector("#btn");

// inputValue.addEventListener("keyup", function (event) {
//   if (event.key == "Enter") {
//     addToDo(this.value);
//     this.value = "";
//     saveData();
//   }
// });

// const saveData = () => {
//   //   const notes = document.querySelectorAll("#to-do-box");
//   //   const data = [];
//   //   notes.forEach((note) => {
//   //     data.push(note.value);
//   //   });
//   //   if (data.length === 0) {
//   //     localStorage.removeItem("notes");
//   //   } else {
//   //     localStorage.setItem("notes", JSON.stringify(data));
//   //   }
//   //   saving data into local storage
//   localStorage.setItem("data", toDoBox.innerHTML);
// };

// const showTask = () => {
//   //   saving data into local storage
//   listItem.innerHTML = localStorage.getItem("data");
// };
// showTask();

// const addToDo = (item) => {
//   const listItem = document.createElement("li");
//   listItem.innerHTML = `
//         ${item}
//         <i class="delete fas fa-times"></i>
// `;

//   listItem.addEventListener("click", function () {
//     this.classList.toggle("done");
//   });

//   listItem.querySelector(".delete").addEventListener("click", () => {
//     listItem.remove();
//   });
// toDoBox.appendChild(listItem);
// };

const inputValue = document.querySelector("#input-box");
const listConatiner = document.querySelector("#list-conatiner");
const btn = document.querySelector("#btn");

function addTask() {
  if (inputValue.value === "") {
    alert("Notes can't be empty ");
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputValue.value;
    listConatiner.appendChild(listItem);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listItem.appendChild(span);
  }
  inputValue.value = "";
  saveData();
}

listConatiner.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("to-do-list", listConatiner.innerHTML);
}

function getData() {
  listConatiner.innerHTML = localStorage.getItem("to-do-list");
}
getData();
