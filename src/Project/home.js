import React from "react"
import { Link } from "react-router-dom"


const Home=()=>{
   const stylingpart={
    textAlign:"center",
    display:"block",
   }
   const bodystyle={
    backgroundColor:"pink",
   }
   
    return(
        <div style={bodystyle}>
        <h1 style={{textAlign:"center"}}>PLAY HERE </h1>
        <Link to="/about" style={stylingpart}>ABOUT THE GAME</Link><br></br>
        <Link to="/headtail" style={stylingpart} >PLAY HERE </Link>
        </div>
    )
}
export default Home