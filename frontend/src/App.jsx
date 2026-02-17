import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use an environment variable for the API URL (important for OpenShift)
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

  useEffect(() => {
    axios.get(`${API_URL}/api/students`)
      .then(res => {
        setStudents(res.data);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching students:", err));
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>School Management Portal [POC]</h1>
      <hr />
      <h2>Student Directory</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {students.map(student => (
            <li key={student.id}>
              <strong>{student.full_name}</strong> - {student.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;