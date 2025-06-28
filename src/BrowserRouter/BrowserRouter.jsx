import { NavLink, Route, Routes } from "react-router"
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
            <Routes>

            <Route element={<Nav/>}>
               
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                 
            </Route>



                <Route>
               <Route path="/projects" element={<Projects/>}/>
                <Route path="/*" element={<PNF/>}/>
                </Route>
            </Routes>
           
            </BrowserRouter>
        </div>
    )
}

export default BroRout;