import { useState, useEffect } from 'react'
import './Header.css'
import { PageLink } from "../PageLink/PageLink.jsx"
import { Logo } from "../Logo/Logo.jsx"
import { NavMenu } from '../NavMenu/NavMenu.jsx' 
import { MainButton } from "../MainButton/MainButton.jsx"
import { Input } from "../Input/Input.jsx"

// Header component
export function Header(){
    const [showNav, setShowNav] = useState(false)
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1080)

    const handleClick = () =>{
        setShowNav(!showNav)
        if (!showNav) {
            document.body.classList.add('hide-overflow')
        } else {
            document.body.classList.remove('hide-overflow')
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 1080)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []) 

    return(
        <header>
            <img className='hamburguer-button' 
                onClick={handleClick} 
                width="24" 
                height="24" 
                src="https://img.icons8.com/material-rounded/24/menu--v3.png" alt="menu--v3"/>               
            <Logo/>
            
            {(showNav || isWideScreen) && (
                <div className="nav-menu" 
                    style={{ display: showNav 
                        ? 'block' 
                        : (isWideScreen 
                        ? 'block' 
                        : 'none') 
                    }}>
                    <NavMenu/>
                </div>
            )}

            <MainButton title="Sign Up" 
                        txtColor="white" 
                        bgColor="#0d0c22" 
                        btnBorder="none"/>
        </header>        
    )
}