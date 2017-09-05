import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/';


function Dashboard({ children }) {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <Header />
        {children}
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dashboard;
