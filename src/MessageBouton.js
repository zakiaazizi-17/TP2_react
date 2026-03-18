import { useState } from 'react';

const ButtonMessage = () => {
  const [text, setText] = useState('Appuyez sur le bouton');

  const updateText = () => {
    setText('Le bouton a été cliqué !');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={updateText}>Cliquer</button>
    </div>
  );
};

export default ButtonMessage;