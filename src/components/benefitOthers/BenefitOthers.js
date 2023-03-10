import React from "react"
import { BsCodeSlash, BsFillArrowRightCircleFill } from "react-icons/bs"
import { AiOutlineMessage } from "react-icons/ai"

const BenefitOthers = ({ benefitimg2, title2, subtitle2 }) => {
  return (
    <div className="container benefits-container">
      <div className="benefits-left">
        <img src={benefitimg2} alt="benefitimg2.png" />
      </div>
      <div className="benefits-right">
        <p className="sub-title">---SELAIN ITU</p>
        <h3>{title2}</h3>
        <p>{subtitle2}</p>
        <div className="Others-points">
          <div className="Others-point">
            <BsCodeSlash size="1.7em" />
            <div>
              <h5 className="point-subtitle">Live Demo Project</h5>
              <p>
                Lihat live demo project yang akan kamu buat di akhir buku ini.
              </p>
            </div>
            <BsFillArrowRightCircleFill size="1.7em" />
          </div>
          <div className="Others-point">
            <AiOutlineMessage size="2em" />
            <div>
              <h5 className="point-subtitle">Dukungan Komunitas</h5>
              <p>
                Sebuah server Discord berisi teman-teman yang akan membantu
                kamu.
              </p>
            </div>
            <BsFillArrowRightCircleFill size="2em" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitOthers
