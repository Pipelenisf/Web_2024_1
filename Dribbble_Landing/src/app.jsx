import React from "react"

import { Header } from "./components/Header/Header.jsx"
import { Badge } from "./components/Badge/Badge.jsx"
import { MainTitle } from "./components/LargeTitle/MainTitle.jsx"
import { BodyContainer } from "./components/BodyContainer/BodyContainer.jsx"
import { MainButton } from "./components/MainButton/MainButton.jsx"

export function App(){
    return(
      <>
      <Header/>
      <Badge bgColor="#ffda79"text="Over 3 million ready-to-work creatives!"/>
      <MainTitle text='The world’s destination for design'/>
      <BodyContainer text='Get inspired by the work of millions of top-rated designers & agencies around the world.'/>
      <MainButton title='Get Started' bgColor='#0d0c22' color='white'/>
      </>
    )
  }