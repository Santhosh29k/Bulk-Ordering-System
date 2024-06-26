import React, { useState, useEffect } from'react';
import axios from 'axios';
import IndividualUserContainer from '../containers/IndividualUserContainer';

const IndividualUserDashboard = () => {
  const [individualUsers, setIndividualUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/individual_users/')
     .then(response => {
        setIndividualUsers(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Individual User Dashboard</h1>
      <ul>
        {individualUsers.map(individualUser => (
          <li key={individualUser.id}>{individualUser.user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndividualUserDashboard;