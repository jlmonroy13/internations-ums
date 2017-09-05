import React from 'react';
import PropTypes from 'prop-types';

function Account({ children }) {
  return (
    <div className="account">
      <div className="grid grid--center">{children}</div>
    </div>
  );
}

Account.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Account;
