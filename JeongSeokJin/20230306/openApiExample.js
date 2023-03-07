// import MenuInfoDetails from "./opApiExampleModule";

const searchInput = document.getElementById('FoodSearchInput');
const rmgItem = document.getElementById('RMGItem');
const menuDetail = document.getElementById('MenuDetail');
const submit = document.getElementById('Submit');

// const menuClass = new MenuInfoDetails();

const menuName = searchInput.value;

const MenuDataList = async () => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${menuName}`)
          .then((res) => res)
          .catch((err) => console.log(err))

  const data = await response.json()

  return data;
}

const menuDataList = await MenuDataList()

function AddMenuList(){
  menuDataList.meals.map((data) => {
    rmgItem.innerHTML += `<div data-id="${data.idMeal}" id='${data.idMeal}' class='card-item'><div class='card-img'><img src='${data.strMealThumb}' /></div><div>${data.strMeal}</div></div>`;

  })
}

function ShowDetails(){
  const menuInfo = document.querySelectorAll('[data-id]');

  menuInfo.forEach(node => {
    menuDataList.meals.map((data) => {
      node.addEventListener('click', function (){
        if(node.id === data.idMeal){
          console.log(data);
          menuDetail.innerHTML = `
          <div class="single-meal">
              <h1>${data.strMeal}</h1>
              <div class="single-meal-info">
                ${data.strCategory ? `<p>분류 : ${data.strCategory}</p>` : ''}
                ${data.strArea ? `<p>국가 : ${data.strArea}</p>` : ''}
              </div>
              <img src="${data.strMealThumb}" alt="${data.strMeal}" />
              <div class="main">
                <h2>조리방법</h2>
                <span></span>
                <ul>
                  ${data.strMeasure1 !== null ? `<li>${data.strMeasure1}</li>` : ""}
                  ${data.strMeasure2 !== null ? `<li>${data.strMeasure2}</li>` : ""}
                  ${data.strMeasure3 !== null ? `<li>${data.strMeasure3}</li>` : ""}
                  ${data.strMeasure4 !== null ? `<li>${data.strMeasure4}</li>` : ""}
                  ${data.strMeasure5 !== null ? `<li>${data.strMeasure5}</li>` : ""}
                  ${data.strMeasure6 !== null ? `<li>${data.strMeasure6}</li>` : ""}
                  ${data.strMeasure7 !== null ? `<li>${data.strMeasure7}</li>` : ""}
                  ${data.strMeasure8 !== null ? `<li>${data.strMeasure8}</li>` : ""}
                  ${data.strMeasure9 !== null ? `<li>${data.strMeasure9}</li>` : ""}
                  ${data.strMeasure10 !== null ? `<li>${data.strMeasure10}</li>` : ""}
                  ${data.strMeasure11 !== null ? `<li>${data.strMeasure11}</li>` : ""}
                  ${data.strMeasure12 !== null ? `<li>${data.strMeasure12}</li>` : ""}
                  ${data.strMeasure13 !== null ? `<li>${data.strMeasure13}</li>` : ""}
                  ${data.strMeasure14 !== null ? `<li>${data.strMeasure14}</li>` : ""}
                  ${data.strMeasure15 !== null ? `<li>${data.strMeasure15}</li>` : ""}
                  ${data.strMeasure16 !== null ? `<li>${data.strMeasure16}</li>` : ""}
                  ${data.strMeasure17 !== null ? `<li>${data.strMeasure17}</li>` : ""}
                  ${data.strMeasure18 !== null ? `<li>${data.strMeasure18}</li>` : ""}
                  ${data.strMeasure19 !== null ? `<li>${data.strMeasure19}</li>` : ""}
                  ${data.strMeasure20 !== null ? `<li>${data.strMeasure20}</li>` : ""}
                </ul>
                <p>${data.strInstructions}</p>
              </div>
            </div>
          `
        }else{
          console.log('id error');
        }
      });
    })
  })
  
}

submit.addEventListener('click', function(){
  AddMenuList()
  ShowDetails()
});

