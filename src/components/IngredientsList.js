import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DinerSelector from './DinerSelector';

const IngredientsList = ({ ingredients }) => {
  const [diners, setDiners] = useState(1);

  return (
    <div className="mb">
      <DinerSelector diners={diners} handleChange={setDiners} />
      <ul>
        {ingredients.map(({ amount, unit, name }) => (
          <li key={name}>{`${amount * diners} ${unit} ${name}`}</li>
        ))}
      </ul>
    </div>
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
