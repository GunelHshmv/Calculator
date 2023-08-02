const btns = document.querySelectorAll(".btns");
const largBtn = document.querySelector("#largBtn");
const screen = document.querySelector(".screen");
const equal = document.querySelector("#equal");
const lgDiv = document.querySelector("#lgDiv");
const calc = document.querySelector(".calc");
const butons = document.querySelector(".butons");
const second = document.querySelector(".second");

let data = [];
let num1 = [];

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (
      e.target.id != "AC" &&
      e.target.id != "-+" &&
      e.target.id != "%" &&
      e.target.id != "/" &&
      e.target.id != "*" &&
      e.target.id != "-" &&
      e.target.id != "+" &&
      e.target.id != "," &&
      e.target.id != "equal" &&
      e.target.id != "Math.pow"
    ) {
      num1.push(e.target.id);
      screen.innerHTML = num1.join("");
    } else {
      num1 = [];
      e.target.parentElement.parentElement.style.backgroundColor = "white";
      e.target.style.color = "orange";
      if (e.target.id == "equal") {
        btns.forEach((item) => {
          if (
            item.style.backgroundColor == "white" &&
            item.children[0].children[0].style.color == "orange"
          ) {
            item.style.backgroundColor = "orange";
            item.children[0].children[0].style.color = "white";
          }
          if (
            item.children[0].children[0].id == "-+" ||
            item.children[0].children[0].id == ","
          ) {
            item.style.backgroundColor = "rgb(191, 190, 190)";
            item.children[0].children[0].style.color = "black";
          }
          if (item.children[0].children[0].id == "Math.pow") {
            item.style.backgroundColor = "rgb(88, 87, 87)";
            item.children[0].children[0].style.color = "white";
          }
        });
        if (data.includes("Math.pow")) {
          screen.innerHTML = eval(`Math.pow(${data[0]},${data[2]})`);
          num1.push(screen.textContent);
        } else {
            console.log(data)
          let finalResult = eval(data.join(""));
          screen.textContent = finalResult;
          num1.push(screen.textContent);
        }
      }
      data = [];
      data.push(screen.textContent);
    }
    data.push(e.target.id);
    if (e.target.id == "AC") {
      e.target.parentElement.parentElement.style.backgroundColor =
        "rgb(191, 190, 190)";
      e.target.style.color = "black";
      screen.textContent = "0";
      num1.splice();
    }
    if (
      e.target.id == "sin" ||
      e.target.id == "cos" ||
      e.target.id == "tan" ||
      e.target.id == "cot" ||
      e.target.id == "log" ||
      e.target.id == "sqrt" ||
      e.target.id == "abs"
    ) {
      num1.pop();
      screen.innerHTML = eval(`Math.${e.target.id}(${num1.join("")})`);
      num1 = [];
      num1.push(screen.textContent);
    }
    if (e.target.id == "PI" || e.target.id == "E") {
        data.pop()
      num1.pop();
      num1.join("")
      screen.innerHTML = eval(`Math.${e.target.id}`);
      num1 = [];
      num1.push(screen.textContent);
      data.push(screen.textContent);
      console.log(num1)
    }
    if (e.target.id == "rad") {
      num1.pop();
      let deg = num1.join("");
      screen.innerHTML = eval(`Math.PI*${deg}/180`);
      num1 = [];
      num1.push(screen.textContent);
    }
    if (e.target.id == "x*x") {
      num1.pop();
      let result = num1.join("");
      screen.innerHTML = result * result;
      num1 = [];
      num1.push(screen.textContent);
    }
    if (e.target.id == "x*x*x") {
      num1.pop();
      let result = num1.join("");
      screen.innerHTML = result * result * result;
      num1 = [];
      num1.push(screen.textContent);
    }
    if (e.target.id == "x!") {
      let x = 1;
      num1.pop();
      let result = num1.join("");
      for (let i = 1; i <= result; i++) {
        x = x * i;
      }
      screen.textContent = x;
      num1 = [];
      num1.push(screen.textContent);
    }
  });
});
largBtn.addEventListener("click", () => {
  if (largBtn.textContent == "Small Calculator") {
    calc.style.width = "20%";
    lgDiv.classList.add("d-none");
    lgDiv.classList.remove("d-flex");
    largBtn.textContent = "Large Calculator";
  } else {
    calc.style.width = "40%";
    lgDiv.classList.remove("d-none");
    lgDiv.classList.add("d-flex");
    second.style.width = "1050px";
    largBtn.textContent = "Small Calculator";
  }
});
