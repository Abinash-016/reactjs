import { useContext } from "react";
import { ContextAPI } from "./ContextAPI";

function Subject(){

    const sub=useContext(ContextAPI);
    return (
        <div style={{backgroundColor:'skyblue', padding:'10px'}}>
            <h1>Subject Component: {sub}</h1>
        </div>
    )
}

export default Subject;