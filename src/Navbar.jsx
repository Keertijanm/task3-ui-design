import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "./images/logo.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./my-btn.css";
const Navbar = () => {
  return (
    <>
      {" "}
      <div className="col-12 mx-auto">
        {/* <div className=' container-fluid nav bg'> */}
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
              <img
                src={logo}
                width="76"
                className="img-fluid animated"
                alt="logo"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <NavLink
                    exact
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/"
                  >
                    HOME <span className="sr-only"></span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/service"
                  >
                    CAREER CAMP
                  </NavLink>
                </li>
                <li className="nav-item">
                  <DropdownButton
                    className="my-btn"
                    // id="dropdown-item-button"
                    title="TECHNICAL COURSE"
                  >
                    <Dropdown.ItemText>TECHNIC COURSE</Dropdown.ItemText>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                  </DropdownButton>
                </li>
                <li className="nav-item">
                  <DropdownButton
                    className="my-btn"
                    id="dropdown-item-button"
                    title=" NON TECHNICAL-COURSE"
                  >
                    <Dropdown.ItemText>TECHNIC COURSE</Dropdown.ItemText>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                  </DropdownButton>
                </li>

                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/about"
                  >
                    TRAINING JOURNEY
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/contact"
                  >
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;
