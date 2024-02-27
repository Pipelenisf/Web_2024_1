import './style.css'
import React from 'react'
import {createRoot} from 'react-dom/client'
import { App } from '../src/app.jsx'

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)

root.render(<App/>)
