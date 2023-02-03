const tableData = () => {
  const data = a.data;
  //입력받은 데이터 숫자, 문자 구분하여 keyWord 추출
  enterData = document.getElementById("search").value;
  if (enterData) {
    const findData = data.filter((row)=> {
      if (enterData == row.code) {
        return row.codeName;
      } 
      if (enterData == row.codeName) {
        return row.codeName;
      }
  });
    const keyWord = findData[0].codeName;
    //키워드 사용하여 text 변경
    if (keyWord) {
      const newData = data.filter((row)=> {
      return keyWord == row.codeName;
    })
    const result = newData.slice(0, 2)
    document.getElementById(result[0].code).innerText = 'find-'+ result[0].codeName
    document.getElementById(result[1].code).innerText = 'find-'+ result[1].codeName
  }
}
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
outData.set();
