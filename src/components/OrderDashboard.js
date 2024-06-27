import React, { useState, useEffect } from'react';
import axios from 'axios';
//import OrderContainer from '../containers/OrderContainer';

const OrderDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/orders/')
     .then(response => {
        setOrders(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Order Dashboard</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.corporate_user.user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDashboard;