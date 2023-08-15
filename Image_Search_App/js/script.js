const btn = document.getElementById("btn");
const errorMessage = document.getElementById("errorMessage");
const gallery = document.getElementById("gallery");

async function fetchImage() {
  const inputValue = document.getElementById("input").value;

  if (inputValue > 10 || inputValue < 1) {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Number should be between 0 and 11";
    return;
  }

  imgs = "";

  try {
    btn.style.display = "none";
    const loading = `<img src="spinner.svg" />`;
    gallery.innerHTML = loading;
    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`
    ).then((res) =>
      res.json().then((data) => {
        if (data) {
          data.forEach((pic) => {
            imgs += `
            <img src=${pic.urls.small} alt="image"/>
            `;
            gallery.style.display = "block";
            gallery.innerHTML = imgs;
            btn.style.display = "block";
            errorMessage.style.display = "none";
          });
        }
      })
    );
  } catch (error) {
    console.log(error);
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "An error happened, try again later";
    btn.style.display = "block";
    gallery.style.display = "none";
  }
}

btn.addEventListener("click", fetchImage);
