import './App.css'
import { HeaderNav } from './components/headerNav.jsx'
import { MainSection } from './components/mainSection.jsx'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage.jsx'
import {RegisterPage} from './pages/RegisterPage.jsx'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/register' element={<RegisterPage/>} />
      </Routes>
    </>

  )    
}

export default App
