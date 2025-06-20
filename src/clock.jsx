import { useEffect, useState } from "react"

function Clock ({color}){
    const [time, setTime]= useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, [])
    return (
        <div>
            <h1 
            style={{color:color, border:"5px solid blue", borderRadius:"10px", padding:"15px"}}>
                {time}</h1>
        </div>
    )
}

export default Clock;