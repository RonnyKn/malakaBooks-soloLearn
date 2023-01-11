import React from "react"
import { MdCheckCircle, MdCancel } from "react-icons/md"

const Pricelist = ({ pricelist: { title, subtitle, prices } }) => {
  return (
    <div className="pricelist">
      <div className="container pricelist-container">
        <p className="sub-title2 sub-title3">HARGA BUKU</p>
        <h3 className="pricelist-title">{title}</h3>
        <p className="pricelist-subtitle">{subtitle}</p>
        <div className="pricelist-prices">
          {prices?.map((val, idx) => (
            <div className="prices" key={idx}>
              <p className="prices-book__type">{val?.book_type}</p>
              <h3>{val?.book_price}</h3>
              {val?.book_contain.map((item, idx) => (
                <div className="prices-bookcontain" key={idx}>
                  {item?.validity ? (
                    <MdCheckCircle color="green" size="2em" />
                  ) : (
                    <MdCancel color="red" size="2em" />
                  )}
                  <p>{item?.benefit}</p>
                </div>
              ))}
              <button type="button" className="btn pricelist-btn">
                Beli Sekarang
              </button>
            </div>
          ))}
        </div>
        <div className="pricelist-attention">
          <h5>*Buku digital akan dikirimkan ke alamat email kamu</h5>
          <h5>*Buku fisik dikirim 7 hari setelah pemesanan</h5>
        </div>
      </div>
    </div>
  )
}

export default Pricelist
