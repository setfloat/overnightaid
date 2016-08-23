import AddressForm from 'components/AddressForm';
import Order from 'components/Order';
import React from 'react';
import axios from 'axios';
import classNames from 'classnames';

// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400
//   },
//   loginForm: {
//     width: '100%'
//   },
//   tabponent: {
//     marginTop: '50',
//     marginLeft: '50',
//     marginRight: '50',
//     paddingBottom: '40',
//     maxWidth: '700',
//     width: 'viewPort',
//     alignContent: 'centerAlign'
//   }
// };

const ConfirmOrder = React.createClass({
  getInitialState() {
    return {
      cart: this.props.cart,
      address: {}
    };
  },

  handleOrderButtonTouchTap() {
    const addresIsConfirmed = false;

    if (!addresIsConfirmed) {
      return;
    }

    axios.post('/api/orders', this.state.address, this.state.cart)
    .then((res) => {
      this.props.updateOrderId(res.data);
      this.props.router.push('/checkout/confirmation');
    })
    .catch((err) => {
      console.error(err);
    });
  },

  render() {
    // const styleAddressFormDiv = {
    //   marginTop: '50px',
    //   marginLeft: '50px',
    //   marginRight: '50px',
    //   paddingBottom: '40px',
    //   maxWidth: '700px',
    //   width: 'viewPort',
    //   alignContent: 'centerAlign'
    // };

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
      width: '100px'
    };

    return <main style={styleMain}>
      <div style={styleFlexMain}>
        <div>
          <AddressForm style={styleDivs} />
        </div>
        <div>
          <Order style={styleDivs} />
        </div>
      </div>
      <input
        className={lrgBtnClassNames}
        // onTouchTap={handleOrderButtonTouchTap}
        type="button"
        value="Place Order"
      />
    </main>;
  }
});

export default ConfirmOrder;
