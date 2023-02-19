export default class Calculater {
  constructor($calc) {
    this.$calc = $calc;
    this.result = '';
    this.value = [];
    this.prevNum = 0;
    this.nextNum = 0;
    this.prevOperate = '';
  }

  render = () => {
    this.createCalc();
    this.setResultValue();
  };

  setResultValue = () => {
    const calcTemp = document.getElementById('calcTemp');
    const result = document.getElementById('result');

    // 이벤트 버블링 / 캡쳐링 / 위임
    // 버블링 : (자식 -> 부모)특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달
    // 캡쳐링 : (부모 -> 자식)이벤트 버블링과 반대 방향으로 진행되는 이벤트 전파 방식
    // 이벤트 위임 : 하위 요소에 각각 이벤트를 붙이지 않고 상위 요소에서 하위 요소의 이벤트들을 제어하는 방식

    calcTemp.addEventListener('click', (event) => {
      const isButton = event.target.nodeName === 'BUTTON';
      const isNum = event.target.classList.contains('num');
      const isReset = event.target.classList.contains('reset');
      const isAction = event.target.classList.contains('action');
      const isEnter = event.target.classList.contains('enter');

      if (!isButton) return;

      if (isNum) {
        if (this.prevOperate === '') {
          this.value.push(event.target.innerText);
          this.prevNum = this.value.join('');
          result.innerText = this.prevNum;
        } else if (this.prevOperate !== '' && this.prevNum !== 0) {
          this.value.push(event.target.innerText);
          this.nextNum = this.value.join('');
          result.innerText = this.nextNum;
        }
      }

      if (isReset) {
        this.value = [];
        this.prevNum = 0;
        this.nextNum = 0;
        this.result = '';
        this.prevOperate = '';
        result.innerText = this.prevNum;
      }

      if (isAction) {
        this.value = [];
        if (this.prevNum !== 0) {
          this.prevOperate = event.target.innerText;
        }
      }

      if (isEnter) {
        this.result = calculate(this.prevNum, this.prevOperate, this.nextNum);
        this.value = [];
        this.prevNum = this.result;
        this.nextNum = 0;
        this.prevOperate = '';
        result.innerText = this.result;
      }
    });
  };

  createCalc = () => {
    const temp = getElWithSelector('div', 'id', 'calcTemp');
    const result = getElWithSelector('div', 'id', 'result');
    const numbers = getElWithSelector('div', 'id', 'numbers');

    for (let i = 0; i < 10; i++) {
      const number = getElWithSelector('button', 'class', `btn num`);
      number.innerText = i;
      i !== 0 && (number.style.order = i);
      numbers.appendChild(number);
    }

    const reset = getElWithSelector('button', 'class', 'btn reset');
    reset.innerText = 'C';

    const enter = getElWithSelector('button', 'class', 'btn enter');
    enter.innerText = '=';

    const actions = getElWithSelector('div', 'id', `actions`);

    for (let i of ['+', '-', '*', '/']) {
      const action = getElWithSelector('button', 'class', `btn action`);
      action.innerText = i;
      actions.appendChild(action);
    }

    temp.appendChild(result);
    temp.appendChild(numbers);
    temp.appendChild(actions);
    numbers.appendChild(reset);
    numbers.appendChild(enter);

    this.$calc.appendChild(temp);
  };
}

const calculate = (num1, operator, num2) => {
  let result = 0;
  if (operator === '+') {
    result = Number(num1) + Number(num2);
  } else if (operator === '-') {
    result = Number(num1) - Number(num2);
  } else if (operator === '*') {
    result = Number(num1) * Number(num2);
  } else if (operator === '/') {
    result = Number(num1) / Number(num2);
  }
  return String(result);
};

const getElWithSelector = (tagName, selector, name) => {
  const element = document.createElement(tagName);
  element.setAttribute(selector, name);
  return element;
};
