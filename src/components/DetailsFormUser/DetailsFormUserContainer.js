import { connect } from 'react-redux';
import { updateUser } from '../../actions/user';
import DetailsFormUser from './DetailsFormUser';

function mapDispatchToProps(dispatch) {
  return {
    updateUser: (data, file) => dispatch(updateUser(data, file)),
  };
}

export default connect(null, mapDispatchToProps)(DetailsFormUser);
