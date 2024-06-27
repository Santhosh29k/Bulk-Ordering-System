import React, { useState, useEffect } from'react';
import { connect } from'react-redux';
import { fetchOrderItems } from '../actions/orderItemActions';
import OrderItemDashboard from '../components/OrderItemDashboard';

const OrderItemContainer = ({ orderItems, fetchOrderItems }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderItems().then(() => {
      setLoading(false);
    });
  }, [fetchOrderItems]);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        <OrderItemDashboard orderItems={orderItems} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { orderItems: state.orderItems };
};

export default connect(mapStateToProps, { fetchOrderItems })(OrderItemContainer);