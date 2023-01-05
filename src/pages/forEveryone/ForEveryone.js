import "./ForEveryone.css"
import React from "react"
import { BsArrowRightCircle, BsDownload } from "react-icons/bs"
import techsHtml from "../../assets/techs/html.svg"
import techsCss from "../../assets/techs/css.svg"
import techsChrome from "../../assets/techs/chrome.svg"
import techsSublime from "../../assets/techs/sublime.svg"
import techsNodejs from "../../assets/techs/nodejs.svg"
import techsNpm from "../../assets/techs/npm.svg"
import techs7 from "../../assets/techs/Frametechs-4.svg"
import bookCover from "../../assets/book.png"

const ForEveryone = () => {
  return (
    <section className="for__everyone">
      <div className="container for__everyone-container">
        <div className="for__everyone-left">
          <h1>
            Sebuah framework CSS untuk developer yang memiliki phobia terhadap
            CSS
          </h1>
          <p>
            Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
            diakhiri dengan membangun sebuah website yang responsive dengan
            Tailwind CSS.
          </p>
          <div className="for__everyone-buynow">
            <button type="button" className="for__everyone-buynow-btn btn">
              <strong> Beli Sekarang</strong> <BsArrowRightCircle />
            </button>
            <div className="for__everyone-sold">
              <BsDownload />
              <div className="for__everyone-soldout">
                <p>SUDAH TERJUAL</p>
                <h5>501,234+</h5>
              </div>
            </div>
          </div>
          <span className="for__everyone-techs">TEKNOLOGI YANG DIGUNAKAN</span>
          <div className="for__everyone-svg">
            <img src={techsHtml} alt="techs" />
            <img src={techsCss} alt="techs" />
            <img src={techsChrome} alt="techs" />
            <img src={techsSublime} alt="techs" />
            <img src={techsNodejs} alt="techs" />
            <img src={techsNpm} alt="techs" />
            <img src={techs7} alt="techs" />
          </div>
        </div>
        <div className="for__everyone-right">
          <img src={bookCover} alt="cover" />
        </div>
      </div>
    </section>
  )
}

export default ForEveryone
