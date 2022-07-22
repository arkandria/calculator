let total = 3;
let a;
let b;
let operations=[];


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
      case "x":
        return mult(a,b);
        break;
      case "÷":
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
  numberArr.push(3);
  totalDisplay.textContent = numberArr.join('');
});
const four = document.querySelector("#four");
four.addEventListener ('click', () => {
  numberArr.push(4);
  totalDisplay.textContent = numberArr.join('');
});
const five = document.querySelector("#five");
five.addEventListener ('click', () => {
  numberArr.push(5);
  totalDisplay.textContent = numberArr.join('');
});
const six = document.querySelector("#six");
six.addEventListener ('click', () => {
  numberArr.push(6);
  totalDisplay.textContent = numberArr.join('');
});
const seven = document.querySelector("#seven");
seven.addEventListener ('click', () => {
  numberArr.push(7);
  console.log(numberArr);
  totalDisplay.textContent = numberArr.join('');
});
const eight = document.querySelector("#eight");
eight.addEventListener ('click', () => {
  numberArr.push(8);
  console.log(numberArr);
  totalDisplay.textContent = numberArr.join('');
});
const nine = document.querySelector("#nine");
nine.addEventListener ('click', () => {
  numberArr.push(9);
  totalDisplay.textContent = numberArr.join('');
});
const zero = document.querySelector("#zero");
zero.addEventListener ('click', () => {
  numberArr.push(0);
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

const ac = document.querySelector("#ac");
ac.addEventListener ('click', () => {
  numberArr = [] ;
  totalDisplay.textContent = 0;
});

const del = document.querySelector("#del");
del.addEventListener ('click', () => {
  numberArr.pop();
  totalDisplay.textContent = numberArr.join(' ');
});

const plus = document.querySelector("#add");
plus.addEventListener ('click', () => {
  console.log(numberArr[numberArr.length-1]);
  if (numberArr[numberArr.length-1]=== "+" || numberArr[numberArr.length-1]=== "-" || numberArr[numberArr.length-1]=== "x" || numberArr[numberArr.length-1]==="÷") {
    numberArr.pop();
  }
  numberArr.push("+");
  totalDisplay.textContent = numberArr.join('');
  });

const subst = document.querySelector("#subs");
  subst.addEventListener ('click', () => {
    if (numberArr[numberArr.length-1]=== "+" || numberArr[numberArr.length-1]=== "-" || numberArr[numberArr.length-1]=== "x" || numberArr[numberArr.length-1]==="÷") {
      numberArr.pop();
    }
    numberArr.push("-");
    totalDisplay.textContent = numberArr.join('');
    });

const multi = document.querySelector("#mult");
  multi.addEventListener ('click', () => {
    if (numberArr[numberArr.length-1]=== "+" || numberArr[numberArr.length-1]=== "-" || numberArr[numberArr.length-1]=== "x" || numberArr[numberArr.length-1]==="÷") {
      numberArr.pop();
    }
    numberArr.push("x");
    totalDisplay.textContent = numberArr.join('');
    });

const division = document.querySelector("#divide");
division.addEventListener ('click', () => {
  console.log(numberArr[numberArr.length-1]);
  if (numberArr[numberArr.length-1]=== "+" || numberArr[numberArr.length-1]=== "-" || numberArr[numberArr.length-1]=== "x" || numberArr[numberArr.length-1]==="÷") {
    numberArr.pop();
  }
  numberArr.push("÷");
  console.log(numberArr);
  totalDisplay.textContent = numberArr.join('');
  });


//code for equals()
/*let temp = parseFloat(numberArr.join(''));
  console.log(temp);
  numberArr.push(temp);
a= parseFloat(numberArr.join('')); 
  history = a + "+";
  op = "+"; 
  numberArr = [];*/