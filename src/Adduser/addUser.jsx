import { useState } from "react";

export default function AddUsers() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [auth, setAuth] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const createUser = async () => {
    if (!name.trim() || !id.trim() || !auth.trim()) {
      setShowErrorAlert(true);
      setTimeout(() => setShowErrorAlert(false), 3000); 
      return;
    }

    console.log(name, id, auth);
    const url = "http://localhost:3000/posts";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, id, auth }),
      });
      if (response.ok) {
        setShowSuccessAlert(true);
        setName("");
        setId("");
        setAuth(""); 
        setTimeout(() => setShowSuccessAlert(false), 3000); 
      } else {
        console.error("Failed to create user:", await response.json());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h4 className="text-xl font-semibold mb-4">Add new user: 👉</h4>
      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={id}
          onChange={(event) => setId(event.target.value)}
          placeholder="Enter your Id"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={auth}
          onChange={(event) => setAuth(event.target.value)}
          placeholder="Author name"
          className="w-full p-2 border rounded"
        />
        <br />
        <button
            style={{marginLeft:"120px", marginTop:"15px"}}
          onClick={createUser}
          className="w-32 bg-sky-500 text-white p-2 rounded hover:bg-sky-600 transition duration-200"
        >
          Add Users
        </button>
      </div>

      {showSuccessAlert && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-md animate-fade-in-out">
          <p className="font-semibold">Success!</p>
          <p>User added successfully.</p>
        </div>
      )}

      {showErrorAlert && (
        <div className="fixed top-4 right-4 bg-red-500 text-white p-3 rounded-lg shadow-md animate-fade-in-out">
          <p className="font-semibold">Error!</p>
          <p>Please fill all fields.</p>
        </div>
      )}
    </div>
  );
}