import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home"
import About from "./about"
import HeadTail from "./heads&tails"


const Projectnavigation=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/headtail" element={<HeadTail/>}/> 

        </Routes>
        </BrowserRouter>
    )
}
export default  Projectnavigation