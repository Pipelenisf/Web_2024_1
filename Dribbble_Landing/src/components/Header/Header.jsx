import './Header.css'
import { PageLink } from "../PageLink/PageLink.jsx"
import { Logo } from "../Logo/Logo.jsx"
import { NavMenu } from '../NavMenu/NavMenu.jsx' 
import { MainButton } from "../MainButton/MainButton.jsx"
import { Input } from "../Input/Input.jsx"

//Header component
export function Header(){
    return(
        <header>      
                <Logo/>
                <div class="nav-menu">
                    <NavMenu/>
                </div>
                <MainButton title="Sign Up" txtColor="white" bgColor="#0d0c22" btnBorder="none"/>
        </header>        
    )
}

console.log("It works!")