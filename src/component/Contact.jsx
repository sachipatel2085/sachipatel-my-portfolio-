import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
    <div className="contener">
      <div className="contect-main">
        <div className="contect-left" id="left">
          <h1 id="bottom">leave us your info</h1>
          <br />
          your full name (required)
          <br />
          <input type="text" placeholder="Name" />
          <br />
          your email (required)
          <br />
          <input type="email" placeholder="Email" />
          <br />
          subject
          <br />
          <input type="text"placeholder="Subject" />
          <br />
          your message
          <br />
          <textarea name="" id="" cols="30" rows="10" placeholder="Massage"></textarea>
          <br />
          <button className="contect-button" id="star-scale">Send Message</button>
        </div>
        <div className="contect-right" id="right">
          <h1 id="bottom">contect information</h1>
          <div className="contect-info">
            <i className="fa fa-globe"></i>
            <p>county: <span>india</span></p>
            <p>city: <span>himmatnager</span></p>
            <p>state: <span>gujrat</span></p>
          </div>
          <div className="contect-info">
            <i className="fa fa-envelope"></i>
            <p>email: <span>sachixl300@gamil.com</span></p>
            <p>skype: <span>@sachipatel</span></p>
            <p>telegram: <span>@sachipatel</span></p>
          </div>
          <div className="contect-info">
            <i className="fa fa-phone"></i>
            <p>support service: <span>12345</span></p>
            <p>office: <span>7863847823</span></p>
            <p>parsonal: <span>7863847823</span></p>
          </div>

        </div>
      </div>
      <div className="map">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29246.211831823108!2d73.08362529853886!3d23.612347963869897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395d956eb4c3965d%3A0xcc66f03e5361771b!2sVavdi%2C%20Gujarat%20383030!5e0!3m2!1sen!2sin!4v1752555766779!5m2!1sen!2sin" 
        width="100%" 
        height="350"  
        allowFullScreen="" 
        loading="lazy">
        </iframe>
      </div>
      <div className="contect-manu">
            <ul>
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/About">
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink to="/Services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/Price">
                  Price
                </NavLink>
              </li>
              <li>
                <NavLink to="/Recomm">
                  Recomm
                </NavLink>
              </li>
              <li>
                <NavLink to="/Portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" >
                  Content
                </NavLink>
              </li>
            </ul>
          </div>   
        <div className="contect-media">
          <div className="contect-link" id="star-scale"><i className="fa-brands fa-instagram"></i></div>
          <div className="contect-link" id="star-scale"><i className="fa-brands fa-facebook"></i></div>
          <div className="contect-link" id="star-scale"><i className="fa-brands fa-twitter"></i></div>
          <div className="contect-link" id="star-scale"><i className="fa-brands fa-linkedin-in"></i></div>
        </div> 
        <div className="footer">
          <p>© 2025 <img src="public\logo-png.png" alt="" /> ALL rights are reserved , inc</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
