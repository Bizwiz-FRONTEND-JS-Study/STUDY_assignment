// import { Calculator } from "./example";

class Calculator {
  constructor() {
    this.result = '0';
  }

  clear() {
    this.result = '0';
  }

  append(value) {
    if(this.result === "0" && value === "0"){
      console.log(123);
    }else if(this.result === "0"){
      this.result = value.toString();
    }else{
      this.result += value.toString();
    }
  }

  calculate() {
    try {
      this.result = eval(this.result).toString();
    } catch (error) {
      this.result = 'Error';
    }
  }

  updateDisplay() {
    const display = document.getElementById('result');
    display.value = this.result;
  }
}

const calculator = new Calculator();

const numberButtons       = document.querySelectorAll('[data-number]');
const operationButtons    = document.querySelectorAll('[data-operation]');
const equalsButton        = document.querySelector('[data-equals]');
const clearButton         = document.querySelector('[data-clear]');
const display             = document.getElementById('result');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.append(button.dataset.number);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.append(button.dataset.operation);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', () => {
  calculator.calculate();
  calculator.updateDisplay();
});

clearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});