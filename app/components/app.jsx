import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import { withRouter } from 'react-router';

const App = React.createClass({
  getInitialState() {
    return {
      address: {
        addressFullName: '',
        addressLine1: 'HelloAddy',
        addressLine2: '',
        addressCity: '',
        addressZip: ''
      },
      editing: null
    };
    this.setState({ address, editing });
  },
  render() {
    return <div>
      <AppBar
        title="Overnight Aid"
        zDepth={2}
      >
        <FlatButton label="Overnight Aid" />
      </AppBar>
      {this.props.children}
    </div>;
  }
});

export default withRouter(App);
