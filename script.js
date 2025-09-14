// const display = document.getElementById("display");
// const buttons = document.querySelectorAll("button");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const value = button.textContent;

//     if (value === "C") {
//       display.value = ""; // clear
//     } else if (value === "←") {
//       display.value = display.value.slice(0, -1); // backspace
//     } else if (value === "=") {
//       try {
//         display.value = eval(display.value); // evaluate expression
//       } catch {
//         display.value = "Error";
//       }
//     } else {
//       display.value += value; // append clicked button
//     }
//   });
// });

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const operators = ["+", "-", "*", "/"];

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    const lastChar = display.value[display.value.length - 1];

    if (value === "C") {
      display.value = ""; // clear
    } else if (value === "←") {
      display.value = display.value.slice(0, -1); // backspace
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      // Prevent two operators in a row
      if (operators.includes(value) && operators.includes(lastChar)) return;

      // Prevent multiple decimals in a number
      if (value === "." && display.value.split(/[\+\-\*\/]/).pop().includes(".")) return;

      display.value += value; // append clicked button
    }
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  const allowedKeys = "0123456789+-*/.=BackspaceEnter";

  if (allowedKeys.includes(key)) {
    const lastChar = display.value[display.value.length - 1];

    if (key === "Enter") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else if (key === "Backspace") {
      display.value = display.value.slice(0, -1);
    } else if (key === ".") {
      if (display.value.split(/[\+\-\*\/]/).pop().includes(".")) return;
      display.value += ".";
    } else if (operators.includes(key) && operators.includes(lastChar)) {
      return;
    } else {
      display.value += key;
    }
  }
});
