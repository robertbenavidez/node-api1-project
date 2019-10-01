import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';







function App() {

  const [users, setUsers] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/api/users")
      .then(res => {
        console.log("res: ", res);
        setUsers(res.data);
      })

      .catch(err => console.log(err));
  };
  
  useEffect(() => {
  fetchData()
  }, []);


console.log(users)
  return (
    <div className="App">
      <ul>
         {users.map(user => (
            <li key={user.objectID}>
              <a>{user.name}</a>
              <a>{user.bio}</a>

            </li>
         ))}
      </ul>
    </div>
  );
}

export default App;
