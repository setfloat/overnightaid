import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import AddOns from 'components/AddOns';
import App from 'components/App';
import Catalog from 'components/Catalog';
import Checkout from 'components/Checkout';
import ConfirmOrder from 'components/ConfirmOrder';
import FamilySelection from 'components/FamilySelection';
import Home from 'components/Home';
import Items from 'components/Items';
import OrderPlaced from 'components/OrderPlaced';
import React from 'react';
import UserAuth from 'components/UserAuth';

const Routes = React.createClass({
  render() {
    return <Router history={browserHistory}>
      <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={Catalog} path="order">
          <IndexRoute component={FamilySelection} />
          <Route component={Items} path="items" />
          <Route component={AddOns} path="add-ons" />
        </Route>
        <Route component={UserAuth} path="login" />
        <Route component={Checkout} path="checkout">
          <IndexRoute component={ConfirmOrder} />
          <Route component={OrderPlaced} path="confirmation" />
        </Route>
      </Route>
    </Router>;
  }
});

export default Routes;
