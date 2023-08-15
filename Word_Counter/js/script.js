let textbox = document.getElementById("textbox");
textbox.addEventListener("input", function () {
  var text = this.value;
  let char = text.length;
  document.getElementById("char").innerHTML = char;
  text = text.trim(); // end first space remover
  let words = text.split(" "); // for splitting
  let cleanlist = words.filter((elem) => {
    return elem != ""; // in middle extra space
  });
  document.getElementById("word").innerHTML = cleanlist.length;
});
