const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = ""; // clear
    } else if (value === "←") {
      display.value = display.value.slice(0, -1); // backspace
    } else if (value === "=") {
      try {
        display.value = eval(display.value); // evaluate expression
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value; // append clicked button
    }
  });
});
