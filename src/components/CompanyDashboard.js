import React, { useState, useEffect } from'react';
import axios from 'axios';
//import CompanyContainer from '../containers/CompanyContainer';

const CompanyDashboard = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/companies/')
     .then(response => {
        setCompanies(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Company Dashboard</h1>
      <ul>
        {companies.map(company => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyDashboard;