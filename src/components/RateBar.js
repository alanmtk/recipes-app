/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const RateBar = () => {
  const submitReview = useStoreActions((actions) => actions.submitReview);
  const { id } = useStoreState((state) => state.selectedRecipe);
  const [rate, setRate] = useState(5);

  const Input = (
    <input
      defaultValue={rate}
      type="number"
      min={1}
      max={5}
      onChange={({ target: { value } }) => setRate(value)}
    />
  );

  const Button = (
    <button
      type="button"
      defaultValue={rate}
      onClick={() => { submitReview({ id, rate }); }}
    >
      Guardar
    </button>
  );

  return (
    <div className="mb">Puntuar {Input} {Button}</div>
  );
};


export default RateBar;
