import React, { useState, useEffect } from'react';
import axios from 'axios';
import DeliveryLocationContainer from '../containers/DeliveryLocationContainer';

const DeliveryLocationDashboard = () => {
  const [deliveryLocations, setDeliveryLocations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/delivery_locations/')
     .then(response => {
        setDeliveryLocations(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Delivery Location Dashboard</h1>
      <ul>
        {deliveryLocations.map(deliveryLocation => (
          <li key={deliveryLocation.id}>{deliveryLocation.address}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryLocationDashboard;