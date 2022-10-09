
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
  <>
  <Navbar/>
     <Header/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/contact-us" element ={<Contact/>}/>
      <Route path="*" element ={<Notfound/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
