import { NavLink,Outlet } from "react-router";
import './header.css'

export default function Nav(){
    return <div>
        <div className="header">
        <div>
            <NavLink className="NavLink" ><h2>LOGO</h2></NavLink>
        </div>
        <div>
             <ul>
                <li>
                    <NavLink className="NavLink" to={"./"}>Home</NavLink>
                </li>
                <li>
                    <NavLink className="NavLink" to={"./about"}>About</NavLink>
                </li>
                <li>
                    <NavLink className="NavLink" to={"./projects"}>Projects</NavLink>
                </li>
             </ul>
             
        </div>
</div>    <Outlet/>
    </div>
}