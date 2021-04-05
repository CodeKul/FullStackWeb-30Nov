import React, { useState } from "react";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [isActive, setIsActive] = useState(false);

  const getFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const getLastName = (e) => {
    setLastName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getGender = (e) => {
    setGender(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleActive = (e) => {
    setIsActive(e.target.checked);
  };

  const handleClick = () => {
    console.log(firstName, lastName, email, city, gender, isActive);
  };

  return (
    <div className="container">
      {/* firstName,lastName,email ,technology*/}

      <label className="form-label">First Name</label>
      <input
        className="form-control"
        type="text"
        value={firstName}
        onChange={getFirstName}
      />
      <p>{firstName}</p>
      <label className="form-label">Last Name</label>
      <input
        className="form-control"
        type="text"
        value={lastName}
        onChange={getLastName}
      />
      <p>{lastName}</p>
      <label className="form-label">Email</label>
      <input
        className="form-control"
        type="email"
        value={email}
        onChange={getEmail}
      />

      <p>{email}</p>

      <label className="form-label">Gender</label>
      <br />
      <input
        type="radio"
        name="gender"
        className="form-check-input m-2"
        value="male"
        onChange={getGender}
      />
      <label className="form-label">Male</label>
      <input
        type="radio"
        name="gender"
        className="form-check-input m-2"
        value="female"
        onChange={getGender}
      />
      <label className="form-label">Female</label>
      <p>{gender}</p>

      <label htmlFor="city">Select City</label>
      <select name="city" value={city} onChange={handleCity}>
        <option value="" selected>
          Choose
        </option>
        <option value="Mumbai">Mumbai</option>
        <option value="Thane">Thane</option>
        <option value="Nashik">Nashik</option>
      </select>
      <p>{city}</p>

      <input
        type="checkbox"
        name="isActive"
        checked={isActive}
        value={isActive}
        onChange={handleActive}
      />
      <label htmlFor="Active"> Are you active</label>
      <p>{isActive}</p>

      <button type="button" onClick={handleClick}>
        Get Info
      </button>
    </div>
  );
}

export default RegistrationForm;
