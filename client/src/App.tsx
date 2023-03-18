
import React from "react";

import './App.css';

// TypeScript declarations
type User = {
  id: number,
  name: string,
  email: string,
  password: string
}

const App = () => {
  const [users, setUsers] = React.useState<User[]>([])

  React.useEffect(() => {
    fetch('http://localhost:8000/users', {
      method: 'GET',
      headers: { 'Content-type': 'application/json' }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
  }, [])

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}> {user.name} </li>
      ))}
    </ul>
  );
}

export default App;
