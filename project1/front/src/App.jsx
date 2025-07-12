import React, { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import  { BrowserRouter,Routes,Route } from "react-router-dom"
import CreatePage from './pages/CreatePage'


function App() {
  const [Color, setColor] = useState("black");
  const [textColor, settextColor] = useState("white");
useEffect(() => {
          settextColor((prev)=>(prev==="white"?"black":"white"))
  
}, [Color]);
  return (
    <div style={
{
  height:"100%",
  width:"100%",
  backgroundColor:Color,
  color:textColor
}
      
    }>


<BrowserRouter>
<Navbar setColor={setColor} Color={Color}/>
<Routes>
<Route path="/" element={<HomePage/> }/>
<Route path="/create" element={<CreatePage/> }/>


</Routes>
</BrowserRouter>


   
  
    </div>
  )
}

export default App
