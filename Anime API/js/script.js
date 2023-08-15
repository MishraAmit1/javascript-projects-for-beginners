const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const amineNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.innerHTML = "Loading....";
    amineNameEl.innerHTML = "Updating....";
    const response = await fetch("https://api.catboys.com/img");
    const data = await response.json();
    btnEl.innerText = "Get Anime";
    amineNameEl.innerText = data.artist;
    animeImgEl.src = data.url;
  } catch (error) {
    console.log(error);
    amineNameEl.innerText = "An error happened, please try again";
  }
});
