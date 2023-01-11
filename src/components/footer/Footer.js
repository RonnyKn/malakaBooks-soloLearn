import "./Footer.css"
import React from "react"

const Footer = ({
  footer_data: {
    title,
    subtitle,
    btn1,
    btn2,
    app_title,
    app_desc,
    products,
    company,
    get_in_touch,
    copyright,
  },
}) => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-title">
          <div className="footer-title-left">
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
          <div className="footer-title-right">
            <button className="footer-title-btn1">{btn1}</button>
            <button className="footer-title-btn2">{btn2}</button>
          </div>
        </div>
        <div className="footer-app">
          <div className="footer-app-left">
            <span>M</span>
            <h3>{app_title}</h3>
            <p>{app_desc}</p>
          </div>
          <div className="footer-app-right">
            <div className="footer-app-right-product">
              <h5>PRODUCTS</h5>
              <ul>
                {products?.map((val, idx) => (
                  <li key={idx}>
                    <a href="/" target="_blank">
                      {val}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-app-right-company">
              <h5>COMPANY</h5>
              <ul>
                {company?.map((val, idx) => (
                  <li key={idx}>
                    <a href="/" target="_blank">
                      {val}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-app-right-contact">
              <h5>GET IN TOUCH</h5>
              <ul>
                {get_in_touch?.map((val, idx) => (
                  <li key={idx}>
                    <a href="/" target="_blank">
                      {val}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <h5>{copyright}</h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer
