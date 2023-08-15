let cel = document.getElementById("cel"); //for 1
let fah = document.getElementById("fah"); //for 1
let kel = document.getElementById("kel"); //for 1
let celi = document.getElementById("celi"); //for 2
let fahh = document.getElementById("fahh"); //for 2
let keli = document.getElementById("keli"); //for 2

//  c to fah vice versa
cel.addEventListener("input", function () {
  let c = this.value;
  let f = (c * 9) / 5 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  fah.value = f;
});
fah.addEventListener("input", function () {
  let f = this.value;
  let c = ((f - 32) * 5) / 9;
  if (!Number.isInteger(c)) {
    c = c.toFixed(4);
  }
  cel.value = c;
});
// ----------------------- c to k vice versa
celi.addEventListener("input", function () {
  let p = this.value;
  let k = +p + 273.15;
  console.log(k);
  if (!Number.isInteger(k)) {
    k = k.toFixed(4);
  }
  kel.value = k;
});
kel.addEventListener("input", function () {
  let k = this.value;
  let p = k - 273.15;
  if (!Number.isInteger(p)) {
    p = p.toFixed(4);
  }
  celi.value = p;
});
// ------------------  k to fah vice versa
keli.addEventListener("input", function () {
  let k = this.value;
  let f = ((k - 273.15) * 9) / 5 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  fahh.value = f;
});
fahh.addEventListener("input", function () {
  let f = this.value;
  let k = ((f - 32) * 5) / 9 + 273.15;
  if (!Number.isInteger(k)) {
    k = k.toFixed(4);
  }
  keli.value = k;
});
