export class Calculator {
  constructor() {
    this.result = '';
  }

  clear() {
    this.result = '';
  }

  append(value) {
    if (value === '.' && this.result.includes('.')) return;
    this.result += value.toString();
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
