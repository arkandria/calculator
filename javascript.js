let total = 0;
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

console.log(operate(2,"*",2));
console.log(substract(2,3));
console.log(mult(2,3));
console.log(divide(2,3));