/* eslint no-param-reassign: 0 */
import { action } from 'easy-peasy';

export default {
  setRecipes: action((state, recipes) => {
    state.recipes = recipes;
  }),
  setSelectedRecipe: action((state, recipe) => {
    state.selectedRecipe = recipe;
  }),
  setSearchResults: action((state, searchResults) => {
    state.searchResults = searchResults;
  }),
  setBestRecipes: action((state, bestRecipes) => {
    state.bestRecipes = bestRecipes;
  }),
  setWorstRecipes: action((state, worstRecipes) => {
    state.worstRecipes = worstRecipes;
  }),
  updateSelectedRecipeRate: action((state, rate) => {
    state.selectedRecipe.rate = rate;
  }),
  cleanSearchResults: action((state) => {
    state.searchResults = [];
  }),
  cleanSelectedRecipe: action((state) => {
    state.selectedRecipe = null;
  }),
};
