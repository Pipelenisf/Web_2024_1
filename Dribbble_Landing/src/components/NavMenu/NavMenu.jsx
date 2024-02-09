import { PageLink } from "../PageLink/PageLink.jsx"
import './NavMenu.css'

export function NavMenu(){
    return(
        <nav>
            <ul>
                <li><PageLink title="Find talent"/></li>
                <li><PageLink title="Inspiration"/></li>
                <li><PageLink title="Learn design"/></li>
                    <div className="sub-nav">
                        <ul className="sub-nav-links">
                            <li><PageLink title="UX Diploma"/></li>
                            <li><PageLink title="Live Interactive Workshops"/></li>
                        </ul>
                    </div>
                <li><PageLink title="Jobs"/></li>
                <li><PageLink title="Go Pro"/></li>
                <li className="log-link"><PageLink title="Log in"/></li>
            </ul>
        </nav>)
}