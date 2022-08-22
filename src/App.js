import './App.css';
// import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import About from './components/About'
import Dumplings from './components/Dumplings'
import Contact from './components/Contact'
import Home from './components/Home'
import ComingSoon from "./components/ComingSoon"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/divine-dumplings" element={<Dumplings />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
