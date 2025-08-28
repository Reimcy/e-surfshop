import { ProductCatalog } from './pages/ProductCatalog.jsx'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage.jsx'
import {RegisterPage} from './pages/RegisterPage.jsx'
import { UserAuthComponent } from './pages/LoginPage.jsx'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<UserAuthComponent/>} />
        <Route path='/products/:postId' element={<ProductCatalog />} />
      </Routes>
    </>

  )    
}

export default App

