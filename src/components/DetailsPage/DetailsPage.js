import React from 'react';
import PropTypes from 'prop-types';
import SidebarNav from '../SidebarNav/';
import LoadingMessage from '../LoadingMessage/';
import { ListUsersOfGroup, ListGroupsOfUser } from '../List/';
import EditMenu from '../EditMenu';
import DetailsInfo from '../DetailsInfo';
import DetailsForm from '../DetailsForm';

function DetailsPage({ isAnUser, type, data, editMode }) {
  if (data === null) return <LoadingMessage />;
  if (!data.id) return <div>Invalid</div>;
  const { firstName, name, user, group, id } = data;
  let itemsListArr = [];
  if (user) itemsListArr = Object.keys(user);
  if (group) itemsListArr = Object.keys(group);
  const listLength = itemsListArr.length;
  return (
    <div className="dashboard__body">
      <SidebarNav />
      <div className="details">
        <div className="grid">
          <div className="grid__item medium--two-fifths one-whole">
            <EditMenu type={type} id={id} listLength={listLength} itemsList={itemsListArr} />
            {editMode ? (
              <DetailsForm data={data} isAnUser={isAnUser} />
            ) : (
              <DetailsInfo data={data} isAnUser={isAnUser} listLength={listLength} />
            )}
          </div>
          <div className="grid__item medium--three-fifths one-whole">
            <div className="relative">
              {isAnUser ? (
                <ListGroupsOfUser page="details" type={type} title={`${firstName}'s Groups`} />
              ) : (
                <ListUsersOfGroup page="details" type={type} title={`${name}'s Users`} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DetailsPage.propTypes = {
  type: PropTypes.string.isRequired,
  isAnUser: PropTypes.bool.isRequired,
  data: PropTypes.object,
  editMode: PropTypes.bool,
};

export default DetailsPage;
