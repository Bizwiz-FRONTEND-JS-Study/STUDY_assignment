import { setTime, getTimeString } from './time.js';

export default class Bonus {
  constructor($bonus) {
    this.$bonus = $bonus;
    this.toDay = new Date();
    this.tomorrow = new Date(this.toDay.setDate(this.toDay.getDate() + 1));
  }
  render = () => {
    this.countDownNextDay();
    this.countDownOtherDay();
  };

  countDownNextDay = () => {
    const endNextDiv = document.createElement('div');
    endNextDiv.innerHTML = `<h3>하루 뒤</h3><p id="countDown_next">LOADING...</p>`;
    this.$bonus.appendChild(endNextDiv);
    const countDownNext = document.getElementById('countDown_next');

    setInterval(() => {
      dateComparison(this.tomorrow, countDownNext);
    }, 1000);
  };

  countDownOtherDay = () => {
    const endOtherDiv = document.createElement('div');
    const otherDay = new Date(2024, 2, 1, 10);

    endOtherDiv.innerHTML = `<h3>${getTimeString(setTime(otherDay))}까지</h3><p id="countDown_other">LOADING...</p>`;
    this.$bonus.appendChild(endOtherDiv);
    const countDownOther = document.getElementById('countDown_other');

    setInterval(() => {
      dateComparison(otherDay, countDownOther);
    }, 1000);
  };
}

const dateComparison = (tomorrow, countDownNext) => {
  const toDay = new Date();
  const dCount = tomorrow.getTime() - toDay.getTime();

  const day = Math.floor(dCount / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((dCount % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((dCount % (1000 * 60)) / 1000);

  let cntText = '';
  if (second < 10) {
    second = `0${second}`;
  }
  if (dCount < 0) {
    countDownNext.innerText = '카운트 다운 완료🎉';
  } else {
    if (day > 0) {
      cntText += day + '일 ';
    }
    if (hours > 0) {
      cntText += hours + '시간 ';
    }
    if (minute > 0) {
      cntText += minute + '분 ';
    }
    countDownNext.innerText = cntText + second + '초';
  }
};
