import "./Preview.css"
import React from "react"
import "@splidejs/react-splide/css"
import { Splide, SplideSlide } from "@splidejs/react-splide"

const Preview = ({ pratinjau: { title, subtitle, img } }) => {
  return (
    <section className="preview">
      <div className="container preview-container">
        <p className="sub-title sub-title2">PRATINJAU</p>
        <h3 className="preview-title">{title}</h3>
        <p className="preview-subtitle">{subtitle}</p>
        <Splide
          options={{
            type: "loop",
            rewind: true,
            perPage: 3,
            perMove: 1,
            autoplay: true,
            keyboard: "global",
            gap: "1rem",
            pagination: true,
            padding: "2rem",
            breakpoints: {
              1200: { perPage: 3 },
              991: { perPage: 2.3 },
              768: { perPage: 2 },
              500: { perPage: 1.3 },
              425: { perPage: 1 },
            },
          }}
        >
          {img?.map((val, idx) => (
            <SplideSlide key={idx}>
              <img className="preview-slide" src={val} alt={`preview${idx}`} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <Pricelist />
    </section>
  )
}

export default Preview
