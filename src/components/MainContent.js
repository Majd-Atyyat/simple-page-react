import React, { useState } from 'react';
import './maniContent.css'

function MainContent() {
  const [name, setName] = useState('');
  const [age, setEmail] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  
  return (
    <main>
      <h2>Welcome to my website!</h2>
      <form>
        <label className="purple" htmlFor="name">Write your name:</label>
        <input  type="text" id="name" value={name} onChange={handleNameChange} />
        <br />
        <label className="orange"htmlFor="Age">Write your age:</label>
        <input type="text" id="age" value={age} onChange={handleEmailChange} />
      </form>
      <p>
        < spin className="purple">{name && `Your name is "${name}" and you're awesome   `}</spin>
      
        
        <br />
        <spin className="orange">{age && `Your Age  is "${age}", But you're old! :O `}</spin>
        
      </p>
    </main>
  );
}

export default MainContent;
