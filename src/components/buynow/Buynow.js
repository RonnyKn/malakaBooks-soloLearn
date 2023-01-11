import React from "react"
import { BsArrowRightCircle, BsDownload } from "react-icons/bs"
import "./Buynow.css"

const Buynow = () => {
  return (
    <div className="buynow">
      <button type="button" className="buynow-btn btn">
        <strong> Beli Sekarang</strong> <BsArrowRightCircle />
      </button>
      <div className="sold">
        <BsDownload />
        <div className="soldout">
          <p>SUDAH TERJUAL</p>
          <h5>501,234+</h5>
        </div>
      </div>
    </div>
  )
}

export default Buynow
