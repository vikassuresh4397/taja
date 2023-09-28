
import './App.css';
import React, { useState } from "react";


function App() {
  return (
    <div className="App">
      <Form></Form>
    </div>
  );
}



const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    role: "",
    maritalStatus: []
  });

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked
          ? [...formData[name], value]
          : formData[name].filter(item => item !== value)
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  };

  const handleReset = () => {
    document.getElementById("form").reset();
    setFormData({
      name: "",
      gender: "",
      role: "",
      maritalStatus: []
    });
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <select
          name="role"
          id="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </div>
      <div>
        <label htmlFor="maritalStatus">Marital Status:</label>
        <br />
        <input
          type="checkbox"
          name="maritalStatus"
          id="single"
          value="single"
          checked={formData.maritalStatus.includes("single")}
          onChange={handleChange}
        />
        <label htmlFor="single">Single</label>
        <br />
        <input
          type="checkbox"
          name="maritalStatus"
          id="married"
          value="married"
          checked={formData.maritalStatus.includes("married")}
          onChange={handleChange}
        />
        <label htmlFor="married">Married</label>
      </div>
      <button type="submit">Submit</button>
<button type="reset" onClick={handleReset}>
Reset
</button>
</form>
);
};
























export default App;