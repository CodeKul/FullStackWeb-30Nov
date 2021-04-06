import React, { useState } from "react";

function Forms() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const getFirstName = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const getUser = () => {
    console.log(user);
  };

  return (
    <div>
      <label className="form-label">First Name</label>
      <input
        className="form-control"
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={getFirstName}
      />
      <p>{user.firstName}</p>
      <label className="form-label">Last Name</label>
      <input
        className="form-control"
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={getFirstName}
      />
      <p>{user.lastName}</p>
      <label className="form-label">Email</label>
      <input
        className="form-control"
        type="email"
        name="email"
        value={user.email}
        onChange={getFirstName}
      />

      <p>{user.email}</p>

      <button onClick={getUser}>Get Values</button>
    </div>
  );
}

export default Forms;
