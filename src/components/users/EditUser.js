import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  const history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
    console.log("user", user);
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };

  return (
    <div>
      <form
        className="container border shadow p-5"
        onSubmit={(e) => onSubmit(e)}
      >
        <h3 className="text-center">Edit User</h3>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter your Name"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter your user Name"
            className="form-control"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter your phone number"
            className="form-control"
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter your webside name"
            className="form-control"
            name="website"
            value={website}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
