import React from 'react'
import { NavLink } from 'react-router-dom'

const Webtemplate = () => {
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
        <div className="project">
          <a href="https://github.com/sachipatel2085/sachipatel-triangel.git"><img src="public\fast1.png" alt="" /></a>
        </div>
        <div className="project">
          <a href="https://github.com/sachipatel2085/sachipatel-anindia.git"><img src="public\fast2.png" alt="" /></a>
        </div>
        <div className="project">
          <a href="https://github.com/sachipatel2085/sachipatel-elegence.git"><img src="public\fast3.png" alt="" /></a>
        </div>
        <div className="project">
          <a href="https://github.com/sachipatel2085/sachipatel-freelence.git"><img src="public\fast4.png" alt="" /></a>
        </div>
        <div className="project">
          <a href="https://github.com/sachipatel2085/sachipatel-timeless.git"><img src="public\Screenshot 2025-08-05 111947.png" alt="" /></a>
        </div>
        <div className="project">
          <a href="https://github.com/sachipatel2085/sachipatel-organick.git"><img src="public\Screenshot 2025-08-05 112236.png" alt="" /></a>
        </div>
        <div className="project">
          <a href="https://github.com/sachipatel2085/sachipatel-traveltrip.git"><img src="public\Screenshot 2025-08-05 135912.png" alt="" /></a>
        </div>
    </div>
    </>
  )
}

export default Webtemplate;