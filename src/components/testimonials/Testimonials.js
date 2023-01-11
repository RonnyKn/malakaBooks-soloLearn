import { Splide, SplideSlide } from "@splidejs/react-splide"
import React from "react"

const Testimonials = ({ testi: { title, subtitle, datas_testi } }) => {
  return (
    <div className="testimonials">
      <div className="testimonials-title">
        <div>
          <p className="sub-title">---TESTIMONIAL</p>
          <h3>{title}</h3>
        </div>
        <p className="testimonials-subtitle">{subtitle}</p>
      </div>
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
        {datas_testi?.map((val, idx) => (
          <SplideSlide key={idx}>
            <div className="testi-data">
              <p>{val?.message}</p>
              <div className="testi-bio">
                <img src={val?.img} alt={`img${idx}.png`} />
                <div className="testi-name">
                  <h5>{val?.name}</h5>
                  <p>{val?.status}</p>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Testimonials
