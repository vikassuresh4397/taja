import React, { useState } from "react";
import { Link } from "react-router-dom";

const DoctorForm = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState("");
  const [fee, setFee] = useState("");

  const handleSubmit = () => {
    const newDoctor = {
      name,
      image: imageUrl,
      specialization,
      experience,
      location,
      date,
      slots,
      fee,
    };

    fetch("https://zany-teal-agouti-toga.cyclic.cloud/appointments/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newDoctor),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       
        setName("");
        setImageUrl("");
        setSpecialization("");
        setExperience("");
        setLocation("");
        setDate("");
        setSlots("");
        setFee("");
        alert("Doctor onboarded successfully");
      })
      .catch((error) => {
        console.error("Error onboarding doctor:", error);
        alert("Error onboarding doctor");
      });
  };

  return (
    <div>
      <h2>Onboard Doctor</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label htmlFor="specialization">Specialization</label>
        <select
          id="specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="">Select specialization</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Psychiatrist">Psychiatrist</option>
        </select>

        <label htmlFor="experience">Experience</label>
        <input
          type="number"
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="slots">Slots</label>
        <input
          type="number"
          id="slots"
          value={slots}
          onChange={(e) => setSlots(e.target.value)}
        />

        <label htmlFor="fee">Fee</label>
        <input
          type="number"
          id="fee"
          value={fee}
          onChange={(e) => setFee(e.target.value)}
        />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <Link to="/appointments">
        <button>Doctors dashboard</button>
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

export default DoctorForm;
