import { useState, useEffect } from 'react';

const EffectCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    console.log(`Valeur actuelle du compteur : ${count}`);
  }, [count]);

  return (
    <div>
      <button onClick={increment}>Incrémenter avec effet</button>
    </div>
  );
};

export default EffectCounter;