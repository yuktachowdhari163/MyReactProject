import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Product from './pages/Product'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductDetails from './pages/ProductDetails'
import Cart from './components/Cart'

 function App() {
  const [search, setSearch] = useState("")

  return (
    <div>
      <BrowserRouter>
      <Navbar search={search} setSearch={setSearch}></Navbar>
      <Routes>
        <Route path='/' element={<Product search={search}/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      
      {/* <Product></Product> */}
      


    </div>
  )
}

export default App
