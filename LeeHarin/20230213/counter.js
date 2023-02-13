export default class Counter {
  constructor($counter, idx) {
    this.$counter = $counter;
    this.idx = idx; // 여러 개 생성할 경우, 각각의 cntValue의 id를 가질 수 있도록 받아옴
    this.count = 0;
  }
  add = () => {
    ++this.count;
  };
  minus = () => {
    --this.count;
  };
  reset = () => {
    this.count = 0;
  };

  setValue = () => {
    // document의 cntValue 값, 버튼 클릭 시 마다 적용해주기 위한 함수
    const cntValue = document.getElementById(`cntValue${this.idx}`);
    cntValue.innerText = this.count;
  };

  render = () => {
    // 처음 실행 시, document에 render하는 함수
    const counterDiv = document.createElement('div');
    counterDiv.innerHTML = `<h3 id="cntValue${this.idx}">0</h3>`;
    counterDiv.appendChild(this.createBtn());
    this.$counter.appendChild(counterDiv);
  };

  createBtn = () => {
    // 버튼 그룹을 생성해주는 함수
    const btnGroups = document.createElement('div');
    for (let action of [this.add, this.minus, this.reset]) {
      const actionBtn = document.createElement('button');

      if (action === this.add) actionBtn.innerText = '➕';
      else if (action === this.minus) actionBtn.innerText = '➖';
      else actionBtn.innerText = '💨';

      actionBtn.addEventListener('click', () => {
        action();
        this.setValue();
      });

      btnGroups.appendChild(actionBtn);
    }
    return btnGroups;
  };
}
