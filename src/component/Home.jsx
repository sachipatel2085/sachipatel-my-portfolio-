import React from "react";

const Home = () => {
  return (
    <>
      <div className="contener">
        <div className="hero">
          <div className="hero-left" id="left">
            <h1>
              I'am sachi patel <br />
              <span> front-end </span>
              <br />
              developer
            </h1>
            <p>
              Let me tell you something my friend. hope is a dangerous thing.
              hope can drive a man insane. you measure yourself by the people
              who measure themselves by you. it only took me six days.
            </p>
            <button className="hero-left-button" id="star-scale">
              <a href="#">Hire Me</a> <i className="fa fa-arrow-right"></i>
            </button>
          </div>
          <div className="hero-right" id="right">
            <div className="profile-photo"><img src="public\WhatsApp Image 2025-07-15 at 14.32.36_4a77ffd6.jpg" alt="" /></div>
            <div className="social-media">
              <div className="social-link" id="star-scale"><i className="fa-brands fa-instagram"></i></div>
              <div className="social-link" id="star-scale"><i className="fa-brands fa-facebook"></i></div>
              <div className="social-link" id="star-scale"><i className="fa-brands fa-twitter"></i></div>
              <div className="social-link" id="star-scale"><i className="fa-brands fa-linkedin-in"></i></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
