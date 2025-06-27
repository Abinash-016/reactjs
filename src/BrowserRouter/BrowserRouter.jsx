import { Link, Route, Routes } from "react-router"
import { BrowserRouter } from 'react-router';
import Home from "./Home";
import About from "./About";
import Nav from "./Navbar";
import PNF from "../PageNotFound";
import Projects from "./Projects";


function BroRout(){
    return (
        <div style={{padding:'10px'}}>
            <BrowserRouter >
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/*" element={<PNF/>}/>
            </Routes>
           
            </BrowserRouter>
        </div>
    )
}

export default BroRout;