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

class Calcultor{
  constructor(inputNum, value, operator){
    this.inputNum = inputNum*1
    this.value = value
    this.operator = operator
  }

  insertValue(){
    if(this.inputNum != 0){
      calculator_txt.innerText += this.value
      prevNum = calculator_txt.innerText;
    }else{
      calculator_txt.innerText = this.value
    }
    console.log(prevNum);
  }

  activeOperator(){
    let result = 0;
    
    // console.log('prevNum',prevNum);
    switch(this.operator){
      case "+":
        calculator_txt.innerText = 0;
        break;
      case "-":
        break;
      case "*":
        break;
      case "/":
        break;
      case "=":
        result = this.inputNum + prevNum;
        console.log("this.inputNum",this.inputNum);

        console.log("prevNum",prevNum);

        console.log("result",result);
        // result = `${prevNum} ${prevOpt} ${calculator_txt.innerText*1}`;
        calculator_txt.innerText = result
        break;
      case "C":
        result = 0;
        prevNum = 0;
        calculator_txt.innerText = 0
      break;
      default:
        break;
      }
    // calculator_txt.innerText = result
  }
  

}

