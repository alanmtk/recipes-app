import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';
import SearchBar from '../components/SearchBar';
import RecipesList from '../components/RecipesList';

const Home = () => {
  const recipes = useStoreState((state) => state.recipes);
  const searchResults = useStoreState((state) => state.searchResults);
  const fetchRecipes = useStoreActions((actions) => actions.fetchRecipes);

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <SearchBar />
      <Link className="block mb" to="/ranking">Ver valoraciones</Link>
      <RecipesList recipes={searchResults.length ? searchResults : recipes} />
    </div>
  );
};

export default Home;
