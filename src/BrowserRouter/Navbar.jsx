import { Link } from "react-router";
import './header.css'

export default function Nav(){
    return <div className="header">
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
             </ul>
        </div>
</div>    
}