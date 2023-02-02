window.onload = function() {
  var btn = document.getElementById('Btn');
  var input = document.getElementById('Input');
  var tb = document.getElementById('LoopTable');

  const jsonData = testData.data;

  function InsertRow(t1, t2){
    var rows = tb.insertRow();
    var row_td_txt1 = rows.insertCell(0);
    var row_td_txt2 = rows.insertCell(1);

    row_td_txt1.innerText = t1;
    row_td_txt2.innerText = t2;
  }

  for (var i = 0; i < jsonData.length; i++) {
    InsertRow(jsonData[i].code, jsonData[i].codeName);
  }

  function FindText(arr){
    const result = arr.innerText;
    arr.innerText = "find-" + result;
  }

  btn.addEventListener('click', function(){
    var count = 0;
    for (var i = 0; i < jsonData.length; i++) {
      if(input.value === tb.rows[i].children[1].innerText){
        if(count < 2){
          FindText(tb.rows[i].children[1]);
        }
        count++;
      }else{
        continue;
      }
    }
  })
}
