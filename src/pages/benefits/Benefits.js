import "./Benefits.css"
import React from "react"
import { AiFillCheckCircle } from "react-icons/ai"
import BenefitOthers from "../../components/benefitOthers/BenefitOthers"

const Benefits = ({
  book_contain,
  benefit: {
    title,
    quote,
    benefitimg,
    benefit_points,
    benefitimg2,
    title2,
    subtitle2,
  },
}) => {
  return (
    <section className="benefits">
      <div className="container benefits-container">
        <div className="benefits-left">
          <p className="sub-title">---MANFAAT BUKU</p>
          <h3 className="benefits-left-title">{title}</h3>
          <p>{quote}</p>
          <div className="benefits-left-points">
            {benefit_points?.map((val, idx) => (
              <div key={idx} className="benefits-left-point">
                <AiFillCheckCircle color="#20D27D" size="2em" /> <p>{val}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="benefits-right">
          <img src={benefitimg} alt="benefitimg.png" />
          <div className="book-contains">
            {book_contain?.map((val, idx) => (
              <div className="book-contain" key={idx}>
                <h3>{val.contain}</h3>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BenefitOthers
        benefitimg2={benefitimg2}
        title2={title2}
        subtitle2={subtitle2}
      />
    </section>
  )
}

export default Benefits
