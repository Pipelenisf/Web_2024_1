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
      <Body/>
      <CategoryCard text='Typefaces'/>
      <Footer/>
      </>
    )
  }