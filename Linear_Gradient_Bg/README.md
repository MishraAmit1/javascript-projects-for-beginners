# Gradient Text Copier

This project is a simple web application to demonstrate copying text from a `div` element, particularly when the content is a linear gradient CSS code. While working on this, I encountered a challenge and found a solution, which is documented here.

---

## Problem Faced

Initially, I attempted to use the following code to copy text from a `div` element:

```html
<div id="myInput">linear-gradient(to right, #ff7e5f, #feb47b)</div>
<button onclick="myFunction()">Copy text</button>

<script>
function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select(); // Attempting to select text
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
</script>
