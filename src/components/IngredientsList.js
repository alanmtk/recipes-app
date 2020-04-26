import React, { useState } from 'react';
import PropTypes from 'prop-types';

const IngredientsList = ({ ingredients }) => {
  const [diners, setDiners] = useState(1);

  return (
    <>
      Para
      {' '}
      <input
        type="number"
        min={1}
        defaultValue={diners}
        onChange={({ target: { value } }) => setDiners(value)}
      />
      {' '}
      personas
      <ul>
        {ingredients.map(({ amount, unit, name }) => (
          <li>
            {amount * diners}
            {' '}
            {unit}
            {' '}
            {name}
          </li>
        ))}
      </ul>
    </>
  );
};

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number,
    unit: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default IngredientsList;
