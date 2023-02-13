
window.onload = () => {
  // counter();
  Counter();
  getClock();
  setInterval(getClock, 1000);
  // setINgetClock();
};

function Counter() {
  let count = 0;

  this.up = () => {
    return ++count;
  }

  this.down = () => {
    return --count;
  }

  this.reset = () => {
    return 0;
  }
}

  let counter = new Counter();

  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  const reset = document.getElementById("reset");
  const number = document.getElementById("number");

const plusClick = () => {
  console.log("11")
  number.innerText = counter.up();
};
const minusClick = () => {
  number.innerText = counter.down();
};
const resetClick = () => {
  number.innerText = counter.reset();
};

// const counter = () => {
//   const plus = document.getElementById("plus");
//   const minus = document.getElementById("minus");
//   const number = document.getElementById("number");
//   const reset = document.getElementById("reset");
  
//   plus.onclick = () => {
//     const current = parseInt(number.innerText, 10);
//     number.innerText = current + 1;
//   };
  
//   minus.onclick = () => {
//     const current = parseInt(number.innerText, 10);
//     number.innerText = current - 1;
//   };

//   reset.onclick = () => {
//     number.innerText = 0;
//   };
// };

const getClock = () => {
  const clock = document.getElementById("clock");
  const date = new Date
  console.log(date)
  const month = String(date.getMonth());
  const day = String(date.getDay());
  const hours = String(date.getHours()).padStart(2,"0");
  const min = String(date.getMinutes()).padStart(2,"0");
  const sec = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${month}월 ${day}일 ${hours}시 ${min}분 ${sec}초`;
}