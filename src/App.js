import React from 'react'
import Header from './component/Header/header';
import ExperienceContainer from './component/ExperienceContainer/ExperienceContainer';
import './App.css';
import TopContainer from './component/TopContainer/TopContainer';
import SkillContainer from './component/SkillContainer/SkillContainer';
import Contact from './component/Contact/Contact';
import ProjectContainer from './component/ProjectContainer/ProjectContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <ExperienceContainer/>
      <Contact/>
      </div>
  );
}

export default App;
