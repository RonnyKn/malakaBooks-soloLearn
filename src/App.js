import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import About from "./pages/about/About"
import Benefits from "./pages/benefits/Benefits"
import ForEveryone from "./pages/forEveryone/ForEveryone"
import Preview from "./pages/preview/Preview"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route exact path="/" element={<ForEveryone />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/about" element={<About />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
