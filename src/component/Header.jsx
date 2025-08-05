import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="nevbar">
      <div className="contener">
        <div className="header">
          <div className="logo">
            <img src="logo-png.png" alt="" />
          </div>
          <input type="checkbox" name="" id="check" />
          <label htmlFor="check"><i className="fa fa-bars"></i></label>
          <div className="manu">
              <li>
                <NavLink to="/" className="a">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" className="a">
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink to="/Services" className="a">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/Price" className="a">
                  Price
                </NavLink>
              </li>
              <li>
                <NavLink to="/Recomm" className="a">
                  Recomm
                </NavLink>
              </li>
              <li>
                <NavLink to="/Portfolio" className="a">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className="a-button">
                  Content
                </NavLink>
              </li>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default Header;
