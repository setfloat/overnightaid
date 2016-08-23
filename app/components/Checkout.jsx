import React from 'react';

const Checkout = React.createClass({
  getInitialState() {
    return {
      orderId: null
    };
  },

  updateState(id) {
    this.setState({ orderId: id });
  },

  render() {
    return <div>
      {React.cloneElement(this.props.children, {
        cart: this.props.cart,
        orderId: this.state.orderId,
        updateOrderId: this.updateState
      })}
    </div>;
  }
});

export default Checkout;
