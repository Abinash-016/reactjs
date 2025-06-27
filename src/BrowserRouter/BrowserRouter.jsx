import { Link, Route, Routes } from "react-router"
import { BrowserRouter } from 'react-router';
import Home from "./Home";
import About from "./About";
import Nav from "./Navbar";


function BroRout(){
    return (
        <div style={{padding:'10px'}}>
            <BrowserRouter >
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
           
            </BrowserRouter>
        </div>
    )
}

export default BroRout;