import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Shop from './Page/Shop';
import Product from "./page/Product"
import Cart from "./page/Cart.jsx"
import LoginSignup from "./page/LoginSignup.jsx"

import ShopCategory from './Page/ShopCategory';
function App() {
  return (
    <div>
      <BrowserRouter>
      

      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>

        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory  category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory  category="kids"/>}/>
        {/* <Route path='/product' element={<Product/>}>
        <Route path='/:productid' element={<Product/>}/>
        </Route> */}
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
