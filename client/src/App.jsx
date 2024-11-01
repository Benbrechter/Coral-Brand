import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import WWriting from './pages/weekly-writings';
import PrevWriting from './pages/previous-writings';
import Pictures from './pages/Trey';
import Contact from './pages/componets/contact';
import Home from './pages/Home';
import Iphone from './pages/Iphone';

function App() {

  return (
    <Router>
    <div className='page-container'>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writings" element={<WWriting />} />
          <Route path="/prevWriting" element={<PrevWriting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Trey" element={<Pictures />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path = '/Iphone' element = {<Iphone/>} />
        </Routes>
      </main>
    </div>
  </Router>
  )
}

export default App
