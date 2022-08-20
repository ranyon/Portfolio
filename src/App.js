import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Skills from './components/pages/SkillsPage/Skills';
import Projects from './components/pages/ProjectPage/Projects'
import { useRef ,useEffect} from 'react';

function App() {
     const projects = useRef(null)

     useEffect(()=>{
      console.log(projects.current,App.js)
     }, [])
  return (
    <div className="">
      <NavBar forwardedRef={projects}/>
      <Home  />
      <Skills />
      <Projects forwardedRef={projects} />
      
      
    </div>
  );
}

export default App;
