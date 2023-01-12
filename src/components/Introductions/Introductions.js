import React from "react"

const Introductions = ({
  introduction: { title, img, writer_name, writer_social, words },
}) => {
  return (
    <div className="introductions">
      <div className="container introductions-container">
        <div className="introductions-left">
          <p className="sub-title-introductions">---BUKU INI UNTUK SIAPA</p>
          <h3>{title}</h3>
          <div className="introductions-writer">
            <img src={img} alt="writer.png" />
            <div className="introductions-writer-name">
              <p>{writer_name}</p>
              <p>{writer_social}</p>
            </div>
          </div>
        </div>
        <div className="introductions-right">
          <p>{words}</p>
        </div>
      </div>
    </div>
  )
}

export default Introductions
