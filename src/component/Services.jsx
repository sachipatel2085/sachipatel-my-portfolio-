import React from "react";

const Services = () => {
  return (
    <>
    <div className="contener">
      <div className="service-main">
        <h1 id="bottom">services</h1>
        <div className="service-info">
          <div className="service" id="left">
            <i className="fa fa-code"></i>
            <h2>web devlopment</h2>
            <p>blog, e-commerce</p>
          </div>
          <div className="service" id="top">
            <i className="fa fa-terminal"></i>
            <h2>UI/UX design</h2>
            <p>Mobile app, website design</p>
          </div>
          <div className="service" id="right">
            <i className="fa fa-gamepad"></i>
            <h2>game design</h2>
            <p>Character Design, Props & Objects</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
