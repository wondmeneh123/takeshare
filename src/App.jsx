import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './component/Auth'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App