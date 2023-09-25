import { useState } from 'react'

//Imports
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/CardsContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardDetailContainer from './components/Details/CardDetailContainer'

//Style
import 'bootstrap/dist/css/bootstrap.css'
import '../css/app.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          {/* <Route exact path='/' element={}/> */}
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/card/:cardName' element={<CardDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
