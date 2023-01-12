import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import About from "./pages/about/About"
import Benefits from "./pages/benefits/Benefits"
import ForEveryone from "./pages/forEveryone/ForEveryone"
import Preview from "./pages/preview/Preview"
import {
  navbar_data,
  header_data,
  benefit,
  book_contain,
  pratinjau,
  pricelist,
  aboutWriter,
  testi_data,
  footer_data,
} from "./assets/data/Data"
function App() {
  return (
    <BrowserRouter>
      <Navbar navbar_data={navbar_data} />
      <Header header_data={header_data} />
      <Routes>
        <Route exact path="/" element={<ForEveryone />} />
        <Route
          path="/benefits"
          element={<Benefits benefit={benefit} book_contain={book_contain} />}
        />
        <Route
          path="/about"
          element={<About aboutWriter={aboutWriter} testi_data={testi_data} />}
        />
        <Route
          path="/preview"
          element={<Preview pratinjau={pratinjau} pricelist={pricelist} />}
        />
      </Routes>
      <Footer footer_data={footer_data} />
    </BrowserRouter>
  )
}

export default App
