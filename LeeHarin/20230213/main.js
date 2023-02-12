import Counter from './counter.js';
import Time from './time.js';
import Bonus from './bonus.js';

const counterDiv = document.getElementById('counter');
const timeDiv = document.getElementById('time');
const bonusDiv = document.getElementById('bonus');

const counter = new Counter(counterDiv, 1);
counter.render();

// const counter2 = new Counter(counterDiv, 2);
// counter2.render();

const time = new Time(timeDiv);
time.render();

const bonus = new Bonus(bonusDiv);
bonus.render();
