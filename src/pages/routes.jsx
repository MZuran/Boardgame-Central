import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './CardsContainer'
import CardDetailContainer from './CardDetailContainer'
import Cart from './cart'
import Login from './login'

function RoutesPaths() {
  return (
    <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/search/:queryType/:queryParameter" element={<ItemListContainer />} />
      <Route exact path="/card/:cardId" element={<CardDetailContainer />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  )
}

export default RoutesPaths
