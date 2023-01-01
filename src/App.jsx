import Navbar from "./components/Navbar";
import './App.scss';
import Footer from "./components/Footer";
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import HomePage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from "./components/Button";

export const App = () => {
  const footerInfo = { name: "Jorge", contact: 593997543298, email: "david92_jc@yahoo.es", user: "@jeici21" };
  return (
    <Router>{/*facilita el enrutamiento de las páginas*/}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />{/*especificando la ruta de cada página*/}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Button>Click me</Button>
      <Button inverted>Click me</Button>
      <Footer {...footerInfo} />
    </Router>
  );
};
//exportando el diseño de la página inicial
