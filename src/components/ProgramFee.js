import React from "react";
import "./ProgramFee.css";

const ProgramFee = () => {
  const courses = [
    { text: "Web Designer"},
    { text: "Front End Developer"},
    { text: "Web Developer"},
    { text: "Software Tester"},
    { text: "Web Software Engineer"},
    { text: "UI Developer"},
    { text: "Big Data Developer"},
    { text: "Cloud Computing Developer"},
  ];
  return (
    <>
      <div className="courses-section">
        <img src="img/bg-1.png" alt="" className="courses-bg-top" />
        <img src="img/bg-2.png" alt="" className="courses-bg-bottom" />
        <div className="container">
          <div className="courses-heading">
            <h3>Courses List</h3>
            <h5>Lorem ispum Lorem ispum Lorem ispum Lorem ispum</h5>
          </div>
          <div className="courses-wrapper">
            <div className="row">
              {courses?.map((c, idx) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={idx}>
                  <div className="courses-list-section">
                    <div className="courses-list-outer-wrapper">
                      <div className="courses-list-wrapper">
                        <div className="courses-icon-img">
                          {/* <CgWebsite size={50} /> */}
                        </div>
                        <p>{c.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramFee;
