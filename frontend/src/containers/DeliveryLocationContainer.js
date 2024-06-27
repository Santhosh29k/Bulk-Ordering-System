import React, { useState, useEffect } from'react';
import { connect } from'react-redux';
import { fetchDeliveryLocations } from '../actions/deliveryLocationActions';
import DeliveryLocationDashboard from '../components/DeliveryLocationDashboard';

const DeliveryLocationContainer = ({ deliveryLocations, fetchDeliveryLocations }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDeliveryLocations().then(() => {
      setLoading(false);
    });
  }, [fetchDeliveryLocations]);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        <DeliveryLocationDashboard deliveryLocations={deliveryLocations} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { deliveryLocations: state.deliveryLocations };
};

export default connect(mapStateToProps, { fetchDeliveryLocations })(DeliveryLocationContainer);