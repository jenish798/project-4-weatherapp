import { useState } from 'react'
import viteLogo from '/vite.svg'
import Home from './page'
import './App.css'
import string from './utils'

function App() {
  const {heading} =string

  return (
    <>
      <h1>{heading}</h1>
      <Home/>
    </>
  )
}

export default App
