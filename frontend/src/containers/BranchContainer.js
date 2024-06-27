import React, { useState, useEffect } from'react';
import { connect } from'react-redux';
import { fetchBranches } from '../actions/branchActions';
import BranchDashboard from '../components/BranchDashboard';

const BranchContainer = ({ branches, fetchBranches }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBranches().then(() => {
      setLoading(false);
    });
  }, [fetchBranches]);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        <BranchDashboard branches={branches} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { branches: state.branches };
};

export default connect(mapStateToProps, { fetchBranches })(BranchContainer);