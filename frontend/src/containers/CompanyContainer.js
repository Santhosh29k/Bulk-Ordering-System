import React, { useState, useEffect } from'react';
import { connect } from'react-redux';
import { fetchCompanies } from '../actions/companyActions';
import CompanyDashboard from '../components/CompanyDashboard';

const CompanyContainer = ({ companies, fetchCompanies }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompanies().then(() => {
      setLoading(false);
    });
  }, [fetchCompanies]);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        <CompanyDashboard companies={companies} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { companies: state.companies };
};

export default connect(mapStateToProps, { fetchCompanies })(CompanyContainer);