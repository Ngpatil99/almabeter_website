import React from "react";
import "./Curriculum.css";
const Curriculum = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="it-course-title-box text-center mb-70">
              <h2 class="it-section-subtitle ">Top Popular Course</h2>
             
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="it-course-item">
              <div class="it-course-thumb mb-20 p-relative">
                <a href="course-details.html">
                  <img src="assets/img/course/course-1-3.jpg" alt="img" />
                </a>
                <div class="it-course-thumb-text">
                  <span>Development</span>
                </div>
              </div>
              <div class="it-course-content">
                <div class="it-course-rating mb-10 py-1">
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-regular fa-star"></i>
                  <span>(4.7)</span>
                </div>
                <h4 class="it-course-title py-3">
                  <a href="course-details.html" className="text-dark">
                    Bilginer Adobe Illustrator for Graphic Design
                  </a>
                </h4>
                <div class="it-course-info pb-15 mb-25 py-2 d-flex justify-content-between">
                  <span>
                    <i class="fa-light fa-file-invoice"></i>Lesson 10
                  </span>
                  <span>
                    <i class="fa-sharp fa-regular fa-clock"></i>19h 30m
                  </span>
                  <span>
                    <i class="fa-light fa-user"></i>Students 20+
                  </span>
                </div>
                <div class="it-course-author py-2">
                  <img src="assets/img/course/avata-1.png" alt="img" />
                  <span>
                    By <i>Angela</i> in <i>Development</i>
                  </span>
                </div>
            
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="it-course-item">
              <div class="it-course-thumb mb-20 p-relative">
                <a href="course-details.html">
                  <img src="assets/img/course/course-1-3.jpg" alt="img" />
                </a>
                <div class="it-course-thumb-text">
                  <span>Development</span>
                </div>
              </div>
              <div class="it-course-content">
                <div class="it-course-rating mb-10 py-1">
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-regular fa-star"></i>
                  <span>(4.7)</span>
                </div>
                <h4 class="it-course-title py-3">
                  <a href="course-details.html" className="text-dark">
                    Bilginer Adobe Illustrator for Graphic Design
                  </a>
                </h4>
                <div class="it-course-info pb-15 mb-25 py-2 d-flex justify-content-between">
                  <span>
                    <i class="fa-light fa-file-invoice"></i>Lesson 10
                  </span>
                  <span>
                    <i class="fa-sharp fa-regular fa-clock"></i>19h 30m
                  </span>
                  <span>
                    <i class="fa-light fa-user"></i>Students 20+
                  </span>
                </div>
                <div class="it-course-author py-2">
                  <img src="assets/img/course/avata-1.png" alt="img" />
                  <span>
                    By <i>Angela</i> in <i>Development</i>
                  </span>
                </div>
            
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="it-course-item">
              <div class="it-course-thumb mb-20 p-relative">
                <a href="course-details.html">
                  <img src="assets/img/course/course-1-3.jpg" alt="img" />
                </a>
                <div class="it-course-thumb-text">
                  <span>Development</span>
                </div>
              </div>
              <div class="it-course-content">
                <div class="it-course-rating mb-10 py-1">
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-regular fa-star"></i>
                  <span>(4.7)</span>
                </div>
                <h4 class="it-course-title py-3">
                  <a href="course-details.html" className="text-dark">
                    Bilginer Adobe Illustrator for Graphic Design
                  </a>
                </h4>
                <div class="it-course-info pb-15 mb-25 py-2 d-flex justify-content-between">
                  <span>
                    <i class="fa-light fa-file-invoice"></i>Lesson 10
                  </span>
                  <span>
                    <i class="fa-sharp fa-regular fa-clock"></i>19h 30m
                  </span>
                  <span>
                    <i class="fa-light fa-user"></i>Students 20+
                  </span>
                </div>
                <div class="it-course-author py-2">
                  <img src="assets/img/course/avata-1.png" alt="img" />
                  <span>
                    By <i>Angela</i> in <i>Development</i>
                  </span>
                </div>
            
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="it-course-button text-center  my-5">
              <button className="btn  btn-danger px-4 py-3">Learn More Cources</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
