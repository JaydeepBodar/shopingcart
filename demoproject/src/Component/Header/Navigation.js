import React from "react";
import { NavLink} from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <React.Fragment>
      <nav className="site-nav">
        <ul className="nav-link">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/data/smartphones"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              smartphones
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/data/laptops"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              laptops
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/data/fragrances"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              fragrances
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/data/skincare"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              skincare
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/data/groceries"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              groceries
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/data/home-decoration"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              home-decoration
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
