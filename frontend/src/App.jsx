import { Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'

function App() {


  return ( 
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    
 
    </>
  )
}

export default App
