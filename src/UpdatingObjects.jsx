import { useState } from "react";

function Ob(){
    const [data,setData]=useState({
        name:'Abinash'
    })

    const handleName=(val)=>{
        data.name=val;
        setData({...data})  //it will create another object amd the assigns value to it
            }
    return (
        <div>
            <h1>Updating objects in state</h1>
            <input type="text" placeholder="Update name:" 
            onChange={(event)=>handleName(event.target.value)}/>
            <h2>Name: {data.name}</h2>
        </div>
    )
}

export default Ob;