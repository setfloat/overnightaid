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
      console.error(err);
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
      wavesEffect: true
    });

    const styleMain = {
      marginTop: '10vh'
    };

    const styleDivs = {
    };

    const styleButton = {
      marginTop: '5%',
      marginLeft: '35%'
    };

    return <main style={styleMain}>
      <div style={styleFlexMain}>
        <AddressForm
          address={this.state.address}
          updateAddress={this.updateAddress}
        />
        <div style={styleDivs}>
          <Order cart={this.props.cart} />
          <input
            className={lrgBtnClassNames}
            onTouchTap={this.handleOrderButtonTouchTap}
            style={styleButton}
            type="button"
            value="Place Order"
          />
        </div>
      </div>
    </main>;
  }
});

export default withRouter(ConfirmOrder);
