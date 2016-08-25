import AddressForm from 'components/AddressForm';
import Order from 'components/Order';
import React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { withRouter } from 'react-router';

const ConfirmOrder = React.createClass({
  getInitialState() {
    return {
      cart: this.props.cart,
      address: {}
    };
  },

  handleOrderButtonTouchTap() {
    const { cart } = this.state;
    const { address } = this.state;

    axios.post('/api/orders', { address, cart })
    .then((res) => {
      this.props.updateOrderId(res.data);
      this.props.router.push('/checkout/confirmation');
    })
    .catch((err) => {
      this.props.updateErrorMessage(err);
    });
  },

  updateAddress(nextAddress) {
    this.setState({ address: nextAddress });
  },

  render() {
    const styleFlexMain = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      alignContent: 'center',
      flexWrap: 'nowrap'
    };

    const lrgBtnClassNames = classNames({
      btnLarge: true,
      wavesEffect: true,
      confirmOrderButton: true
    });

    return <main className="confirmOrderMain">
      <div style={styleFlexMain}>
        <AddressForm
          address={this.state.address}
          updateAddress={this.updateAddress}
        />
        <div className="confirmOrderDiv">
          <Order cart={this.props.cart} />
          <input
            className={lrgBtnClassNames}
            onTouchTap={this.handleOrderButtonTouchTap}
            type="button"
            value="Place Order"
          />
        </div>
      </div>
    </main>;
  }
});

export default withRouter(ConfirmOrder);
