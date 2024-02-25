import { useState } from 'react'
import './Header.css'
import { PageLink } from "../PageLink/PageLink.jsx"
import { Logo } from "../Logo/Logo.jsx"
import { NavMenu } from '../NavMenu/NavMenu.jsx' 
import { MainButton } from "../MainButton/MainButton.jsx"
import { Input } from "../Input/Input.jsx"

//Header component
export function Header(){
    const [showNav, setShowNav] = useState(false)
    console.log('nav value:', showNav)

    const handleClick = (event) =>{
        setShowNav(!showNav)
    }

    return(

        <header>
            
            {// ToDo: Overflow hidden doesn't work
            }
                <img onClick={handleClick} width="24" height="24" src="https://img.icons8.com/material-rounded/24/menu--v3.png" alt="menu--v3"/>               
                <Logo/>
                {
                    showNav
                    ? (<div className="nav-menu" style={{display:'block'}}>
                            <NavMenu/>
                        </div>)
                    : null
                }
                <MainButton title="Sign Up" txtColor="white" bgColor="#0d0c22" btnBorder="none"/>
        </header>        
    )
}