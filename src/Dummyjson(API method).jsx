import { useEffect, useState } from "react";

export default function Dummy(){

    const [data,setData]= useState(null);

    useEffect(()=>{
        getUserData();
    },[])

    async function getUserData(){
        const url="https://dummyjson.com/user";
        let response=await fetch(url);
        response =await response.json()
        setData(response);
    }

    return (
        <div>
        <h1>FETCHED DATA:👇</h1>
        <div>{
            data?(
                <pre>{JSON.stringify(data,null,2)}</pre>
            ) : (
                <img src="https://imgs.search.brave.com/yT8r4S-UYGsvkoNmL2C2QQWGmRrHrvI6omvA_hSpEZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2IxL0xvYWRpbmdf/aWNvbi5naWY.gif" alt="" />
            )
        }
        </div>
        </div>
    );
}