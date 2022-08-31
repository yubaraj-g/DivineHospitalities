import './App.css';
// import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import AboutResturant from './components/AboutResturant'
import AboutCompany from './components/AboutCompany'
import DumplingsHomePage from './components/DumplingsHomePage'
import ContactPage from './components/ContactPage'
// import Home from './components/Home'
import ComingSoon from "./components/ComingSoon"
import DivineHome from './components/DivineHome';
import MenuPage from './components/MenuPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<DivineHome />} />
        <Route path="/about" element={<AboutCompany />} />
        <Route path="/about-resturant" element={<AboutResturant />} />
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/divine-dumplings" element={<DumplingsHomePage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
