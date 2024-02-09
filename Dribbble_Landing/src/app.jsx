import React from "react"

import { Header } from "./components/Header/Header.jsx"
import { Badge } from "./components/Badge/Badge.jsx"

export function App(){
    return(
      <>
      <Header/>
      <Badge bgColor="#ffda79"text="Over 3 million ready-to-work creatives!"/>
      </>
    )
  }