import { Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Learn from './Pages/Learn'
import Quiz from './Pages/Quiz'

function App() {


  return ( 
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/learn' element={<Learn/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
    </Routes>
    
 
    </>
  )
}

export default App
