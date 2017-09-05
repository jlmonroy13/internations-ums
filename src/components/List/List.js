import React from 'react';
import PropTypes from 'prop-types';
import { isLoaded } from 'react-redux-firebase';
import ListItem from '../ListItem/';
import EmptySection from '../EmptySection/';
import SelectForm from '../SelectForm/';
import EmptyItemsOnUms from '../EmptyItemsOnUms';

function List({
  type,
  title,
  entitiesObj,
  itemsObj,
  page,
  ownEntitiesObj,
  urlId,
  setMenuState,
  isMenuOpen,
}) {
  function onSetMenuState() {
    setMenuState(!isMenuOpen);
  }
  if ((!isLoaded(itemsObj) || !isLoaded(entitiesObj)) && itemsObj && entitiesObj) {
    return <div>Loading ...</div>;
  }
  if ((!itemsObj || !entitiesObj) && page !== 'details') return <EmptySection type={type} />;
  if (!ownEntitiesObj && !entitiesObj && page === 'details') return <EmptyItemsOnUms type={type} />;
  let items = itemsObj && entitiesObj ? Object.keys(entitiesObj).map(key => itemsObj[key]) : [];
  let itemsSelect = [];
  if (!ownEntitiesObj && entitiesObj && page === 'details') {
    itemsSelect = items;
    items = [];
  } else if (isLoaded(ownEntitiesObj) && page === 'details') {
    const ownEntitiesArr = Object.keys(ownEntitiesObj);
    itemsSelect = items.filter(item => ownEntitiesArr.indexOf(item.id) === -1);
    items = items.filter(item => ownEntitiesArr.indexOf(item.id) > -1);
  }
  return (
    <div>
      <h1 className="list__title">
        {title}
        {page !== 'details' ? (
          <span className="list__icon-plus icon icon--plus" onClick={onSetMenuState} />
        ) : null}
        {page === 'details' && itemsSelect.length ? (
          <SelectForm type={type} items={itemsSelect} urlId={urlId} />
        ) : null}
      </h1>
      <ul className="list">
        {items.reduce((acc, item) => {
          if (item && item.id) {
            acc.push(
              <ListItem
                key={item.id}
                data={item}
                type={type}
                page={page}
                urlId={urlId}
                itemsLength={items ? items.length : 0}
              />,
            );
          }
          return acc;
        }, [])}
      </ul>
    </div>
  );
}

List.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  urlId: PropTypes.string.isRequired,
  itemsObj: PropTypes.object,
  entitiesObj: PropTypes.object,
  ownEntitiesObj: PropTypes.object,
  setMenuState: PropTypes.func,
  isMenuOpen: PropTypes.bool,
};

export default List;
