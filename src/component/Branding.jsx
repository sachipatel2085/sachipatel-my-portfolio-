import React from 'react'
import { NavLink } from 'react-router-dom'

const Branding = () => {
  return (
    <>
        <div className="contener">
          <div className="port-main">
            <h1>portfolio</h1>
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
    <div className="category">
    </div>
    </>
  )
}

export default Branding