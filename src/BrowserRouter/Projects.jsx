import { NavLink } from "react-router";
import './header.css'

export default function Projects() {
    return (

        <div className="projects">

            <h1 style={{ textAlign: "center" }}>PROJECTS👇</h1>
            <ul style={{ justifyContent: "center" }}>
                <button style={{backgroundColor:"skyblue" , margin:"50px", borderRadius:"5px"}}>
                    <NavLink className=" NavLink w-32 bg-sky-500 text-white p-2 rounded hover:bg-sky-600 transition duration-200" to={"./blinkbot"}>BlinkBot</NavLink>
                </button>
                <button style={{backgroundColor:"skyblue" , margin:"50px", borderRadius:"5px"}}>
                    <NavLink className=" NavLink w-32 bg-sky-500 text-white p-2 rounded hover:bg-sky-600 transition duration-200" to={"./yumrush"}>Yumrush</NavLink>
                </button>
            </ul>
        </div>

    )
}