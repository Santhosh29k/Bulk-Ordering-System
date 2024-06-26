import React, { useState, useEffect } from'react';
import { connect } from'react-redux';
import { fetchSubscriptionPlans } from '../actions/subscriptionPlanActions';
import SubscriptionPlanDashboard from '../components/SubscriptionPlanDashboard';

const SubscriptionPlanContainer = ({ subscriptionPlans, fetchSubscriptionPlans }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscriptionPlans().then(() => {
      setLoading(false);
    });
  }, [fetchSubscriptionPlans]);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        <SubscriptionPlanDashboard subscriptionPlans={subscriptionPlans} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { subscriptionPlans: state.subscriptionPlans };
};

export default connect(mapStateToProps, { fetchSubscriptionPlans })(SubscriptionPlanContainer);