const API_HOST = process.env.REACT_APP_API_HOST;

const getRecipes = async () => {
  const response = await fetch(`${API_HOST}/recipes`);

  return response.json();
};

const getRecipe = async (id) => {
  const response = await fetch(`${API_HOST}/recipes/${id}`);

  return response.json();
};

const rateRecipe = async (id, rate) => {
  const response = await fetch(`${API_HOST}/recipes/${id}/rate`, {
    method: 'POST',
    body: JSON.stringify({ rate }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

const searchRecipes = async (query) => {
  const response = await fetch(`${API_HOST}/recipes/search?q=${query}`);

  return response.json();
};

const getBestRecipes = async () => {
  const response = await fetch(`${API_HOST}/recipes/best`);

  return response.json();
};

const getWorstRecipes = async () => {
  const response = await fetch(`${API_HOST}/recipes/worst`);

  return response.json();
};

module.exports = {
  getRecipes, getRecipe, rateRecipe, searchRecipes, getBestRecipes, getWorstRecipes,
};
