import React, { useState, useEffect } from'react';
import axios from 'axios';
import CorporateUserContainer from '../containers/CorporateUserContainer';

const CorporateUserDashboard = () => {
  const [corporateUsers, setCorporateUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/corporate_users/')
     .then(response => {
        setCorporateUsers(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Corporate User Dashboard</h1>
      <ul>
        {corporateUsers.map(corporateUser => (
          <li key={corporateUser.id}>{corporateUser.user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default CorporateUserDashboard;