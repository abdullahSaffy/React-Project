import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = ({ credentials }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
    console.log("after function");
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
    console.log(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  return (
    <div className="container pt-5">
      <h2>Home</h2>
      <table className="table table-striped border shadow">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>userName</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
            <th>view</th>
          </tr>
        </thead>
        <tbody>
          {user.map((items, index) => {
            return (
              <tr>
                <th scope="row">{items.id}</th>
                <td>{items.name}</td>
                <td>{items.username}</td>
                <td>{items.email}</td>
                <td>{items.phone}</td>
                <td>{items.website}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/users/${items.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary"
                    to={`/users/edit/${items.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(items.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
