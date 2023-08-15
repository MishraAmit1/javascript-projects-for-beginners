const btnAdd = document.getElementById("add-btn");
const main = document.querySelector("#main");
const saveData = () => {
  const notes = document.querySelectorAll(".note textarea");
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });
  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
  // saving data into local storage
  //   localStorage.setItem("notes", JSON.stringify(data));
};

btnAdd.addEventListener("click", function () {
  addNote();
});
const addNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
            <div class="tool">
                <i class="save fa fa-save"></i>
                <i class="delete fas fa-trash"></i>
            </div>
            <textarea>${text}</textarea>
  `;
  // for removing the Notes App
  note.querySelector(".delete").addEventListener("click", function () {
    note.remove();
    saveData();
  });
  //   for saving data
  note.querySelector(".save").addEventListener("click", function () {
    saveData();
  });
  main.appendChild(note);
  saveData();
};

(function () {
  //   const lsNotes = localStorage.getItem("notes");

  const lsNotes = JSON.parse(localStorage.getItem("notes"));
  if (lsNotes == null) {
    addNote();
  } else {
    lsNotes.forEach((lsNote) => {
      addNote(lsNote);
    });
    console.log(lsNotes);
  }
})();
