import techsHtml from "../../assets/techs/html.svg"
import techsCss from "../../assets/techs/css.svg"
import techsChrome from "../../assets/techs/chrome.svg"
import techsSublime from "../../assets/techs/sublime.svg"
import techsNodejs from "../../assets/techs/nodejs.svg"
import techsNpm from "../../assets/techs/npm.svg"
import techs7 from "../../assets/techs/Frametechs-4.svg"
import benefitImg from "../../assets/benefit-book.png"
import benefitImg2 from "../../assets/benefit-book2.png"
import cover from "../../assets/preview-book.png"
import preview1 from "../../assets/preview/image 7preview-isi.png"
import preview2 from "../../assets/preview/image 8preview-isi.png"
import preview3 from "../../assets/preview/image 9preview-isi.png"
import preview4 from "../../assets/preview/image 10preview-isi.png"
import preview5 from "../../assets/preview/image 11preview-isi.png"
import preview6 from "../../assets/preview/image 12preview-isi.png"
import preview7 from "../../assets/preview/image 13preview-isi.png"

import writerImg from "../../assets/about-1.png"
import writerImgRound from "../../assets/for2.png"

const techsImg = [
  techsHtml,
  techsCss,
  techsChrome,
  techsSublime,
  techsNodejs,
  techsNpm,
  techs7,
]

const benefit = {
  title: "Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini",
  quote:
    '"Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang yang bodoh, engkau tak bisa berharap yang terpantul adalah seorang yang jenius." - J.K Rowling',
  benefitimg: benefitImg,
  benefitimg2: benefitImg2,
  benefit_points: [
    "Buku ini cocok untuk seorang yang ingin memperdalam front-end development agar tidak hanya sekadar Bootstrap",
    "Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS langsung, agar meminimalisir terjadinya miskonsepsi",
    "Sangat ramah untuk back-end developer yang phobia terhadap CSS dan mudah dipahami bagi UI designer",
    "Studi kasus membangun sebuah website responsive dengan Tailwind CSS tanpa ngoding CSS",
  ],
  title2: "Buku dengan studi kasus nyata, juga komunitas yang ramah",
  subtitle2:
    "Buku ini diakhiri dengan membangun website yang responsive dengan Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas untuk bertanya ketika mengalami kesulitan.",
}
const book_contain = [
  {
    name: "Jumlah Chapter",
    contain: "19",
  },
  {
    name: "Jumlah Halaman",
    contain: "253",
  },
  {
    name: "Hari Menulis",
    contain: "60",
  },
]

// ======PREVIEW=======

const pratinjau = {
  title:
    "Sebelum membeli, kamu dapat melihat beberapa halaman pratinjau isi di dalam buku ini",
  subtitle:
    "Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih detail halaman buku tersebut dan membaca isinya.",
  img: [
    cover,
    preview1,
    preview2,
    preview3,
    preview4,
    preview5,
    preview6,
    preview7,
  ],
}

const pricelist = {
  title:
    "Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di perangkat kamu",
  subtitle:
    "Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis. Hak cipta dilindungi undang-undang.",
  prices: [
    {
      book_type: "Buku Digital",
      book_price: "Rp100.000",
      book_contain: [
        { benefit: "Buku lengkap", validity: true },
        { benefit: "Akses secara digital", validity: true },
        { benefit: "Buku fisik", validity: false },
        { benefit: "Mendapat pembaruan", validity: true },
        { benefit: "Konsultasi", validity: true },
        { benefit: "Dapat diunduh", validity: true },
      ],
    },
    {
      book_type: "Buku Fisik",
      book_price: "Rp150.000",
      book_contain: [
        { benefit: "Buku lengkap", validity: true },
        { benefit: "Akses secara digital", validity: false },
        { benefit: "Buku fisik", validity: true },
        { benefit: "Mendapat pembaruan", validity: false },
        { benefit: "Konsultasi", validity: true },
        { benefit: "Dapat diunduh", validity: false },
      ],
    },
    {
      book_type: "Buku Digital + FIsik",
      book_price: "Rp250.000",
      book_contain: [
        { benefit: "Buku lengkap", validity: true },
        { benefit: "Akses secara digital", validity: true },
        { benefit: "Buku fisik", validity: true },
        { benefit: "Mendapat pembaruan", validity: true },
        { benefit: "Konsultasi", validity: true },
        { benefit: "Dapat diunduh", validity: true },
      ],
    },
  ],
}
// =======about section=======
const aboutWriter = {
  img: writerImg,
  title: "Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini",
  subtitle:
    "“Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga kamu. Namun, kedepannya saya berharap nama ini tidak lagi terdengar asing di telinga kamu sebagai orang yang rajin berbagi hal-hal baik untuk masyarakat, khususnya dalam ilmu komputer. Saya seorang web developer yang masuk kategori apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski begitu, saya lebih senang fokus di front-end development, karena --menurut saya-- ini lebih sederhana saja. Di front-end development pada dasarnya hanya perlu menguasai tiga bahasa: HTML, CSS, dan JavaScript. Sudah jelas ini sederhana, yang bikin ribet itu kamu sendiri, sudah tau kamu cocoknya pake jQuery, malah maksa pake React.”",
  name: "Muhamad Nauval Azhar",
  social: "@mhdnauvalazhar",
}
const testi_data = {
  title: "Apa kata orang-orang yang membaca buku ini?",
  subtitle:
    "Kalo seandainya kamu belum percaya dengan buku ini maka tidak apa-apa, karena yang patut kamu percayai adalah Tuhan. Tapi, mungkin beberapa ulasan ini bisa membangkitkan hasratmu untuk membeli buku ini.",
  datas_testi: [
    {
      message:
        "“Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”",
      img: writerImgRound,
      name: "Ahmad Saugi",
      status: "Mahasiswa",
    },
    {
      message:
        "“Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami dan mempelajari taildwindcss. Isinya cukup lengkap dan detail.”",
      img: writerImgRound,
      name: "Dedik Sugiharto",
      status: "Front-end Engineer",
    },
    {
      message:
        "“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”",
      img: writerImgRound,
      name: "Lutfi Hanafiah Ramadhan",
      status: "Support",
    },
    {
      message:
        "“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”",
      img: writerImgRound,
      name: "Lutfi Hanafiah Ramadhan",
      status: "Support",
    },
    {
      message:
        "“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”",
      img: writerImgRound,
      name: "Lutfi Hanafiah Ramadhan",
      status: "Support",
    },
    {
      message:
        "“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”",
      img: writerImgRound,
      name: "Lutfi Hanafiah Ramadhan",
      status: "Support",
    },
  ],
}

export {
  techsImg,
  benefit,
  book_contain,
  pratinjau,
  pricelist,
  aboutWriter,
  testi_data,
}
