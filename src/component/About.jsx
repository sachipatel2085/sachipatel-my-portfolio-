import React from "react";

const About = () => {
  return (
    <>
    <div className="contener">
      <div className="about-main">
      <h1 id="bottom">
        About Me
      </h1>
      <div className="about-info">
        <div className="about" id="left">
          <h2>
            my details
          </h2>
          <div className="my-detail">
            <p className="pr2">age: <a href="">20</a></p>
            <p className="pr2">freelence: <a href="">available</a></p>
            <p className="pr2">address: <a href="">vavdi, himmatnager</a></p>
          </div>
        </div>        
        <div className="about" id="top">
          <h2>
            languages
          </h2>
          <div className="my-detail">
            <div className="p-line">
              gujrati: 
              <a href="">100%</a>
              <div className="line">
                <div className="pr1"></div>
              </div>
            </div>
            <div className="p-line">
              hindi: 
              <a href="">80%</a>
              <div className="line">
                <div className="pr8"></div>
              </div>
            </div>
            
            <div className="p-line">
              english: 
              <a href="">50%</a>
              <div className="line">
                <div className="pr5"></div>
              </div>
            </div>
          </div>
        </div>       
        <div className="about" id="top">
          <h2>
            skills
          </h2>
          <div className="my-detail">
            <div className="p-line">
              html: 
              <a href="">90%</a>
              <div className="line">
                <div className="pr9"></div>
              </div>
            </div>
            <div className="p-line">
              css: 
              <a href="">90%</a>
              <div className="line">
                <div className="pr9"></div>
              </div>
            </div>
            <div className="p-line">
              javascript: 
              <a href="">80%</a>
              <div className="line">
                <div className="pr8"></div>
              </div>
            </div>
          </div>
        </div>        
        <div className="about"id="right">
          <h2>
            ext-skill
          </h2>
          <div className="my-detail">
            <div className="p-line">
              <i className="fa fa-bookmark-o"></i>
              <a href="" className="pa1">bootstrap</a>
            </div>
            <div className="p-line">
              <i className="fa fa-bookmark-o"></i>
              <a href="" className="pa1">jqury</a>
            </div>
            <div className="p-line">
              <i className="fa fa-bookmark-o"></i>
              <a href="" className="pa1">json</a>
            </div>
          </div>
        </div>
      </div>
      <button className="about-button" id="star-scale">DONLODE</button>
      </div>
    </div>
    </>
  );
};

export default About;
