import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/Home/Hero"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
