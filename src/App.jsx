import Nav from '../src/komponentai/Nav.jsx';
import Home from '../src/komponentai/Home/Home.jsx';
import About from '../src/komponentai/About/About.jsx';
import Skills from '../src/komponentai/Skills/Skills.jsx';
import Footer from '../src/komponentai/Footer/footer.jsx';
import {useState} from 'react';
import "./theme.css"
import '../src/App.css';

function App() {
  const[theme,setTheme]=useState('pink');

  return (
    <>
      <div className={theme}>
        <div className='bendrasbg'>
          <Nav ></Nav>
          <Home></Home>
        </div>
        <About ></About>
        <Skills theme={theme}></Skills>
        <Footer ></Footer>
        <button className='theme-button' onClick={() =>
          setTheme(theme === 'pink' ? 'blue' : 'pink')
        }>
          <img className='heart' src={`/Nuotraukos/heart-${theme}.png`}  />
        </button>
      </div>
      
    </>
  )
}

export default App;
