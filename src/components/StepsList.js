import React from 'react';
import PropTypes from 'prop-types';

const StepsList = ({ steps }) => (
  <ul>
    {steps.map((step) => (
      <li>{step}</li>
    ))}
  </ul>
);

StepsList.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StepsList;
