import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/Home/Home"
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
