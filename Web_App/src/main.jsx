import './style.css'
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'

const appContainer = document.querySelector("#app")
const root = createRoot(appContainer)

root.render(<App/>) //Render component as a tag
console.log("Hola mundo")