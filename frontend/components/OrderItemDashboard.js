import React, { useState, useEffect } from'react';
import axios from 'axios';
import OrderItemContainer from '../containers/OrderItemContainer';

const OrderItemDashboard = () => {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/order_items/')
     .then(response => {
        setOrderItems(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Order Item Dashboard</h1>
      <ul>
        {orderItems.map(orderItem => (
          <li key={orderItem.id}>{orderItem.order.corporate_user.user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderItemDashboard;