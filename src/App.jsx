import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Home />
      <About />
    </BrowserRouter>
  );
}

export default App
