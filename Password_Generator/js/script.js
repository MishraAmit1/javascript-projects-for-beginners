var password = document.getElementById("password");
function createpass() {
  var chars =
    "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM:<>()*&^%$#@!{}[]";
  var passwordlength = 15;
  var password = "";
  for (let i = 0; i <= passwordlength; i++) {
    var randomnumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomnumber, randomnumber + 1);
    console.log(chars.substring(randomnumber, randomnumber + 1));
  }
  document.getElementById("password").value = password;
}
