import React, { useState, useEffect } from'react';
import { connect } from'react-redux';
import { fetchMentors } from '../actions/mentorActions';
import MentorDashboard from '../components/MentorDashboard';

const MentorContainer = ({ mentors, fetchMentors }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMentors().then(() => {
      setLoading(false);
    });
  }, [fetchMentors]);

  return (
    <div>
      {loading? (
        <p>Loading...</p>
      ) : (
        <MentorDashboard mentors={mentors} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { mentors: state.mentors };
};

export default connect(mapStateToProps, { fetchMentors })(MentorContainer);