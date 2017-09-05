import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfo } from '../../actions/account';
import App from './App';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUserInfo }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
