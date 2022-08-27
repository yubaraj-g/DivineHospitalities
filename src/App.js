import './App.css';
// import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage'
import DumplingsHomePage from './components/DumplingsHomePage'
import ContactPage from './components/ContactPage'
// import Home from './components/Home'
import ComingSoon from "./components/ComingSoon"
import DivineHome from './components/DivineHome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<DivineHome />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/divine-dumplings" element={<DumplingsHomePage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
