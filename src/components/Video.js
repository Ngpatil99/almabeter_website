import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <>
      <div className="video">
        <div className="container">
          <div className="video-section">
            <div className="video-wrapper">
              <div className="container">
                <div className="video-heading">
                    <div className="video-play-wrapper">
                        {/* <MdPlayArrow size={60} className="video-play-btn" /> */}
                        <i class="bi bi-play-circle-fill play-icon"></i>
                        
                    </div>
                  <h3>More Trusted Agency</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
