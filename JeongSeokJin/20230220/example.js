export default class Calcultor{
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

