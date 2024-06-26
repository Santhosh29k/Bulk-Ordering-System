import React, { useState, useEffect } from'react';
import axios from 'axios';
import SubscriptionContainer from '../containers/SubscriptionContainer';

const SubscriptionDashboard = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/subscriptions/')
     .then(response => {
        setSubscriptions(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Subscription Dashboard</h1>
      <ul>
        {subscriptions.map(subscription => (
          <li key={subscription.id}>{subscription.branch.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionDashboard;