import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/Home/Hero"
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
