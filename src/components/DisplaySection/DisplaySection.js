import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { ListGroups, ListUsers } from '../List/';
import SidebarNav from '../SidebarNav/';
import SidebarMenu from '../SidebarMenu/';

function DisplaySection(props) {
  const { type, isAnUser, enableUsers } = props;
  function renderList() {
    if (isAnUser) return <ListUsers type={type} title={`${type}s`} page="display" />;
    return <ListGroups type={type} title={`${type}s`} page="display" />;
  }
  return (
    <div className="dashboard__body">
      <SidebarNav />
      <section className={`dashboard__content ${enableUsers ? '' : 'full-width'}`}>
        {enableUsers ? (
          renderList()
        ) : (
          <div className="list__warning">
            <p className="list__warning-text">You can not create a user without groups on your UMS.</p>
            <p className="list__warning-text list__warning-text--small">
              Please go to{' '}
              <Link to="/groups" className="list__warning-link">
                Groups page
              </Link>{' '}
              to create one.
            </p>
          </div>
        )}
      </section>
      <SidebarMenu type={type} isAnUser={isAnUser} enableUsers={enableUsers} />
    </div>
  );
}

DisplaySection.propTypes = {
  type: PropTypes.string.isRequired,
  isAnUser: PropTypes.bool.isRequired,
  enableUsers: PropTypes.bool.isRequired,
};

export default DisplaySection;
