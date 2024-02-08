import React from "react";
import "../components/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid" id="footer" data-aos="fade-up">
        <div className="container-fluid">
          <img src="/static/logo.png" alt="" style={{ width: "150px" }} />
          <div className="footer-info">
            <ul>
              <li className="text-light ">Contact Us</li>
              <li>speedupinfotech.com</li>
              <li> 072197 77599</li>
            </ul>
          </div>
          <div className="add">
            <ul>
              <li className="text-light">Official Address</li>
              <li>
                3rd Floor, 1204/16, DNG House, Avenir Building, Jangali Maharaj
                Rd, opposite Bal Gandharv Police Station, beside Shree Gajanan
                Maharaj Temple, Shivajinagar, Pune, Maharashtra 411004
              </li>
            </ul>
          </div>

          <div className="apps">
            <ul>
              <li className="text-light">Follow us</li>
              <div className="d-flex">
                <i className="fa-brands fa-facebook fa-xl"></i>
                <i className="fa-brands fa-instagram fa-xl"></i>
                <i className="fa-brands fa-linkedin fa-xl"></i>
                <i className="fa-brands fa-twitter fa-xl"></i>
                <i className="fa-brands fa-youtube fa-xl"></i>
                <i className="fa-brands fa-telegram fa-xl"></i>
              </div>
            </ul>
          </div>
        </div>
        <div className="container-fluid">
          <ul>
            <li className="text-light">Company</li>
            <li>Success Stories</li>
            <li>About Us</li>
            <li>Hire From Us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="container-fluid">
          <ul>
            <li className="text-light">Courses</li>
            <li>Certification in Full Stack Data Science and AI</li>
            <li>Certification in Full Stack Web Development</li>
            <li>Masters in CS: Data Science and Artificial Intelligence</li>
            <li>Masters in Computer Science: Software Engineering</li>
            <li>Diploma in Computer Science Course</li>
          </ul>
        </div>
        <div className="container-fluid">
          <ul>
            <li className="text-light">Resources</li>
            <li>Blog</li>
            <li>Events</li>
            <li>Community</li>
            <li>Placement Statistics</li>
          </ul>
        </div>
        <div className="container-fluid">
          <ul>
            <li className="text-light">Join AlmaBetter</li>
            <li>Sign Up</li>
            <li>Become A Coach</li>
            <li>Coach Login</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
