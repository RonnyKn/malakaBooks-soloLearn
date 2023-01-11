import "./About.css"
import React from "react"

const About = ({ aboutWriter: { img, title, subtitle, name, social } }) => {
  return (
    <section className="about container">
      <div className="about-container">
        <div className="about-left">
          <div className="about-writer">
            <img src={img} alt="writer.png" />
            <div className="writer-bio">
              <h5>{name}</h5>
              <p>{social}</p>
            </div>
          </div>
        </div>
        <div className="about-right">
          <p className="sub-title ">---PENULIS BUKU</p>
          <h3 className="about-title">{title}</h3>
          <p className="about-subtitle">{subtitle}</p>
        </div>
      </div>
      <Testimonials />
    </section>
  )
}

export default About
