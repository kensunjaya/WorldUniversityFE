import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Search from "./pages/Search"
import Details from "./pages/Detail"

function App() {
  return (
    <main className="min-h-screen w-screen bg-primary font-sans">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
