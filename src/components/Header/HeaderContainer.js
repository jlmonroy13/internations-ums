import { connect } from 'react-redux';
import { setNavState } from '../../actions/events';
import Header from './Header';

function mapStateToProps(state) {
  const { events: { isNavOpen } } = state;
  return { isNavOpen };
}

function mapDispatchToProps(dispatch) {
  return {
    setNavState: state => dispatch(setNavState(state)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
