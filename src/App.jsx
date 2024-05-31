import React from 'react'
import Shop from './Pages/Shop'
import PlantCare from './Pages/PlantCare'
import Blogs from './Pages/Blogs'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'


const App = () => {
  return (
    <div>
    <Navbar />
    <div className="container mx-auto">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/plant-care" element={<PlantCare />} />
            <Route path="/blogs" element={<Blogs />} />
        </Routes>
    </div>
</div>
  )
}

export default App
