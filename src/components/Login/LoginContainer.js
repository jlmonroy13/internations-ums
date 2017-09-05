import { connect } from 'react-redux';
import { login } from '../../actions/account';
import Login from './Login';

function mapDispatchToProps(dispatch) {
  return {
    login: data => dispatch(login(data)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
