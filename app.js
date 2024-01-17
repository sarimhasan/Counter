// initializing the counter variable
let counter = 0;

// cathcing all the buttons at once and the value number
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const pressed = e.currentTarget.classList;

    if (pressed.contains("increase")) {
      counter++;
      value.textContent = counter;
    } else if (pressed.contains("decrease")) {
      counter--;
      value.textContent = counter;
    } else {
      counter = 0;
      value.textContent = counter;
    }
  });
});
