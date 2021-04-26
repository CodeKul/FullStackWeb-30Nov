import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
