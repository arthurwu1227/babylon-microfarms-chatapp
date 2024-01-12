import { useState, useEffect } from 'react'
import Chatbot from './components/chatbot.jsx'
import SideMenu from './components/SideMenu.jsx';
import './App.css'
import babylonLeafLogo from './assets/babylon_leaf.png';
import menuIcon from './assets/menu.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div id="app-container" className={theme}>
      <img src={menuIcon} className="menu-toggle" onClick={toggleMenu}></img>
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} toggleTheme={toggleTheme} />
      <div className={`content-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className='header'>
          <img src={babylonLeafLogo} alt='Babylon Logo'></img>
          <h2><a style={{color: '#004258'}} href='https://babylonmicrofarms.com' target='_blank'>BABYLON GALLERI SUPPORT</a> </h2>
        </div>

        <h3>Powered by ChatGPT</h3>
        <Chatbot></Chatbot>
      </div>
    </div>
  )
}

export default App
