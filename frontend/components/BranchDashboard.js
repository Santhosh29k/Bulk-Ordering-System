import React, { useState, useEffect } from'react';
import axios from 'axios';
import BranchContainer from '../containers/BranchContainer';

const BranchDashboard = () => {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/branches/')
     .then(response => {
        setBranches(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Branch Dashboard</h1>
      <ul>
        {branches.map(branch => (
          <li key={branch.id}>{branch.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BranchDashboard;