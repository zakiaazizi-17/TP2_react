import { useState } from 'react';

const NameForm = () => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Vous avez saisi : ${name}`);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Votre nom :
        <input type="text" value={name} onChange={handleInputChange} />
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default NameForm;