const input = document.querySelector('.calculator_txt')
const input_val = Number(input.innerText)

function onClickNumber(num){
  console.log(num);
  if(num != 0){
    input.innerText = num
  }else{
    input.innerText = num
  }
}