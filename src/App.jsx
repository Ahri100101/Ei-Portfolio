import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Designs from './components/Designs';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Designs />
      <Certificates />
      <Contact />
    </BrowserRouter>
  );
}

export default App
