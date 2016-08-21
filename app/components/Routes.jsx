import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import AddressForm from 'components/AddressForm';
import App from 'components/App';
import FamilyMembers from 'components/FamilyMembers';
import React from 'react';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route
        component={App}
        path="/"
      >
        <IndexRoute component={FamilyMembers} />
        <Route
          component={FamilyMembers}
          path="FamilyMembers"
        />
        <Route
          component={AddressForm}
          path="AddressForm"
        />
      </Route>
    </Router>;
  }
});

export default Routes;

/* <IndexRoute component={Bulletins} />
<Route component={Bulletins} path="/topics/:topic" /> */
