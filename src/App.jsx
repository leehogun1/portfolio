import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import Detail from './page/detail'
import ScrollBtn from './components/scrollBtn'

function App() {

  return (
    <BrowserRouter>
      <ScrollBtn></ScrollBtn>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
