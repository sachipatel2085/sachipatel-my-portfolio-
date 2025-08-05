import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Allcategory from "./allcategory";
import Uidesign from "./Uidesign";
import Webtemplate from "./Webtemplate";
import Logo from "./Logo";
import Branding from "./Branding";

const Portfolio = () => {
  return (
    <>
    { }
    <div className="contener">
      <div className="port-main">
        <h1 id="bottom">portfolio</h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        <div className="port-nav">
          <ul>
            <li>
              <NavLink to="/Allcategory">all category</NavLink>
            </li>
            <li>
              <NavLink to="/Uidesign">UI design</NavLink>
            </li>
            <li>
              <NavLink to="/Webtemplate">Web template</NavLink>
            </li>
            <li>
              <NavLink to="/Logo">logo</NavLink>
            </li>
            <li>
              <NavLink to="/Branding">branding</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {  }
    <Routes>
        <Route path="Allcategory" element={<Allcategory />} />
        <Route path="Uidesign" element={<Uidesign />} />
        <Route path="Webtemplate" element={<Webtemplate />} />
        <Route path="logo" element={<Logo />} />
        <Route path="Branding" element={<Branding/>}/>
    </Routes>   
    </>
  );
};

export default Portfolio;
