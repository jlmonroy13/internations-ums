import { connect } from 'react-redux';
import { firebaseConnect, dataToJS, pathToJS } from 'react-redux-firebase';
import { setMenuState } from '../../actions/events';
import List from './List';

const fbWrappedComponent = firebaseConnect(['/contacts'])(List);

function mapStateToProps(state) {
  const { firebase, events: { isMenuOpen } } = state;
  const entitiesObj = pathToJS(firebase, 'profile/contacts');
  const itemsObj = dataToJS(firebase, 'contacts');
  return {
    entitiesObj,
    itemsObj,
    isMenuOpen,
    urlId: '',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMenuState: state => dispatch(setMenuState(state)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(fbWrappedComponent);
