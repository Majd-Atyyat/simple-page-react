import React, { useState } from 'react';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedItems, setSubmittedItems] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation
    if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    setSubmittedItems([...submittedItems, { name, email, password }]);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="App">
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        {name ? <p style={{ color: 'green' }}>Valid name!</p> : <p style={{ color: 'red' }}>Please enter your name</p>}
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        {email ? (
          <p style={{ color: 'green' }}>Valid email!</p>
        ) : (
          <p style={{ color: 'red' }}>Please enter a valid email address</p>
        )}
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        {password.length >= 8 ? (
          <p style={{ color: 'green' }}>Strong password!</p>
        ) : (
          <p style={{ color: 'red' }}>Password must be at least 8 characters long</p>
        )}
        <button type="submit">Submit</button>
      </form>
      {submittedItems.length > 0 && (
        <div>
          <h2>Submitted Items</h2>
          <ul>
            {submittedItems.map((item, index) => (
              <li key={index}>
                <p>Name: {item.name}</p>
                <p>Email: {item.email}</p>
                <p>Password: {item.password}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Contact;
