/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const DinerSelector = ({ diners, handleChange }) => {
  const Selector = (
    <input
      type="number"
      min={1}
      defaultValue={diners}
      onChange={({ target: { value } }) => handleChange(value)}
    />
  );

  return (
    <div>Para {Selector} persona{diners > 1 ? 's' : ''}</div>
  );
};

DinerSelector.propTypes = {
  diners: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DinerSelector;
