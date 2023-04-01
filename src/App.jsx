import React, { useState } from 'react'
import { Base } from './components/Base'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Base />
      </BrowserRouter>
      
    </>
  )
}

export default App
