const toggle = document.getElementById("toggle");
const lights = document.getElementsByClassName("light");

toggleHandler = () => {
  console.log(lights);
  [...lights].forEach((el) => {
    el.classList.toggle("dark");
  });
};

toggle.addEventListener("click", toggleHandler);