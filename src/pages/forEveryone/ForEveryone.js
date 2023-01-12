import "./ForEveryone.css"
import React from "react"
import Introductions from "../../components/Introductions/Introductions"

const ForEveryone = ({
  home_data: { title, subtitle, img, body, introduction },
}) => {
  return (
    <section className="for__everyone ">
      <div className="container for__everyone-container">
        <div className="for__everyone-left">
          <p className="sub-title">---BUKU INI UNTUK SIAPA</p>
          <h3>{title}</h3>
        </div>
        <div className="for__everyone-right">
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="for__everyone-img">
        <img src={img} alt="for__everyone.png" />
      </div>

      <div className="container for__everyone-framework">
        {body?.map((val, idx) => (
          <div className="for__everyone-desc" key={idx}>
            <h5>{val?.desc_title}</h5>
            <p>{val?.desc}</p>
          </div>
        ))}
      </div>

      <Introductions introduction={introduction} />
    </section>
  )
}

export default ForEveryone
