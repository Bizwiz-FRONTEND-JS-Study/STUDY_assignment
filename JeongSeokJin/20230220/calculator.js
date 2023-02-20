import Calcultor from './example.js';

const calcultor_div = document.querySelector('.calculator');
const calculator_txt = document.querySelector('.calculator_txt');
const calculator_content = calcultor_div.querySelector('.calculator_content');


const result_array = []
let prevNum = 0;

calculator_content.addEventListener('click', function(e){
  const inputNum = calculator_txt.innerText;
  const value = e.target.value;
  const operator = e.target.innerText;
  
  let calcultor = new Calcultor(inputNum, value, operator);

  if(value !== ''){
    calcultor.insertValue();
  }else{
    calcultor.activeOperator();
  }
})
