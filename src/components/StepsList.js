import React from 'react';
import PropTypes from 'prop-types';

const StepsList = ({ steps }) => (
  <div className="mb">
    <ul>
      {steps.map((step) => (
        <li>{step}</li>
      ))}
    </ul>
  </div>
);

StepsList.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StepsList;
