const tableData = () => {
  const data = basicData.data;
  //입력받은 데이터 체크하여 value 값 변경
  let enterData = document.getElementById("search").value;
  if (enterData) {
    const result = data.filter((row)=> {
      if (!isNaN(enterData) && row.code == enterData) {
        enterData = row.codeName;
      }
      return enterData == row.codeName;
    })
    document.getElementById(result[0].code).innerText = 'find-'+ result[0].codeName
    document.getElementById(result[1].code).innerText = 'find-'+ result[1].codeName
  }
// }
  //초기 테이블 생성
  const setData = () => {
    for (i = 0; i < data.length; i++) {
      let section = document.getElementById('section');
      let tr = document.createElement("tr");
      let code = document.createElement("td");		  
      code.appendChild(document.createTextNode(data[i].code));
      let codeName = document.createElement("td");			 
      codeName.appendChild(document.createTextNode(data[i].codeName));
      codeName.id = i+1;
      tr.appendChild(code);
      tr.appendChild(codeName);
      section.appendChild(tr);
    }
  }
  return {
    set : setData
  }
};

const outData = tableData();
window.onload = () => {
  outData.set();
};
