import { useState } from "react"

export default function AddUsers() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [auth, setAuth] = useState('');

    const createUser = async () => {
        console.log(name, id, auth);
        const url = "http://localhost:3000/posts"
        let response = await fetch(url,{
            method:'Post',body:JSON.stringify({name, id, auth})
        });
        response = await response.json();

    }
    return (
        <div>
            <h4>Add new user:👉</h4>
            <input type="text "
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name " />
            <input type="text "
                onChange={(event) => setId(event.target.value)}
                placeholder="Enter your Id " />
            <input type="text "
                onChange={(event) => setAuth(event.target.value)}
                placeholder="Author name: " />
            <br /><br />

            <button style={{
                color: "black", width: "100px", height: "30px",
                alignItems: "center", backgroundColor: "skyblue", borderRadius: "5px"
            }}
                onClick={createUser}
            >Add Users
            </button>
        </div>
    )
}