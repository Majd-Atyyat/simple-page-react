import './footer.css'
import React, { useState } from 'react';

function Footer() {
  const [backgroundColor, setBackgroundColor] = useState('#810CA8');
  const [showMessage, setShowMessage] = useState(false);
  
  const handleBackgroundColorChange = () => {
    setBackgroundColor('#EF9A53');
    setShowMessage(true);
  }
  
  return (
    <footer style={{ backgroundColor }}>
      <p>Copy rights @majd atyyat</p>
      <button onClick={handleBackgroundColorChange}>Change My color</button>
      {showMessage && backgroundColor === '#EF9A53' && (
        <p style={{ color: 'white' }}>You changed the color to orange!</p>
      )}
    </footer>
  );
}

export default Footer;
