import './Footer.css'
import { Logo } from '../Logo/Logo.jsx'
import { PageLink } from '../PageLink/PageLink'

export function Footer(){

    return(
        <div className='footer-section'>
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
                {// ToDo: Replace icon for svg 
                // ? How to add local svg file
                }
                <div className='social-media-container'>
                    <div className='icon'></div>
                    <div className='icon'></div>
                    <div className='icon'></div>
                    <div className='icon'></div>
                </div>
            </div>
        </div>
    )
}