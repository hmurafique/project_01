import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>Users from Backend</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.id}. {u.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
