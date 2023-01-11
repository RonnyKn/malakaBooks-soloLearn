import "./About.css"
import React from "react"
import Testimonials from "../../components/testimonials/Testimonials"
import Buynow from "../../components/buynow/Buynow"

const About = ({
  aboutWriter: {
    img,
    title,
    subtitle,
    name,
    social,
    buynow_title,
    buynow_subtitle,
  },
  testi_data,
}) => {
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

      <Testimonials testi={testi_data} />

      <div className="about-buynow">
        <p className="sub-title sub-title2">---BELI BUKU SEKARANG</p>
        <h3>{buynow_title}</h3>
        <p>{buynow_subtitle}</p>
        <Buynow />
      </div>
    </section>
  )
}

export default About
