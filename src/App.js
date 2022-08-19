import './App.css';
import Nav from './components/Nav';
// import Dumplings from './components/Dumplings';
import { Routes, Route } from 'react-router-dom';
import About from './components/About'
import Dumplings from './components/Dumplings'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/dumplings" element={<Dumplings />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
