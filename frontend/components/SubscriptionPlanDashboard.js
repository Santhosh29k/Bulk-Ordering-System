import React, { useState, useEffect } from'react';
import axios from 'axios';
import SubscriptionPlanContainer from '../containers/SubscriptionPlanContainer';

const SubscriptionPlanDashboard = () => {
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/subscription_plans/')
     .then(response => {
        setSubscriptionPlans(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Subscription Plan Dashboard</h1>
      <ul>
        {subscriptionPlans.map(subscriptionPlan => (
          <li key={subscriptionPlan.id}>{subscriptionPlan.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionPlanDashboard;