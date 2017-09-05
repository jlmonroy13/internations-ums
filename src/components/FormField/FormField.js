import React from 'react';
import PropTypes from 'prop-types';

function FormField({ id, ...restProps }) {
  return (
    <div className="form__field">
      <label className="sr-only" htmlFor={id} />
      <input className="form__input" id={id} {...restProps} />
    </div>
  );
}

FormField.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FormField;
