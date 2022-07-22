let total = 3;
let a;
let b;


const add = (a,b) => {
    total = a + b;
    return total;
};

const substract = (a,b) => {
    total = a - b;
    return total;
};

const mult = (a,b) => {
    total = a * b;
    return total;
}

const divide = (a,b) => {
    total = a / b;
    return total;
}

const operate = (a, operator, b) => {
    switch (operator) {
      case "+":  
        return add(a,b);
        break;
      case "-":
        return substract(a,b);
        break;
      case "*":
        return mult(a,b);
        break;
      case "/":
        return divide(a,b)
      break;
    }
};

let numberArr = [];
let histArray = [];
let history = "";
let display;
let dotCounter=0;

const totalDisplay = document.querySelector(".total")

const historyDisplay = document.querySelector(".prev")
historyDisplay.textContent = history;
const one = document.querySelector("#one");
one.addEventListener ('click', () => {
  numberArr.push(1);
  totalDisplay.textContent = numberArr.join('');
});
const two = document.querySelector("#two");
two.addEventListener ('click', () => {
  numberArr.push(2);
  console.log(numberArr);
  totalDisplay.textContent = numberArr.join('');
});
const three = document.querySelector("#three");
three.addEventListener ('click', () => {
  numberArr.push(1);
  totalDisplay.textContent = numberArr.join('');
});
const four = document.querySelector("#four");
four.addEventListener ('click', () => {
  numberArr.push(1);
  totalDisplay.textContent = numberArr.join('');
});
const five = document.querySelector("#five");
five.addEventListener ('click', () => {
  numberArr.push(1);
  totalDisplay.textContent = numberArr.join('');
});
const six = document.querySelector("#six");
six.addEventListener ('click', () => {
  numberArr.push(1);
  totalDisplay.textContent = numberArr.join('');
});
const seven = document.querySelector("#seven");
seven.addEventListener ('click', () => {
  numberArr.push(2);
  console.log(numberArr);
  totalDisplay.textContent = numberArr.join('');
});
const eight = document.querySelector("#eight");
eight.addEventListener ('click', () => {
  numberArr.push(1);
  totalDisplay.textContent = numberArr.join('');
});
const nine = document.querySelector("#nine");
nine.addEventListener ('click', () => {
  numberArr.push(1);
  totalDisplay.textContent = numberArr.join('');
});
const zero = document.querySelector("#zero");
zero.addEventListener ('click', () => {
  numberArr.push(1);
  totalDisplay.textContent = numberArr.join('');
});
const dot = document.querySelector("#dot");
dot.addEventListener ('click', () => {
  if (dotCounter===0){
    numberArr.push(".");
    totalDisplay.textContent = numberArr.join('');
    dotCounter = 1;
  };
});

const c = document.querySelector("#c");
c.addEventListener ('click', () => {
  numberArr = [] ;
  totalDisplay.textContent = 0;
});

const plus = document.querySelector("#add");
c.addEventListener ('click', () => {
  a= parseFloat(numberArr.join('')); 
  history = a + "+";
  numberArr = [];
  totalDisplay.textContent = 0;
});