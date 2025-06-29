import { useEffect, useState } from "react";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const url = "http://localhost:3000/posts";
    let response = await fetch(url);
    response = await response.json();
    setData(response);
  }

  return (
    <div>
      <h1>FETCHED DATA: 👇</h1>
      {data.map((user, index) => (
       
          
        
        <ul key={user.id || index} className="user-list">
           <li>{user.name}</li>
           <li>{user.id}</li>
           <li>{user.author}</li>
        </ul>
      ))}
    </div>
  );
}