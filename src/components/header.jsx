import '../styles/header.css'
import Button from './button.jsx'
import LogoM from '../assets/icons/logoM.svg?react'
import MenuSymbols from '../assets/icons/material-symbols_menu.svg?react'
import { useState } from 'react'

function Header({ sections }) {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    return (
        <>
            <header>
                <div className='header-inner'>
                    <nav className='Taskbar'>
                        <div className='nav-top'>
                            <div className='logo'>
                                <LogoM width={40} height={40} />
                                <h5>포트폴리오</h5></div>
                            <button className='menu-btn' onClick={toggleMenu}>
                                <MenuSymbols width={36} height={36} className="menu-img" />
                            </button>
                        </div>

                        <ul className={`menu ${isOpen ? 'open' : ''}`}>
                            <li><a href='#' className='nav-items' onClick={() => sections.section1Ref.current.scrollIntoView({ behavior: "smooth" })}><h5>Home</h5></a></li>
                            <li><a href='#' className='nav-items' onClick={() => sections.section2Ref.current.scrollIntoView({ behavior: "smooth" })}><h5>Skills</h5></a></li>
                            <li><a href='#' className='nav-items' onClick={() => sections.section3Ref.current.scrollIntoView({ behavior: "smooth" })}><h5>Project</h5></a></li>
                            <li><a href='#' className='nav-items' onClick={() => sections.section4Ref.current.scrollIntoView({ behavior: "smooth" })}><h5>About Me</h5></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header