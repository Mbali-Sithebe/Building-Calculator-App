// 1. Calculator Symbols in Array

const buttonValues = [
  "AC",
  "+/-",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
const rightSymbols = ["÷", "×", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

const display = document.getElementById("display");

//A+B, A*B, A-B, A/B
let A = 0;
let operator = null;
let B = null;

// reseting the top variables
function clearAll() {
  A = 0;
  operator = null;
  B = null;
}

for (let i = 0; i < buttonValues.length; i++) {
  //<button></button>
  let value = buttonValues[i];
  let button = document.createElement("button");
  button.innerText = value;

  //Styling Buttons
  if (value == "0") {
    button.style.width = "200px";
    button.style.gridColumn = "span 2";
  }

  if (rightSymbols.includes(value)) {
    button.style.backgroundColor = "#FF9500";
  } else if (topSymbols.includes(value)) {
    button.style.backgroundColor = "#D4D4D2";
    button.style.color = "#1C1C1C";
  }

  //Event listener for clicking buttons
  button.addEventListener("click", function () {
    if (rightSymbols.includes(value)) {
      //oparators and equals symbol

      if (value == "=") {
        if (A != null) {
          B = display.value;
          let numA = Number(A);
          let numB = Number(B);

          //Division
          if (operator == "÷") {
            display.value = numA / numB;
          }
          //Multiplication
          else if (operator == "×") {
            display.value = numA * numB;
          }
          //Subtraction
          else if (operator == "-") {
            display.value = numA - numB;
          }
          //Addition
          else if (operator == "+") {
            display.value = numA + numB;
          }
          clearAll();
        }
      } else {
        operator = value;
        A = display.value;
        display.value = "";
      }
    } else if (topSymbols.includes(value)) {
      if (value == "AC") {
        //clear button

        clearAll();
        display.value = "";
      } else if (value == "+/-") {
        if (display.value != "" && display.value != "0") {
          if (display.value[0] == "-") {
            //remove -

            display.value = display.value.slice(1);
          } else {
            //positive number

            display.value = "-" + display.value;
          }
        }
      } else if (value == "%") {
        display.value = Number(display.value) / 100;
      }
    } else {
      //numbers or .
      if (value == ".") {
        if (!display.value.includes(".")) {
          //add decimal only if not present
          display.value += value;
        }
      } else if (display.value == "0") {
        display.value = value;
      } else {
        display.value += value;
      }
    }
  });

  //add buttons to the calculator
  document.getElementById("buttons").appendChild(button);
}
