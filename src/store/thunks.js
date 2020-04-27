import { thunk } from 'easy-peasy';
import {
  getRecipes, getRecipe, rateRecipe, searchRecipes, getBestRecipes, getWorstRecipes,
} from '../services/recipes';

export default {
  fetchRecipes: thunk(async (actions) => {
    const recipes = await getRecipes();

    actions.setRecipes(recipes);
  }),
  fetchRecipe: thunk(async (actions, id) => {
    const recipe = await getRecipe(id);

    actions.setSelectedRecipe(recipe);
  }),
  submitReview: thunk(async (actions, { id, rate }) => {
    const { rate: newRate } = await rateRecipe(id, rate);

    actions.updateSelectedRecipeRate(newRate);
  }),
  submitSearch: thunk(async (actions, query) => {
    const recipes = await searchRecipes(query);

    actions.setSearchResults(recipes);
  }),
  fetchBestRecipes: thunk(async (actions) => {
    const recipes = await getBestRecipes();

    actions.setBestRecipes(recipes);
  }),
  fetchWorstRecipes: thunk(async (actions) => {
    const recipes = await getWorstRecipes();

    actions.setWorstRecipes(recipes);
  }),
};
