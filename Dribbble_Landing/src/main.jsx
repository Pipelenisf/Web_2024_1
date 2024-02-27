import './style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Body } from './components/Body/Body'
import { App } from './app'

const appContainer = document.querySelector('#app')
const root = createRoot(appContainer)



root.render(<App/>)