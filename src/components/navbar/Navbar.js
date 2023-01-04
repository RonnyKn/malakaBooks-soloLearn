import "./Navbar.css"
import React from "react"

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <div className="nav-logo">
          <span>M</span>
          <h3>Malaka Books</h3>
        </div>
        <div className="nav-menus">
          <ul>
            <li>For Everyone</li>
            <li>Benefit</li>
            <li>Preview</li>
            <li>About</li>
          </ul>
        </div>
        <div className="nav-download">
          <button type="button" className="btn">
            Download
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
