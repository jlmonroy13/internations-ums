import React from 'react';
import PropTypes from 'prop-types';
import DetailsFormGroup from '../DetailsFormGroup/';
import DetailsFormUser from '../DetailsFormUser/';

function DetailsForm({ data, isAnUser }) {
  const { urlPhoto } = data;
  const inlineStyles = {
    backgroundImage: `url(${urlPhoto})`,
  };
  return (
    <div className="details__info-container">
      <span className="details__photo" style={inlineStyles} />
      {isAnUser ? (
        <DetailsFormUser data={data} />
      ) : (
        <DetailsFormGroup data={data} />
      )}
    </div>
  );
}

DetailsForm.propTypes = {
  data: PropTypes.object.isRequired,
  isAnUser: PropTypes.bool.isRequired,
};

export default DetailsForm;
