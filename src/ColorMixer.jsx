import { useState } from "react"

export default function Color() {
const [r,setR]= useState(0);
const [g,setG]= useState(0);
const [b,setB]= useState(0);


    return (
        <div style={{marginLeft:"20px"}}>
            
            <h1 style={{ display: "flex", justifyContent: "center" }}>Color Mixer</h1>
            <br /><br />
            <div style={{backgroundColor:'rgb('+r+','+g+','+b+')' , height:200, width:200}}>
                
            </div>
            <label htmlFor="">Red</label>
            <input type="range" value={r} onChange={(event)=>setR(event.target.value)}
            min={0} max={255} 
            />
            <br /><br />
            <label htmlFor="">Green</label>
            <input type="range" value={g} onChange={(event)=>setG(event.target.value)}
            min={0} max={255} />
            <br /><br />
            <label htmlFor="">Blue</label>
            <input type="range" value={b} onChange={(event)=>setB(event.target.value)}
            min={0} max={255} />
        </div>
    )
}