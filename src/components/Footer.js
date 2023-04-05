import './footer.css'
import React, { useState } from 'react';

function Footer() {
  const [backgroundColor, setBackgroundColor] = useState('#810CA8');
  
  const handleBackgroundColorChange = () => {
    setBackgroundColor('#EF9A53');
  }
  
  return (
    <footer style={{ backgroundColor }}>
      <p>Copy rights @majd atyyat</p>
      <button onClick={handleBackgroundColorChange}>Change My color</button>
    </footer>
  );
}

export default Footer;
