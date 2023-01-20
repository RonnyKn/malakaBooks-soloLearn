import "./Navbar.css"
import React, { useState } from "react"
import { GoThreeBars } from "react-icons/go"
import { MdOutlineClose } from "react-icons/md"
import { NavLink } from "react-router-dom"

const Navbar = ({ navbar_data: { title_app, navigation } }) => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  const [isActive, setIsActive] = useState("/")

  const scrollTop = () => {
    window.scroll(0, 0)
    setIsNavShowing(false)
  }
  console.log(isActive)
  return (
    <nav>
      <div className="container nav-container">
        <div className="nav-logo" onClick={scrollTop}>
          <span>M</span>
          <h3>{title_app}</h3>
        </div>
        <div className={`nav-menus ${isNavShowing ? "nav-show" : "nav-hide"}`}>
          <ul>
            {navigation?.map((val, idx) => (
              <NavLink
                to={val?.to}
                onClick={() => {
                  scrollTop()
                  setIsActive(`${val?.to}`)
                }}
                key={idx}
              >
                <li className={val?.to === isActive ? "nav-active" : null}>
                  {val?.text}
                </li>
              </NavLink>
            ))}
            <li>
              <button type="button" className="btn nav-btn">
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
