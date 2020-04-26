import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import RecipesList from '../components/RecipesList';

const Home = () => {
  const recipes = [
    { id: 1, name: 'Arroz con pollo', rate: 4.3 },
    { id: 2, name: 'Brownie', rate: 10 },
    { id: 3, name: 'Ñoquis de batata', rate: 6 },
  ];
  return (
    <>
      <SearchBar />
      <Link to="/ranking">Ver valoraciones</Link>
      <RecipesList recipes={recipes} />
    </>
  );
};

export default Home;
