import { NavLink } from "react-router";
import './header.css'

export default function Projects() {
    return (

        <div className="projects">

            <h1 style={{ textAlign: "center" }}>PROJECTS👇</h1>
            <ul style={{ justifyContent: "center" }}>
                <li>
                    <NavLink className="NavLink" to={"./blinkbot"}>BlinkBot</NavLink>
                </li>
                <li>
                    <NavLink className="NavLink" to={"./yumrush"}>Yumrush</NavLink>
                </li>
            </ul>
        </div>

    )
}