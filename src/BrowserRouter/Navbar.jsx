import { Link,Outlet } from "react-router";
import './header.css'

export default function Nav(){
    return <div>
        <div className="header">
        <div>
            <Link className="link" ><h2>LOGO</h2></Link>
        </div>
        <div>
             <ul>
                <li>
                    <Link className="link" to={"./"}>Home</Link>
                </li>
                <li>
                    <Link className="link" to={"./about"}>About</Link>
                </li>
                <li>
                    <Link className="link" to={"./projects"}>Projects</Link>
                </li>
             </ul>
        </div>
</div>    <Outlet/>
    </div>
}