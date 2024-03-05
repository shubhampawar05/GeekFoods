import Navbar from "../component/Navbar/Navbar"
import Footer from "../component/Footer/Footer"
import Hero from "../component/Hero/Hero"
import GetInTouch from "../component/GetInTouch/GetInTouch"
import Card from "../component/Card/Card"
import Data from "./../Assets/Data/Data.json"

const HomeScreen = ()=>{
    return(
        <>
      <Navbar/>
      <Hero/>
      <GetInTouch/>
      <Card Data={Data} />
      <Footer/>
        </>
    )
}

export default HomeScreen;