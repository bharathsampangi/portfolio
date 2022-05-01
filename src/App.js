import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.scss';
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  const [dark, setDark] = useState(true)

  return (
    <div className="theme--default">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
