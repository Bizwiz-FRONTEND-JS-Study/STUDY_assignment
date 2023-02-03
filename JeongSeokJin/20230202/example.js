window.onload = function() {
  var btn = document.getElementById('Btn');
  var input = document.getElementById('Input');
  var tb = document.getElementById('LoopTable');

  // 데이터
  const jsonData = testData.data;

  // 데이터 행 추가
  function InsertRow(t1, t2){
    var rows = tb.insertRow();
    var row_td_txt1 = rows.insertCell(0);
    var row_td_txt2 = rows.insertCell(1);

    row_td_txt1.innerText = t1;
    row_td_txt2.innerText = t2;
  }

  // 데이터 행 생성
  for (var i = 0; i < jsonData.length; i++) {
    InsertRow(jsonData[i].code, jsonData[i].codeName);
  }

  // 해당 행의 find- 추가
  function AddInnerText(arr){
    const result = arr.innerText;
    arr.innerText = "find-" + result;
  }

  // 버튼 이벤트
  btn.addEventListener('click', function(){
    // input시 해당 값과 같은 1,2행의 값을 가져오기 위한 count
    var count = 0;
    // input에 행의 번호로 검색 했을 때, 값으로 검색했을 때 할당하는 변수
    var result;

    // 행의 번호인지 값인지 체크
    if(!isNaN(Number(input.value))){
      // 번호일 때
      result = Number(input.value);
      var str = tb.rows[result-1].children[1].innerText;

      for (var i = 0; i < jsonData.length; i++) {
          if( str === tb.rows[i].children[1].innerText){
            if(count < 2){
              AddInnerText(tb.rows[i].children[1]);
            }
            count++;
          }
      }
    }else{
      // 값일 때
      result = String(input.value);

      for (var i = 0; i < jsonData.length; i++) {
          // result 값과 같은 값 찾기
          if(input.value === tb.rows[i].children[1].innerText){
            if(count < 2){
              AddInnerText(tb.rows[i].children[1]);
            }
            count++;
          }
      }
    }


  })
}
