window.onload = () => {
  calculator();
};

const calculator = () => {
  // UI number select
  const $0 = document.querySelector("#num_1");
  const $1 = document.querySelector("#num_1");
  const $2 = document.querySelector("#num_2");
  const $3 = document.querySelector("#num_3");
  const $4 = document.querySelector("#num_4");
  const $5 = document.querySelector("#num_5");
  const $6 = document.querySelector("#num_6");
  const $7 = document.querySelector("#num_7");
  const $8 = document.querySelector("#num_8");
  const $9 = document.querySelector("#num_9");

  // UI operator select
  const $reset = document.querySelector("#opr_reset");
  const $remain = document.querySelector("#opr_remain");
  const $back = document.querySelector("#opr_back");
  const $divide = document.querySelector("#opr_divide");
  const $multifly = document.querySelector("#opr_multifly");
  const $minus = document.querySelector("#opr_minus");
  const $plus = document.querySelector("#opr_plus");
  const $return = document.querySelector("#opr_return");

  // UI result h2 select
  const $result = document.querySelector("#result_value");

  const calculate = () => {
    if (window.event.keyCode == 13) {
      console.log("성공?");
    }
  };
};
