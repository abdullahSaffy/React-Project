import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary my-4">
      <div className="container">
        <h2 className="navbar-brand pt-2">Navbar</h2>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/address">
                Address
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="btn btn-light">
          <NavLink className="nav-link" to="/users/add">
            Add User
          </NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
