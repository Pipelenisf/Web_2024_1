import './Header.css'
import { PageLink } from "../PageLink/PageLink.jsx"
import { Logo } from "../Logo/Logo.jsx"
import { Input } from "../Input/Input.jsx"
import { MainButton } from "../MainButton/MainButton.jsx"
 
export function Header(){
    return(
        <header>
            <div>
                <Logo/>
            </div>
            <div>
                <MainButton title="Sign Up" txtColor="white" bgColor="#0d0c22" btnBorder="none"/>
            </div>
        </header>        
    )
}

console.log("It works!")