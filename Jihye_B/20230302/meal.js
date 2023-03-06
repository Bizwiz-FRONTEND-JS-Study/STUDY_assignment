window.onload = () => {
  showCategoryMeals();
};

const enterMeal = document.getElementById('enterMeal')
const submit = document.getElementById('submit')
const random = document.getElementById('random')
const result = document.getElementById("result")
const filter_meal = document.getElementById("filter_meal")
const category_meal = document.getElementById("category_meal")

const showCategoryMeals = async () => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  const data = await response.json();
  if (data.categories.length > 0) {
    category_meal.innerHTML = data.categories.map((meal) => 
      `
      <div class = "meal_items" data-categoryName="${meal.strCategory}">
          <h4>${meal.strCategory}</h4>
          <img src="${meal.strCategoryThumb}" alt="${meal.strCategory}"/>
      </div>
      `
    )
    .join('');
  }
};


const searchMeal = async (e) => {
  const value = enterMeal.value;
  if (value.trim()) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    const data = await response.json();
    if (data.meals == null) {
      result.innerHTML = `<p>찾는 결과가 없습니다.</p>`;
    } else {
      result.innerHTML = `<p>'${value}' 검색결과 ${data.meals.length}건</p>`;
      filter_meal.innerHTML = data.meals.map((meal => `
      <div class="meal">
        <div class="meal_img">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
        </div>
        <div class="meal-info" data-mealID="${meal.idMeal}">
          <p>${meal.strMeal}</p>
        </div>
      </div>
      `))
      .join('')
    }
    enterMeal.value = ''
  } else {
    result.innerHTML = `<p>검색어는 1자 이상 입력해주세요</p>`;
  }
}

//Event Listener
filter_meal.addEventListener('click', (e) => {
  const path = e.path || (e.composedPath && e.composedPath());
  const mealInfo = path.find(item => {
    if (item.classList) {
      return item.classList.contains('meal-info')
    } else {
      return false
    }
  })

  if (mealInfo) {
    const mealID = mealInfo.getAttribute('data-mealID')
    getMealById(mealID)
  }
})


//Getting id for description page
const getMealById = async (mealID) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
  if (response.status === 200) {
    const data = await response.json()
    const meal = await data.meals[0]
    addMealToDOM(meal)
  } else {
    throw new Error('Unable to fetch ID')
  }
}

const addMealToDOM = (meal) => {
  const ingredients = []
  for (let i = 1; i <= 10; i ++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
    } else {
      break
    }
  }
  result.innerHTML = `<p>'${meal.strMeal}' 상세정보입니다.</p>`
  filter_meal.innerHTML = ''
  detail_meal.innerHTML = `
    <div class="info_meal">
      <h1>${meal.strMeal}</h1>
      <div class="desc_meal">
        ${meal.strCategory ? `<p>분류 : ${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p>국가 : ${meal.strArea}</p>` : ''}
      </div>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />

      <div class="desc">
        <h2>조리방법</h2>
        <span></span>
        <ul>
          ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
        <p>${meal.strInstructions}</p>

      </div>
    </div>
  `
}







submit.addEventListener('click', searchMeal)
// random.addEventListener('click', getRandomMeal)