import "./About.css"
import React from "react"

const About = ({ aboutWriter: { img, title, subtitle } }) => {
  return (
    <section className="about container">
      <div className="about-container">
        <div className="about-left">
          <img src={img} alt="writer.png" />
        </div>
        <div className="about-right">
          <p className="sub-title sub-title2">PENULIS BUKU</p>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default About
