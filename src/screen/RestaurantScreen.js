import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import RestaurantCard from '../component/RestaurantCard/RestaurantCard'


const RestaurantScreen = () => {
  return (
    <div>
        <Navbar/>
       
            <RestaurantCard/>
        
        <Footer/>
    </div>
  )
}

export default RestaurantScreen