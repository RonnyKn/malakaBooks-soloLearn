import "./ForEveryone.css"
import React from "react"
import forImg1 from "../../assets/for1.png"
import Introductions from "../../components/Introductions/Introductions"

const ForEveryone = () => {
  return (
    <section className="for__everyone ">
      <div className="container for__everyone-container">
        <div className="for__everyone-left">
          <p className="sub-title">---BUKU INI UNTUK SIAPA</p>
          <h3>
            Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI
            designer!
          </h3>
        </div>
        <div className="for__everyone-right">
          <p>
            Buku ini bukan hanya untuk front-end developer yang ingin
            meningkatkan skill, buku ini juga cocok untuk back-end developer dan
            UI designer agar dapat menulis style tanpa harus menulis kode CSS
            dan tanpa mengandalkan front-end developer!
          </p>
        </div>
      </div>

      <div className="for__everyone-img">
        <img src={forImg1} alt="forImg1" />
      </div>

      <div className="container for__everyone-framework">
        <div className="for__everyone-desc">
          <h5>Utility-First Framework</h5>
          <p>
            Tailwind hadir dengan konsep utility-first. Utility-first artinya
            banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI.
          </p>
        </div>
        <div className="for__everyone-desc">
          <h5>Tailwind JIT Engine</h5>
          <p>
            JIT engine akan men-generate utility-class yang kita gunakan saja.
            Ini akan membuat pengalaman pengembangan semakin baik.
          </p>
        </div>
        <div className="for__everyone-desc">
          <h5>Unopinionated-Framework</h5>
          <p>
            Tailwind tidak memiliki pra-desain komponen apapun, ini membuat
            desain website yang kita buat menjadi unik.
          </p>
        </div>
      </div>

      <Introductions />
    </section>
  )
}

export default ForEveryone
