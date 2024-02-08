import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav2 = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.getElementById("list").style.left = `${value}px`;
  }, [value]);

  return (
    <>
      <div className="navbar nav-2 px-5" data-aos="fade-up">
        <div className="container-fluid d-flex">
          <div className="navbar-brand p-2 ">
            <img src="/img/image (1).jpg" alt="logo" />
          </div>
          <i
            className="fa-solid fa-angle-left arrow"
            onClick={() => {
              value < 0 && setValue(value + 100);
            }}
          ></i>
          <div className="menu">
            <ul className="list-group flex-row align-items-center " id="list">
              <li className="list-group-item border-0">
                <a href="#edu" className="nav-link">
                 Home
                </a>
              </li>
              <li className="list-group-item border-0">
                <a href="#careerImpact" className="nav-link">
                 About Us
                </a>
              </li>
              <li className="list-group-item border-0">
                <a href="#Curriculum" className="nav-link">
                 Services
                </a>
              </li>
              <li className="list-group-item border-0">
                <a href="#edu" className="nav-link">
                 Our Work
                </a>
              </li>
              <li className="list-group-item border-0">
                <a href="#Program-Fee" className="nav-link">
                Career 
                </a>
              </li>
              <li className="list-group-item border-0">
                <a href="#Program-Fee" className="nav-link">
               Blog
                </a>
              </li>
              <li className="list-group-item border-0">
                <a href="#Program-Fee" className="nav-link">
                Contact
                </a>
              </li>
            </ul>
          </div>
          <i
            className="fa-solid fa-angle-right arrow"
            onClick={() => {
              value > -500 && setValue(value - 100);
            }}
          ></i>
          <button className="btn btn-danger">EXPLORE PROGRAM</button>
        </div>
      </div>
    </>
  );
};

export default Nav2;
