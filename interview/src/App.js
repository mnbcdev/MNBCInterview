import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  //update the state with the fetched data
  
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Users</h1>
      <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'center' }}>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '10px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
