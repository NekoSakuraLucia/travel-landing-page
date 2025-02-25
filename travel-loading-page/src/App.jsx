import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/Home/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
