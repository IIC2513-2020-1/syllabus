import React from 'react';
import PropTypes from 'prop-types';

export default function Counter({ counterValue, increaseCounter, decreaseCounter }) {
  const text = `Counter value is ${counterValue}`;

  return (
    <div>
      <p>{text}</p>
      <button type="button" onClick={increaseCounter}>+</button>
      <button type="button" onClick={decreaseCounter}>-</button>
    </div>
  );
}

Counter.propTypes = {
  counterValue: PropTypes.number.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
  increaseCounter: PropTypes.func.isRequired,
};
