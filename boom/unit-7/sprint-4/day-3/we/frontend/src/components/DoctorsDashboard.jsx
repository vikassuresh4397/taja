import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DoctorDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editDoctorData, setEditDoctorData] = useState({});
  const [updatedDoctorData, setUpdatedDoctorData] = useState({});

  useEffect(() => {
    fetch('https://zany-teal-agouti-toga.cyclic.cloud/appointments', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setFilteredDoctors(data);
      })
      .catch((error) => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  const handleSearch = (searchQuery) => {
    fetch(`https://zany-teal-agouti-toga.cyclic.cloud/appointments/filter/name?name=${searchQuery}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFilteredDoctors(data);
      })
      .catch((error) => {
        console.error('Error fetching filtered doctors by name:', error);
      });
  };

  const handleSpecializationFilter = (specialization) => {
    
    fetch(`https://zany-teal-agouti-toga.cyclic.cloud/appointments/filter/specialization?specialization=${specialization}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFilteredDoctors(data);
      })
      .catch((error) => {
        console.error('Error fetching filtered doctors:', error);
      });
  };

  const handleEditDoctor = (doctor) => {
    setEditDoctorData(doctor);
    setEditModalOpen(true);
    setUpdatedDoctorData({ ...doctor }); // Initialize updatedDoctorData with the current doctor data
  };

  const handleUpdateDoctor = () => {
    fetch(`https://zany-teal-agouti-toga.cyclic.cloud/appointments/update/${editDoctorData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(updatedDoctorData),
    })
      .then(() => {
        // Update the doctor in filteredDoctors array
        setFilteredDoctors(filteredDoctors.map((doctor) => (doctor._id === editDoctorData._id ? updatedDoctorData : doctor)));
        setEditModalOpen(false);
      })
      .catch((error) => {
        console.error('Error updating doctor:', error);
      });
  };
  const handleDeleteDoctor = (doctorId) => {
    
    fetch(`https://zany-teal-agouti-toga.cyclic.cloud/appointments/delete/${doctorId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(() => {
      
        setFilteredDoctors(filteredDoctors.filter((doctor) => doctor._id !== doctorId));
      })
      .catch((error) => {
        console.error('Error deleting doctor:', error);
      });
  };

  return (
    <div>
      <h2>Doctor Dashboard</h2>
      <div>
        <input
          type="text"
          placeholder="Search by name..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {filteredDoctors.map((doctor) => (
        <div key={doctor._id} className="doctor-card">
          <img src={doctor.image} alt={doctor.name} />
          <h3>{doctor.name}</h3>

          <button onClick={() => handleDeleteDoctor(doctor._id)}>Delete</button>
          <button onClick={() => handleEditDoctor(doctor)}>Edit</button>
        </div>
      ))}

      {editModalOpen && (
        <div className="edit-modal">
          <h3>Edit Doctor</h3>
          {/* Update the input fields here for editing */}
          {/* For example: */}
          <input
            type="text"
            value={updatedDoctorData.name}
            onChange={(e) => setUpdatedDoctorData({ ...updatedDoctorData, name: e.target.value })}
          />
          <button onClick={handleUpdateDoctor}>Update</button>
          <button onClick={() => setEditModalOpen(false)}>Cancel</button>
        </div>
      )}

      <Link to="/appointments">
        <button>Appointments</button>
      </Link>

      <Link to="/signup">
        <button>Signup</button>
      </Link>

      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default DoctorDashboard;
