import './footer.css'
import React, { useState } from 'react';

function Footer() {
  const [backgroundColor, setBackgroundColor] = useState('pink');
  
  const handleBackgroundColorChange = () => {
    setBackgroundColor('lightblue');
  }
  
  return (
    <footer style={{ backgroundColor }}>
      <p>Copy rights @majd atyyat</p>
      <button onClick={handleBackgroundColorChange}>Change My color</button>
    </footer>
  );
}

export default Footer;
