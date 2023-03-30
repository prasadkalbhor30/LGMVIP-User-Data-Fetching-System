import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setTimeout(() => {
        setUsers(data.data);
        setIsLoading(false);
      }, 3000);
    }
    catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          User Data Fetching System
        </div>
        <button className="btn" onClick={getUsers}>
          Get Users
        </button>
      </nav>
      {isLoading ? (
        <div className="loader">
          <div className="temo">
            <div className="loading-spinner"></div>
            <h2>Loading...</h2>

          </div>

        </div>

      ) :
        (
          <div className="user-card-grid">
            {users.map((user) => (
              <div className="user-card" key={user.id}>
                <img className="user-avatar" src={user.avatar} alt="Avatar" />
                <div className="user-name">{user.first_name} {user.last_name}</div>
                <div className="user-email">{user.email}</div>
              </div>
            ))}
          </div>

        )}
    </div>
  );
}

export default App;
