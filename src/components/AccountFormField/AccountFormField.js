import React from 'react';
import PropTypes from 'prop-types';

function AccountFormField({ iconName, id, ...restProps }) {
  return (
    <div className="account__form-group">
      <label className="account__label account__label--with-icon" htmlFor={id}>
        <span className={`icon icon--${iconName}`} />
      </label>
      <input className="account__form-control" id={id} {...restProps} />
    </div>
  );
}

AccountFormField.propTypes = {
  id: PropTypes.string.isRequired,
  iconName: PropTypes.string,
};

export default AccountFormField;
