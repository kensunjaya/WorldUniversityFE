import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <main className="min-h-screen w-screen bg-primary font-sans">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
