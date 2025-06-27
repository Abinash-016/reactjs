import { Link } from "react-router";
import './header.css'

export default function Projects(){
    return(
        
            <div className="projects">
             <ul style={{textAlign:"center", justifyContent:"center"}}>
                <li>
                    <Link    className="link" to={"./blinkbot"}>BlinkBot</Link>
                </li>
                <li>
                    <Link className="link" to={"./yumrush"}>Yumrush</Link>
                </li>
             </ul>
        </div>
        
    )
}