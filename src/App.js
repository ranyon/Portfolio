import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Skills from './components/pages/SkillsPage/Skills';
import Projects from './components/pages/ProjectPage/Projects';

function App() {
  return (
    <BrowserRouter>
    <div className="">
      <NavBar/>
      <Home/>
      <Skills/>
      <Projects/>

    </div>
    </BrowserRouter>
  );
}

export default App;
