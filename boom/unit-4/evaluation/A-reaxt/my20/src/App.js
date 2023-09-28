
import './App.css';


import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [maritalState, setMaritalState] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newEmployee = {
      name: name,
      age: age,
      address: address,
      department: department,
      salary: salary,
      maritalState: maritalState,
      profilePhoto: profilePhoto
    };
    axios
      .post("http://localhost:8000/employees", newEmployee)
      .then(response => {
        setEmployees([...employees, newEmployee]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/employees")
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleFilter = e => {
    const department = e.target.value;
    axios
      .get(`http://localhost:8000/employees?department=${department}`)
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSort = e => {
    const sortBy = e.target.value;
    axios
      .get(`http://localhost:8000/employees?sortBy=${sortBy}`)
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDelete = employeeId => {
    axios
      .delete(`http://localhost:8000/employees/${employeeId}`)
      .then(response => {
        const updatedEmployees = employees.filter(
          employee => employee._id !== employeeId
        );
        setEmployees(updatedEmployees);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const renderEmployees = () => {
    return employees.map(employee => (
      <TableItem
        key={employee._id}
        employee={employee}
        handleDelete={handleDelete}
      />
    ));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Department:</label>
          <select value={department} onChange={e => setDepartment(e.target.value)}>
            <option value="">Select</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="Operations">Operations</option>
          </select>
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="text"
            value={salary}
            onChange={e => setSalary(e.target.value)}
          />
        </div>
        <div>
          <label>Marital State:</label>
          <input
            type="checkbox"
            value={maritalState}
            onChange={e => setMaritalState(e.target.value)}
          />
        </div>
        <div>
          <label>Profile Photo:</label>
          <input
            type="file"
            value={profilePhoto}
            onChange={e => setProfilePhoto(e.target.files[0])}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <label>Filter by Department:</label>
        <select onChange={handleFilter}>
          <option value="">Select</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
        </select>
      </div>
      <div>
        <label>Sort by Salary:</label>
        <select onChange={handleSort}>
          <option value="">Select</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital State</th>
            <th>Profile Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderEmployees()}</tbody>
      </Table>
    </>
  );
};

const Table = props => {
  return <table>{props.children}</table>;
};

const TableItem = ({ employee, handleDelete }) => {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.age}</td>
      <td>{employee.address}</td>
      <td>{employee.department}</td>
      <td>{employee.salary}</td>
      <td>{employee.maritalState}</td>
      <td>
        <img src={employee.profilePhoto} alt="profile" />
      </td>
      <td>
        <button onClick={() => handleDelete(employee._id)}>Delete</button>
      </td>
    </tr>
  );
};

export default App;
