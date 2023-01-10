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

export { techsImg, benefit, book_contain, pratinjau }
