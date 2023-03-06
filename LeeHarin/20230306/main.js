import { getMealApi, getSearchMealApi, getShuffleApi } from './api.js';

const shuffle = document.getElementById('shuffleBtn');
const resultHeading = document.getElementById('result-title');
const singleMeals = document.getElementById('single-meal');
const search = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchWord');
const meals = document.getElementById('meals');

const getSearchMenu = () => {
  const keyword = searchInput.value;

  getSearchMealApi(keyword)
    .then((datas) => {
      const dataMeals = datas.meals;
      displayNoneAll();

      if (dataMeals == null) {
        resultHeading.style.display = 'block';
        resultHeading.innerText = '검색 결과가 없습니다. 다시 시도해주세요!';
      } else {
        meals.style.display = 'flex';

        meals.innerHTML = `
  		<h2>Search results for '${keyword}':</h2>`;

        addSearchMenuList(dataMeals);
      }
    })
    .catch(console.error);
};

const getMealId = (mealId) => {
  getMealApi(mealId)
    .then((data) => {
      const meal = data.meals[0];
      setDisplayFlex();
      addMealsHTML(meal);
    })
    .catch(console.error);
};

const addSearchMenuList = (dataMeals) => {
  dataMeals.forEach((meal) => {
    meals.innerHTML += `
		<div class="menuImg">
			<img src="${meal.strMealThumb}">
			<div class="meal-info" data-Id="${meal.idMeal}">
				<h3>${meal.strMeal}</h3>
			</div>
		</div>
		`;
  });
};

const getShuffleMenu = () => {
  getShuffleApi()
    .then((data) => {
      const meal = data.meals[0];
      displayNoneAll();
      setDisplayFlex();
      addMealsHTML(meal);
    })
    .catch(console.error);
};

const addMealsHTML = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    meal[`strIngredient${i}`] && ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
  }

  singleMeals.innerHTML = `
	<div class="single-meals">
		<h1>${meal.strMeal}</h1>
		<img src="${meal.strMealThumb}" />
		<div class="category-area">
			<p>${meal.strCategory}<br>${meal.strArea}</p>
		</div>
		<div class="flex">
			<p class="instruction">${meal.strInstructions}</p>
			<h2 class="single-ing-title">Ingredients</h2>
			<ul class="ing-list">${ingredients.map((ing) => `<li>${ing}</li>`).join('')}</ul>
		</div>
	</div>
	`;
};

const setDisplayFlex = () => {
  singleMeals.style.display = 'flex';
  singleMeals.style.justifyContent = 'center';
};

const displayNoneAll = () => {
  resultHeading.style.display = 'none';
  meals.style.display = 'none';
  singleMeals.style.display = 'none';
};

search.addEventListener('click', getSearchMenu);
shuffle.addEventListener('click', getShuffleMenu);
meals.addEventListener('click', (e) => {
  if (e.target.classList.contains('meal-info')) {
    getMealId(e.target.dataset.id);
  }
});
