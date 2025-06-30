import { useEffect, useState } from "react";
import "./UserList.css"; 

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const url = "http://localhost:3000/posts";
    try {
      let response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");
      response = await response.json();
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const deleteUser = async (id) => {
    console.log("Deleting user with id:", id);
    const url = `http://localhost:3000/posts/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (response.ok) {
        setData(data.filter((user) => user.id !== id));
      } else {
        console.error("Failed to delete user:", await response.json());
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="user-list-container">
      <h1 className="user-list-title">FETCHED DATA: 👇</h1>
      {data.length > 0 ? (
        <table className="user-list-table">
          <thead>
            <tr className="user-list-header">
              <th className="user-list-th">Name</th>
              <th className="user-list-th">ID</th>
              <th className="user-list-th">Author</th>
              <th className="user-list-th">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id || user.name} className="user-list-row">
                <td className="user-list-td">{user.name || "N/A"}</td>
                <td className="user-list-td">{user.id || "N/A"}</td>
                <td className="user-list-td">{user.auth || "N/A"}</td>
                <td className="user-list-td">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="user-list-delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="user-list-no-data">No data available.</p>
      )}
    </div>
  );
}