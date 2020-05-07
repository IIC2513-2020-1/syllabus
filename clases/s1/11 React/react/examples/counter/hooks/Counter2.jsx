import React, { useCallback, useState } from 'react';

export default function Counter() {
  const [currentValue, setCurrentValue] = useState(0);
  const incrementValue = useCallback(() => setCurrentValue(currentValue + 1));
  const decrementValue = useCallback(() => setCurrentValue(currentValue - 1));

  return (
    <div>
      <p>
        Current Value:
        {currentValue}
      </p>

      <button type="button" onClick={incrementValue}>+</button>
      <button type="button" onClick={decrementValue}>-</button>
    </div>
  );
}
