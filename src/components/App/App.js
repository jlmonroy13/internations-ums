import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';
import { Spinner } from 'react-redux-spinner';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

class App extends React.Component {
  componentWillMount() {
    this.props.getUserInfo();
  }
  render() {
    return (
      <div>
        {this.props.children}
        <Alert stack={{ limit: 3 }} />
        <Spinner />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  getUserInfo: PropTypes.func.isRequired,
};

export default App;
