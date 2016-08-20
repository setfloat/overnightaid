import { withRouter } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import FamilyMembers from 'components/FamilyMembers';
import AddressForm from 'components/AddressForm';


const App = React.createClass({
  getInitialState() {
    return {
      editing: null
    };
  },
  render() {
    return <div>
      <AppBar
      zDepth={2}
      title="Overnight Aid">
        <FlatButton label="Overnight Aid" />
      </AppBar>
      {this.props.children}
    </div>
  }
});

export default withRouter(App);
