import logo from './logo.svg';
// import './App.css';
import { NavBar } from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Skills from './components/pages/SkillsPage/Skills';
import Projects from './components/pages/ProjectPage/Projects'
import { useRef ,useEffect} from 'react';

function App(props) {
    

     const skills=[
      {skillLogo:'HTML',skillName:'html'},
      {skillLogo:'CSS',skillName:'css'},
      {skillLogo:'JAVASCRIPT',skillName:'js'},
      {skillLogo:'REACT',skillName:'react'},
      {skillLogo:'REACT-NATIVE',skillName:'react-native'}
     ]





  return (
    <div className="">
      <NavBar />
      <Home  />
      {skills.map((skill)=>(
        <Skills skillLogo={skill.skillLogo} skillName={skill.skillName}/>
      ))}
      <Projects  />
      
      
    </div>
  );
}

export default App;
