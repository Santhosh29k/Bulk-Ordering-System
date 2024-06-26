import React, { useState, useEffect } from'react';
import { connect } from'react-redux';
import { fetchOrders } from '../actions/orderActions';
import OrderDashboard from '../components/OrderDashboard';

const OrderContainer = ({ orders, fetchOrders }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders().then(() => {
      setLoading(false);
    });
  }, [fetchOrders]);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        <OrderDashboard orders={orders} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { orders: state.orders };
};

export default connect(mapStateToProps, { fetchOrders })(OrderContainer);