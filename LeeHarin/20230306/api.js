const apiPaths = {
  SEARCH_MENU_API: '/search.php?s={keyword}',
  GET_MEAL_API: '/lookup.php?i={mealId}',
  SHUFFLE_MENU_API: '/random.php',
};

const baseURL = 'https://www.themealdb.com/api/json/v1/1';

const getUrl = (path) => `${baseURL}${apiPaths[path]}`;

const fetchApi = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    return console.log('Error:', error);
  }
};

export const getSearchMealApi = (keyword) => {
  const url = getUrl('SEARCH_MENU_API').replace('{keyword}', keyword);
  return fetchApi(url);
};

export const getMealApi = (mealId) => {
  const url = getUrl('GET_MEAL_API').replace('{mealId}', mealId);
  return fetchApi(url);
};

export const getShuffleApi = () => {
  const url = getUrl('SHUFFLE_MENU_API');
  return fetchApi(url);
};
