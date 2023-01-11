import "./Header.css"
import React from "react"
import { BsArrowRightCircle, BsDownload } from "react-icons/bs"
import { techsImg } from "../../assets/data/Data"
import bookCover from "../../assets/book.png"
import Buynow from "../buynow/Buynow"

const Header = () => {
  return (
    <section className="header">
      <div className="container header-container">
        <div className="header-left">
          <h1>
            Sebuah framework CSS untuk developer yang memiliki phobia terhadap
            CSS
          </h1>
          <p>
            Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
            diakhiri dengan membangun sebuah website yang responsive dengan
            Tailwind CSS.
          </p>
          <Buynow />
          <span className="header-techs">TEKNOLOGI YANG DIGUNAKAN</span>
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
