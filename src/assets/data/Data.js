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
import introductionImg from "../../assets/for2.png"
import writerImg from "../../assets/about-1.png"
import writerImgRound from "../../assets/for2.png"
import forImg1 from "../../assets/for1.png"
const navbar_data = {
  title_app: "Malaka Books",
  navigation: [
    {
      text: "For Everyone",
      to: "/",
    },
    {
      text: "Benefit",
      to: "/benefits",
    },
    {
      text: "Preview",
      to: "/preview",
    },
    {
      text: "About",
      to: "/about",
    },
  ],
}
// ==========HEADER===========
const header_data = {
  title:
    "Sebuah framework CSS untuk developer yang memiliki phobia terhadap CSS",
  subtitle:
    "Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan diakhiri dengan membangun sebuah website yang responsive dengan Tailwind CSS.",
  techs: "TEKNOLOGI YANG DIGUNAKAN",
  techsImg: [
    techsHtml,
    techsCss,
    techsChrome,
    techsSublime,
    techsNodejs,
    techsNpm,
    techs7,
  ],
}
// ==========FOR EVERYONE===========
const home_data = {
  title:
    "Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI designer!",
  subtitle:
    "Buku ini bukan hanya untuk front-end developer yang ingin meningkatkan skill, buku ini juga cocok untuk back-end developer dan UI designer agar dapat menulis style tanpa harus menulis kode CSS dan tanpa mengandalkan front-end developer!",
  img: forImg1,
  body: [
    {
      desc_title: "Utility-First Framework",
      desc: "Tailwind hadir dengan konsep utility-first. Utility-first artinya banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI.",
    },
    {
      desc_title: "Tailwind JIT Engine",
      desc: "JIT engine akan men-generate utility-class yang kita gunakan saja.Ini akan membuat pengalaman pengembangan semakin baik.",
    },
    {
      desc_title: "Unopinionated-Framework",
      desc: " Tailwind tidak memiliki pra-desain komponen apapun, ini membuat desain website yang kita buat menjadi unik.",
    },
  ],
  introduction: {
    title: "Kata Pengantar Dari Penulis Buku",
    img: introductionImg,
    writer_name: "Muhamad Nauval Azhar",
    writer_social: "mhdnauvalazhar",
    words:
      '"Tailwind sangat memungkinkan kamu untuk membangun sebuah desain website yang unik dan tanpa kamu perlu menulis kode CSS sedikitpun.Mungkin kamu akan berpikir bahwa kamu akan membutuhkan waktu yanglebih lama ketika membangun sebuah website dengan utility-first framework ketimbang dengan framework UIkit. Ya, benar. Karena kamu mengimplementasikan desain tersebut dari awal sendiri. Namun, kamu perlu ingat manfaat-manfaat yang diberikan oleh utility-first framework, sehingga kamu dapat mempertimbangkannya. Dalam buku ini, kita akan mempelajari framework Tailwind CSS. Mulai dari konsep, workflow, hingga membuat sebuah website responsive dengan TailwindCSS. Buku ini tidak untuk semua orang, setidaknya kamu memahami cara mengoperasikan komputer,memahami HTML, memahami CSS, atau bisa dibilang kamu sudah pernah membangun website sebelumnya dan ingin mempelajari hal baru untuk meningkatkan skill."',
  },
}
// ==========BENEFITS===========
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
  buynow_title: "Anda ingin segera memesan buku ini?",
  buynow_subtitle:
    "Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja.",
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

const footer_data = {
  title: "Sudah siap meningkatkan skill kamu?",
  subtitle:
    "Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas pertanyaan kamu di halaman bantuan.",
  btn1: "Pusat Bantuan",
  btn2: "Mendaftar",
  app_title: "The Malaka",
  app_desc:
    "Malaka adalah situs penyedia kursus ilmu komputer berbahasa Indonesia, mulai dari pengembangan hingga desain grafis.",
  products: ["Courses", "Books", "Freebies", "Classes"],
  company: [
    "About Us",
    "Contact",
    "Privacy Policy",
    "Terms of Service",
    "Help",
  ],
  get_in_touch: ["Twitter", "Facebook", "Dribbble"],
  copyright: "COPYRIGHT © 2022 — DESIGN BY NAUVAL",
}

export {
  navbar_data,
  header_data,
  home_data,
  benefit,
  book_contain,
  pratinjau,
  pricelist,
  aboutWriter,
  testi_data,
  footer_data,
}
