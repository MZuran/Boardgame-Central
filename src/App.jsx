//Imports
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './pages/CardsContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardDetailContainer from './components/Details/CardDetailContainer'
import FirebaseInitializer from './Hooks/firebase/firebaseInitializer'
import Cart from './pages/cart'
import Login from './pages/login'

//Context Providers
import { CartContextProvider } from './context/cartContext'
import { PurchaseCostContextProvider } from './context/costContext'

//Style
import 'bootstrap/dist/css/bootstrap.css'
import '../css/app.css'

function App() {
  return (
    <>
      <FirebaseInitializer />
      <BrowserRouter>
        <CartContextProvider>
          <PurchaseCostContextProvider>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route exact path="/search/:queryType/:queryParameter" element={<ItemListContainer />} />
              <Route exact path="/card/:cardId" element={<CardDetailContainer />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </PurchaseCostContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
