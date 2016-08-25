import React from 'react';
import { withRouter } from 'react-router';

const Catalog = React.createClass({
  toCheckout() {
    this.props.router.push('/checkout');
  },

  render() {
    return <div>
      {React.cloneElement(this.props.children, {
        addToCart: this.props.addToCart,
        items: this.props.items,
        cart: this.props.cart,
        familySize: this.props.familySize,
        toCheckout: this.toCheckout,
        updateErrorMessage: this.updateErrorMessage,
        updateFamilySelection: this.props.updateFamilySelection,
        updateFamilySize: this.props.updateFamilySize,
        updateNotification: this.updateNotification
      })}
    </div>;
  }
});

export default withRouter(Catalog);
