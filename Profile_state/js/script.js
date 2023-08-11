const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerHTML = 0;
  const updateCounter = () => {
    const curValue = +counter.innerHTML;
    const tarValue = counter.getAttribute("data-target");
    const incre = Math.ceil(tarValue / 100);
    if (curValue < tarValue) {
      counter.innerHTML = `${curValue + incre}`;
      setTimeout(updateCounter, 19);
    } else {
      counter.innerHTML = tarValue;
    }
  };
  updateCounter();
});
