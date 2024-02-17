import React from "react"

import { Header } from "./components/Header/Header.jsx"
import { Badge } from "./components/Badge/Badge.jsx"
import { MainTitle } from "./components/LargeTitle/MainTitle.jsx"
import { BodyContainer } from "./components/BodyContainer/BodyContainer.jsx"
import { MainButton } from "./components/MainButton/MainButton.jsx"
import { Tag } from "./components/Tag/Tag.jsx"
import { UserCard } from "./components/UserCard/UserCard.jsx"
import { ProductCard } from "./components/ProductCard/ProductCard.jsx"

export function App(){
    return(
      <>
      {// ToDo: ¡URGENT! Fixed svg size
      }
      <Header/>
      <Badge bgColor="#ffda79"text="Over 3 million ready-to-work creatives!"/>
      <MainTitle text='The world’s destination for design'/>
      <BodyContainer text='Get inspired by the work of millions of top-rated designers & agencies around the world.'/>
      <MainButton title='Get Started' bgColor='#0d0c22' txtColor='white'/>
      <UserCard bgimage='https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg'/>
      <ProductCard bgProductImg='https://cdn.dribbble.com/userupload/13006921/file/original-562923298283ee2a026cb7fc94ab0396.png?resize=1200x900'/>
      </>
    )
  }