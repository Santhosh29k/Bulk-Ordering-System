import React, { useState, useEffect } from'react';
import { connect } from'react-redux';
import { fetchCorporateUsers } from '../actions/corporateUserActions';
import CorporateUserDashboard from '../components/CorporateUserDashboard';

const CorporateUserContainer = ({ corporateUsers, fetchCorporateUsers }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCorporateUsers().then(() => {
      setLoading(false);
    });
  }, [fetchCorporateUsers]);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        <CorporateUserDashboard corporateUsers={corporateUsers} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { corporateUsers: state.corporateUsers };
};

export default connect(mapStateToProps, { fetchCorporateUsers })(CorporateUserContainer);