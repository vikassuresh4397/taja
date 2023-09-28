import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (password !== rePassword) {
      setError('Passwords do not match');
      return;
    }

    const payload = {
      email,
      password
    };

   
    history.push('/login');
  };

  return (
    <div>
      <h3>Signup form</h3>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <label htmlFor="re_password">Rewrite Password</label>
      <input type="password" name="re_password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export { Signup };
