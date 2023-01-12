import "./Header.css"
import React from "react"
import bookCover from "../../assets/book.png"
import Buynow from "../buynow/Buynow"

const Header = ({ header_data: { title, subtitle, techs, techsImg } }) => {
  return (
    <section className="header">
      <div className="container header-container">
        <div className="header-left">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <Buynow />
          <span className="header-techs">{techs}</span>
          <div className="header-svg">
            {techsImg?.map((tech, idx) => (
              <img key={idx} src={tech} alt={`techs${idx}`} />
            ))}
          </div>
        </div>
        <div className="header-right">
          <img src={bookCover} alt="cover" />
        </div>
      </div>
    </section>
  )
}

export default Header
