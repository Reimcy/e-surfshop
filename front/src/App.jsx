import './App.css'
import { HeaderNav } from './components/headerNav.jsx'
import { MainSection } from './components/mainSection.jsx'
import { ProductCatalog } from './pages/ProductCatalog.jsx'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage.jsx'
import {RegisterPage} from './pages/RegisterPage.jsx'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/products' element={<ProductCatalog/>} />
      </Routes>
    </>

  )    
}

export default App

