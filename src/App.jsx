import { useState } from 'react'

//Imports
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/CardsContainer';

//Style
import 'bootstrap/dist/css/bootstrap.css'
import '../css/app.css'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting={"Welcome to my store!"}></ItemListContainer>
    </>
  )
}

export default App
