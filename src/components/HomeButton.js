import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

const HomeButton = () => {
  const cleanSearchResults = useStoreActions((actions) => actions.cleanSearchResults);
  const cleanSelectedRecipe = useStoreActions((actions) => actions.cleanSelectedRecipe);

  return (
    <Link
      to="/"
      onClick={() => {
        cleanSearchResults();
        cleanSelectedRecipe();
      }}
    >
      Volver al inicio
    </Link>
  );
};

export default HomeButton;
