import "./Introductions.css"
import React from "react"
import writer from "../../assets/for2.png"

const Introductions = () => {
  return (
    <div className="introductions">
      <div className="container introductions-container">
        <div className="introductions-left">
          <p className="sub-title-introductions">---BUKU INI UNTUK SIAPA</p>
          <h3>Kata Pengantar Dari Penulis Buku</h3>
          <div className="introductions-writer">
            <img src={writer} alt="writer.png" />
            <div className="introductions-writer-name">
              <p>Muhamad Nauval Azhar</p>
              <p>@mhdnauvalazhar</p>
            </div>
          </div>
        </div>
        <div className="introductions-right">
          <p>
            "Tailwind sangat memungkinkan kamu untuk membangun sebuah desain
            website yang unik dan tanpa kamu perlu menulis kode CSS sedikitpun.
            Mungkin kamu akan berpikir bahwa kamu akan membutuhkan waktu yang
            lebih lama ketika membangun sebuah website dengan utility-first
            framework ketimbang dengan framework UIkit. Ya, benar. Karena kamu
            harus memikirkan desain dan mengimplementasikan desain tersebut dari
            awal sendiri. Namun, kamu perlu ingat manfaat-manfaat yang diberikan
            oleh utility-first framework, sehingga kamu dapat
            mempertimbangkannya. Dalam buku ini, kita akan mempelajari framework
            Tailwind CSS. Mulai dari konsep, workflow, hingga membuat sebuah
            website responsive dengan TailwindCSS. Buku ini tidak untuk semua
            orang, setidaknya kamu memahami cara mengoperasikan komputer,
            memahami HTML, memahami CSS, atau bisa dibilang kamu sudah pernah
            membangun website sebelumnya dan ingin mempelajari hal baru untuk
            meningkatkan skill."
          </p>
        </div>
      </div>
    </div>
  )
}

export default Introductions
