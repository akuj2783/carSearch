import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import { SearchProvider } from './context/searchContext'
import Intro from './components/intro'
// import './App.css'

function App() {
  
  return (
    <>
    <SearchProvider>
      <Routes>
        <Route exact path='/' element={<Intro/>}/>
        <Route path='/page/:pageNumber' element={<Home/>}/>
    </Routes>
    </SearchProvider>
    </>
  )
}

export default App
