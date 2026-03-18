import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Vous avez cliqué {count} fois.</p>
      <button onClick={handleIncrement}>Incrémenter</button>
    </div>
  );
};

export default Counter;