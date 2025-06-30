import { NavLink, Route, Routes } from "react-router"
import { BrowserRouter } from 'react-router';
import Home from "./Home";
import About from "./About";
import Nav from "./Navbar";
import PNF from "../PageNotFound";
import Projects from "./Projects";
import UserList from "../Adduser/UserDetails";
import AddUsers from "../Adduser/addUser";


function BroRout(){
    return (
        
        <div style={{padding:'10px'}}>
           
            
            <Routes>

            <Route element={<Nav/>}>
            
               
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>}/>
                 
            </Route>

                <Route>
                    <Route path="/lists" element={<UserList/>}/>
                    <Route path="/addUsers" element={<AddUsers/>}/>
                </Route>

                <Route>
               <Route path="/projects" element={<Projects/>}/>
               
                <Route path="/*" element={<PNF/>}/>
                </Route>
            </Routes>
           
            

          
        </div>
    )
}

export default BroRout;