import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import AddOns from 'components/AddOns';
import App from 'components/App';
import Box from 'components/Box';
import Catalog from 'components/Catalog';
import Checkout from 'components/Checkout';
import ConfirmCart from 'components/ConfirmCart';
import ConfirmOrder from 'components/ConfirmOrder';
import FamilySize from 'components/FamilySize';
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
        <Route component={Catalog} path="catalog">
          <Route component={Box} path="core-box">
            <Route component={FamilySize} path="family-size" />
            <Route component={Items} path="items" />
          </Route>
          <Route component={AddOns} path="add-ons" />
        </Route>
        <Route component={UserAuth} path="login" />
        <Route component={Checkout} path="checkout">
          <Route component={ConfirmCart} path="confirm-cart" />
          <Route component={ConfirmOrder} path="confirm-order" />
          <Route component={OrderPlaced} path="confirmation" />
        </Route>
      </Route>
    </Router>;
  }
});

export default Routes;
