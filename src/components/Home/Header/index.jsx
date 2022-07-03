import React from 'react'
import './styles.css'
import logo from './plant.svg'

const Header = () => (
    <header className='home-header'>
        <h2>Plant based nutrition/Pflanzennahrung</h2>
        <h1>
            <span>“</span> Blog <span>”</span>
        </h1>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
        Live your Lifestyle <br /> The clean way!
        
        </p>
    </header>
);

export default Header