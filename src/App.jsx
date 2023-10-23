//Imports
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter } from 'react-router-dom'
import FirebaseInitializer from './Hooks/firebase/firebaseInitializer'
import { ContextProviders } from './context/contextProviders'
import RoutesPaths from './pages/routes'

//Style
import 'bootstrap/dist/css/bootstrap.css'
import '../css/app.css'


function App() {
  return (
    <>
      <FirebaseInitializer />
      <BrowserRouter>
        <ContextProviders>
          <NavBar />
          <RoutesPaths />
        </ContextProviders>
      </BrowserRouter>
    </>
  )
}

export default App
