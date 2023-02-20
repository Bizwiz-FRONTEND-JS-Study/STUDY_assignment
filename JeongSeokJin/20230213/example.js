const countDiv= document.getElementsByClassName('countDiv');
const countId = countDiv[0].children[0];
let count = countId.value;

function onChangeValue(){
  count = countId.value
}

function IncreaseBtn(){
  countId.value = ++count;
}

function ReductionBtn(){
  if(count > 0)
    countId.value = --count;
}

function ResetBtn(){
  count = 0;
  countId.value = count;
}

const currentTime = document.getElementById('CurrentTime');

function InserDate(){
  const newDate = new Date();
  const weekDate = ['일','월','화','수','목','금','토'];

  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const weekend =  weekDate[newDate.getDay()];
  const ampm = newDate.getHours() % 12 ? "오후" : "오전";
  const hour = newDate.getHours() % 12 ? newDate.getHours() % 12 : 12;
  const minutes = newDate.getMinutes();
  const second = newDate.getSeconds();
  
  let nowDate = `${year}년 ${month}월 ${day}일 ${weekend}요일 ${ampm} ${hour}시 ${minutes}분 ${second}초`;
  
  currentTime.innerText = nowDate;
}

setInterval(InserDate,1000)