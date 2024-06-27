import React, { useState, useEffect } from'react';
import { connect } from'react-redux';
import { fetchSubscriptions } from '../actions/subscriptionActions';
import SubscriptionDashboard from '../components/SubscriptionDashboard';

const SubscriptionContainer = ({ subscriptions, fetchSubscriptions }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscriptions().then(() => {
      setLoading(false);
    });
  }, [fetchSubscriptions]);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        <SubscriptionDashboard subscriptions={subscriptions} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { subscriptions: state.subscriptions };
};

export default connect(mapStateToProps, { fetchSubscriptions })(SubscriptionContainer);