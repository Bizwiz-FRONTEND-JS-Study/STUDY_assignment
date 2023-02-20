const countInput = document.querySelector('.countInput');
let count = countInput.value;

function IncreaseBtn(){
    countInput.value = ++count;
}

function ReductionBtn(){
    countInput.value = --count;
}

function ResetBtn(){
    count = 0;
    countInput.value = count;
}

const currentTime = document.querySelector('.currentTime');
const newDate = new Date();
const weekDate = ['일','월','화','수','목','금','토'];
let nowDate = newDate.getFullYear() + "년도 " + (newDate.getMonth()+1) + "월 " + newDate.getDate() + "일 " + weekDate[newDate.getDay()]  +"요일 " + newDate.getHours() + "시 " + newDate.getMinutes() + "분 " + newDate.getSeconds() + "초";

currentTime.innerText += nowDate;