import React, { useState, useEffect } from'react';
import axios from 'axios';
//import MentorContainer from '../containers/MentorContainer';

const MentorDashboard = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/mentors/')
     .then(response => {
        setMentors(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Mentor Dashboard</h1>
      <ul>
        {mentors.map(mentor => (
          <li key={mentor.id}>{mentor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MentorDashboard;