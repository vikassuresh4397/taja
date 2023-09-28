import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const payload = {
      email,
      password
    };

     fetch("https://zany-teal-agouti-toga.cyclic.cloud/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(res => {
      localStorage.setItem("token", res.token);
      console.log(res);

       alert("Login successful!");

      
      window.location.href = "/doctorform";
    })
    .catch(err => console.log(err));

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h3>Login form</h3>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Login INN</button>
    </div>
  );
};

export { Login };
