import React from 'react';

const OrderPlaced = React.createClass({
  render() {
    const styleFlexMain = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'nowrap',
      height: 'viewPort'
    };

    return <div style={styleFlexMain}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Your Order Has Been Placed!</h2>
      <h2>Your order number is: {this.props.orderId}</h2>
      <h2>Thank you!</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h5>Please do not contact us if you have any issues with the order or
      various bugs on our site</h5>
    </div>;
  }
});

export default OrderPlaced;
