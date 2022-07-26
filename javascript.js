let total = 0;
let a = null;
let b= null;
let op=null;
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
      case " + ":  
        return add(a,b);
        break;
      case " - ":
        return substract(a,b);
        break;
      case " x ":
        return mult(a,b);
        break;
      case " ÷ ":
        return divide(a,b)
      break;
    }
};


let numberArr = [];
let histArray = [];

let display;
let dotCounter=0;

const totalDisplay = document.querySelector(".total")

insertN = (n) => {
  numberArr.push(n);
  totalDisplay.textContent = numberArr.join('');
};
insertDot = () => {
  if (dotCounter===0){
    numberArr.push(".");
    totalDisplay.textContent = numberArr.join('');
    dotCounter++;
}
};
deleteAll = () => {
  numberArr = [] ;
  operations = [] ;
  totalDisplay.textContent = 0;
};
deleteOne = () => {
  numberArr.pop();
  if (numberArr.length===0){
  numberArr.push(0)};
  totalDisplay.textContent = numberArr.join('');
};


const one = document.querySelector("#one");
one.addEventListener ('click', () => {
  insertN(1);
});

const two = document.querySelector("#two");
two.addEventListener ('click', () => {
  insertN(2);
});
const three = document.querySelector("#three");
three.addEventListener ('click', () => {
  insertN(3);
});
const four = document.querySelector("#four");
four.addEventListener ('click', () => {
  insertN(4);
});
const five = document.querySelector("#five");
five.addEventListener ('click', () => {
  insertN(5);
});
const six = document.querySelector("#six");
six.addEventListener ('click', () => {
  insertN(6);
});
const seven = document.querySelector("#seven");
seven.addEventListener ('click', () => {
  insertN(7);
});
const eight = document.querySelector("#eight");
eight.addEventListener ('click', () => {
  insertN(8);
});
const nine = document.querySelector("#nine");
nine.addEventListener ('click', () => {
  insertN(9);
});
const zero = document.querySelector("#zero");
zero.addEventListener ('click', () => {
  
  if (!((numberArr.length===0)|| (numberArr[numberArr.length-1]==' + '||numberArr[numberArr.length-1]==' - ' ||numberArr[numberArr.length-1]==' x ' ||numberArr[numberArr.length-1]==' ÷ '))) {
    insertN(0);
  } 
  
});
const dot = document.querySelector("#dot");
dot.addEventListener ('click', () => {
  insertDot();
});

const ac = document.querySelector("#ac");
ac.addEventListener ('click', () => {
  deleteAll();
});

const c = document.querySelector("#c");
c.addEventListener ('click', () => {
  deleteAll();
});

const del = document.querySelector("#del");
del.addEventListener ('click', () => {
  deleteOne();
});

const plus = document.querySelector("#add");
plus.addEventListener ('click', () => {
  
  if (numberArr[numberArr.length-1]=== "+" || numberArr[numberArr.length-1]=== "-" || numberArr[numberArr.length-1]=== "x" || numberArr[numberArr.length-1]==="÷") {
    numberArr.pop();
  }
  numberArr.push(" + ");
  totalDisplay.textContent = numberArr.join('');
  });

const subst = document.querySelector("#subs");
  subst.addEventListener ('click', () => {
    if (numberArr[numberArr.length-1]=== "+" || numberArr[numberArr.length-1]=== "-" || numberArr[numberArr.length-1]=== "x" || numberArr[numberArr.length-1]==="÷") {
      numberArr.pop();
    }
    numberArr.push(" - ");
    totalDisplay.textContent = numberArr.join('');
    });

const multi = document.querySelector("#mult");
  multi.addEventListener ('click', () => {
    if (numberArr[numberArr.length-1]=== "+" || numberArr[numberArr.length-1]=== "-" || numberArr[numberArr.length-1]=== "x" || numberArr[numberArr.length-1]==="÷") {
      numberArr.pop();
    }
    
    numberArr.push(" x ");
    totalDisplay.textContent = numberArr.join('');
    });

const division = document.querySelector("#divide");
division.addEventListener ('click', () => {
  
  if (numberArr[numberArr.length-1]=== "+" || numberArr[numberArr.length-1]=== "-" || numberArr[numberArr.length-1]=== "x" || numberArr[numberArr.length-1]==="÷") {
    numberArr.pop();
  }
  numberArr.push(" ÷ ");
  
  totalDisplay.textContent = numberArr.join('');
  });

const equals = document.querySelector("#equals");
equals.addEventListener ('click', () => {
    
    a = null;
    b = null;
    op = null;
    operations =[];
    if (numberArr[numberArr.length-1]=== "+" || numberArr[numberArr.length-1]=== "-" || numberArr[numberArr.length-1]=== "x" || numberArr[numberArr.length-1]==="÷") {
      numberArr.pop();
    };
  let temp = []; 
  numberArr.push(" = ");
  for (i=0; i<numberArr.length; i++) {
    if (typeof numberArr[i]==='number') {
      temp.push(numberArr[i]);
    } else {
      operations.push(parseFloat(temp.join(''))),
      temp = [];
      operations.push(numberArr[i]);
    }
  }
  
  //console.log(operations);
  
  if (Number.isNaN(operations[0])) {
    operations.shift();
    
  };
  
  if (operations[0]== ' - ' || operations[0]===' + '|| operations[0]==' x '|| operations[0]===' ÷ ') {
    
    operations.unshift(total);
    
  };

  for (i=0; i<operations.length; i++) {
   
    if (i===0 && typeof operations[i]==='number') {
      a = operations[i];
      
    } else if (i>1 && typeof operations[i]==='number') {
     
      b = operations[i];
      
      
    } else if (i>0 && (operations[i]===' + '|| operations[i]===' - '|| operations[i]==' x '|| operations[i]===' ÷ ')) {
      if (op== null){
        op= operations[i];
      
        
      } else   {
        
        total = operate(a,op,b);
        
        a= total;
        
        b= null;
        op=operations[i];
        
      }
    
      
    } else if (operations[i]===' = ') {
      if (!(op== null && b== null)){
        
        total = operate(a,op,b);
        totalDisplay.textContent = total;
        b= null;
        op=null;
        operations = [];
        numberArr = [];
        numberArr.push(total);
      }      
    } 
  };
});

