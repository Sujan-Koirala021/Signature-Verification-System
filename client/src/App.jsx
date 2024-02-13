import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignatureVerification from './pages/SignatureVerification';
import AboutPage from './pages/AboutPage';
import HelpPage from './pages/HelpPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/verify" element={<SignatureVerification/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/help" element={<HelpPage/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
