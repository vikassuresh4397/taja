import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const payload = {
      email,
      password,
      confirmpassword: confirmPassword,
    };

    fetch("https://zany-teal-agouti-toga.cyclic.cloud/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then(res => {
       
        
        console.log('Registration successful:', res);
        setIsRegistrationSuccessful(true)
      })
      .catch(err => {
        setError('Registration failed. Please try again.');
        console.error('Registration error:', err);
      });

    setEmail('');
    setPassword('');
    setConfirmPassword('');

    <Link to="/login"></Link>
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button onClick={handleSubmit}>Sign Up</button>
        {/* Render the Link to login page after successful registration */}
        {isRegistrationSuccessful && (
        <p>
         
          <Link to="/login">login in</Link>.
        </p>
      )}
    </div>
  );
};

export { Signup };
