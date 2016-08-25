import React from 'react';

const OrderPlaced = React.createClass({
  render() {
    return <div>
      <h2>Your Order Has Been Placed!</h2>
      <h3>Your order number is: {this.props.orderId}</h3>
      <h5>Please do not contact us if you have any issues with the order or various bugs on our site</h5>
      <h2>Thank you!</h2>
    </div>;
  }
});

export default OrderPlaced;
