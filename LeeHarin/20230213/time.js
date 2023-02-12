const WEEKS = ['일', '월', '화', '수', '목', '금', '토'];

export default function Time($time) {
  this.$time = $time;
  this.render = () => {
    this.$time.innerHTML += `<div id="timeView">LOADING...</div>`;
    const timeView = document.getElementById(`timeView`);
    refreshTime(timeView);
  };
}

const refreshTime = (timeView) => {
  setInterval(() => {
    const toDay = new Date();
    timeView.innerText = getTimeString(setTime(toDay));
  }, 1000);
};

const formattingTime = (time) => (time < 10 ? `0${time}` : time);

export const getTimeString = (time) => {
  const getMeridiemHours = () => (time.hours > 12 ? `오후 ${time.hours - 12}` : `오전 ${time.hours}`);
  return `${time.year}년 ${time.month}월 ${time.date}일 ${WEEKS[time.day]}요일 ${getMeridiemHours()}:${time.minutes}:${
    time.seconds
  }`;
};

export const setTime = (toDay) => {
  const year = toDay.getFullYear();
  const month = toDay.getMonth() + 1;
  const date = toDay.getDate();
  const day = toDay.getDay();
  const hours = toDay.getHours();
  const minutes = formattingTime(toDay.getMinutes());
  const seconds = formattingTime(toDay.getSeconds());

  return { year, month, date, day, hours, minutes, seconds };
};
