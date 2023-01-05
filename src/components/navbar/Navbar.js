import "./Navbar.css"
import React, { useState } from "react"
import { GoThreeBars } from "react-icons/go"
import { MdOutlineClose } from "react-icons/md"

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)

  return (
    <nav>
      <div className="container nav-container">
        <div className="nav-logo">
          <span>M</span>
          <h3>Malaka Books</h3>
        </div>
        <div className={`nav-menus ${isNavShowing ? "nav-show" : "nav-hide"}`}>
          <ul>
            <li>For Everyone</li>
            <li>Benefit</li>
            <li>Preview</li>
            <li>About</li>
            <li>
              <button type="button" className="btn">
                Download
              </button>
            </li>
          </ul>
        </div>
        <div className="nav-download">
          <button
            className="nav-navigation btn"
            onClick={() => setIsNavShowing(!isNavShowing)}
          >
            {isNavShowing ? (
              <MdOutlineClose size="2em" />
            ) : (
              <GoThreeBars size="2em" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
