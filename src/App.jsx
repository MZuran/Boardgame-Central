import { useState } from 'react'

//Imports
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

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
