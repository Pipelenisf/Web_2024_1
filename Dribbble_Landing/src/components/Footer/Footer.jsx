import './Footer.css'
import { Logo } from '../Logo/Logo.jsx'
import { PageLink } from '../PageLink/PageLink'

export function Footer(){
    return(
        <div className='footer-links-section'>
            <Logo className='logo'/>
            <div className='links-container'>
                <PageLink title='For designers'/>
                <PageLink title='Hire talent'/>
                <PageLink title='Inspiration'/>
                <PageLink title='Advertising'/>
                <PageLink title='Blog'/>
                <PageLink title='About'/>
                <PageLink title='Careers'/>
                <PageLink title='Support'/>
            </div>
        </div>
    )
}