import { useState } from "react";
import { ContextAPI } from "./ContextAPI";
import Subject from "./Subject";


function Stud() {
    const [subject,setSubject]=useState('English');
    return (
        <div style={{ backgroundColor: 'red', padding: '10px' }}>
            <ContextAPI.Provider value={subject} >
                <select onChange={(event)=>setSubject(event.target.value)}>
                    <option >Select a subject</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                    <option value="Chemistry">Chemistry</option>
                </select>
                <h1>Student Component</h1>
                <Subject />
            </ContextAPI.Provider>

        </div>
    )
}

export default Stud;