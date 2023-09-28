import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signinAction } from '../Redux/AuthReducer/action';

function Signin() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleSignin = async () => {
    const response = await dispatch(signinAction(userData));

    if (response === 'User Logged IN') {
      
      setUserData({
        email: '',
        password: '',
      });
      
      alert('Signin successful!');
    } else {
     
      alert('Invalid credentials. Please check your email and password.');
    }
  };

  return (
    <div>
      <h2>Signin</h2>
      <form>
        <label>Email</label>
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          required
        />

        <button type="button" onClick={handleSignin}>
          Signin
        </button>
      </form>
    </div>
  );
}

export default Signin;
