import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupAction } from '../Redux/AuthReducer/action';

function Signup() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: '',
    avatar: '',
    email: '',
    password: '',
  });

  const handleSignup = async () => {
    dispatch(signupAction(userData));
    // Clear input values
    setUserData({
      username: '',
      avatar: '',
      email: '',
      password: '',
    });
    // Show alert
    alert('Signup successful!'); // You might want to replace this with a more user-friendly UI component
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>Username</label>
        <input
          type="text"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          required
        />

        <label>Avatar</label>
        <input
          type="text"
          value={userData.avatar}
          onChange={(e) => setUserData({ ...userData, avatar: e.target.value })}
          required
        />

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

        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
