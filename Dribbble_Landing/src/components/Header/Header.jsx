import React from "react"
import { PageLink } from "../PageLink/PageLink.jsx"
import { Input } from "../Input/Input.jsx"
import { MainButton } from "../MainButton/MainButton.jsx"

export function Header(){
    return(
        <header>
            <div>
               <PageLink title="Find talent"/>
               <PageLink title="Inspiration"/>
               <PageLink title="Learn design"/>
               <PageLink title="Jobs"/>
               <PageLink title="Go Pro"/>
            </div>
            <div>
                <Input title="Search"/>
                <PageLink title="Log in"/>
                <MainButton title="Sign Up" txtColor="white" bgColor="#0d0c22"/>
            </div>
        </header>
    )
}