import React from "react"

import { Header } from "./components/Header/Header.jsx"
import { Badge } from "./components/Badge/Badge.jsx"
import { MainTitle } from "./components/LargeTitle/MainTitle.jsx"
import { BodyContainer } from "./components/BodyContainer/BodyContainer.jsx"
import { MainButton } from "./components/MainButton/MainButton.jsx"
import { Tag } from "./components/Tag/Tag.jsx"
import { UserCard } from "./components/UserCard/UserCard.jsx"
import { CategoryCard } from "./components/CategoryCard/CategoryCard.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import { Body } from "./components/Body/Body.jsx"

export function App(){
    return(
      <>
      <Header/>
      <Badge bgColor="#ffda79"text="Over 3 million ready-to-work creatives!"/>
      <MainTitle text='The world’s destination for design'/>
      <BodyContainer text='Get inspired by the work of millions of top-rated designers & agencies around the world.'/>
      <MainButton title='Get Started' bgColor='#0d0c22' txtColor='white'/>
      <UserCard bgimage='https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg'/>
      <Body/>
      <CategoryCard text='Typefaces'/>
      <Footer/>
      </>
    )
  }