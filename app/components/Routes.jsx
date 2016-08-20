import {  browserHistory, IndexRoute, Route, Router } from 'react-router';
import App from 'components/App';
import React from 'react';
import FamilyMembers from 'components/FamilyMembers';
import AddressForm from 'components/AddressForm';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/" >
        <IndexRoute component={FamilyMembers} />
        <Route component={FamilyMembers} path="FamilyMembers" />
        <Route component={AddressForm} path="AddressForm" />
      </Route>
    </Router>;
  }
});

export default Routes;

/* <IndexRoute component={Bulletins} />
<Route component={Bulletins} path="/topics/:topic" /> */
