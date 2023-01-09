import "./Navbar.css"
import React, { useState } from "react"
import { GoThreeBars } from "react-icons/go"
import { MdOutlineClose } from "react-icons/md"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)

  const scrollTop = () => {
    window.scroll(0, 0)
  }

  return (
    <nav>
      <div className="container nav-container">
        <div className="nav-logo">
          <span>M</span>
          <h3>Malaka Books</h3>
        </div>
        <div className={`nav-menus ${isNavShowing ? "nav-show" : "nav-hide"}`}>
          <ul>
            <Link to="/" onClick={scrollTop}>
              <li> For Everyone </li>
            </Link>
            <Link to="/benefits" onClick={scrollTop}>
              <li>Benefit</li>
            </Link>
            <Link to="/preview" onClick={scrollTop}>
              <li>Preview</li>
            </Link>
            <Link to="/aboout" onClick={scrollTop}>
              <li>About</li>
            </Link>
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
