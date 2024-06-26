import React, { useState, useEffect } from'react';
import { connect } from'react-redux';
import { fetchIndividualUsers } from '../actions/individualUserActions';
import IndividualUserDashboard from '../components/IndividualUserDashboard';

const IndividualUserContainer = ({ individualUsers, fetchIndividualUsers }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIndividualUsers().then(() => {
      setLoading(false);
    });
  }, [fetchIndividualUsers]);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        <IndividualUserDashboard individualUsers={individualUsers} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { individualUsers: state.individualUsers };
};

export default connect(mapStateToProps, { fetchIndividualUsers })(IndividualUserContainer);