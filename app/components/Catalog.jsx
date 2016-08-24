import React from 'react';

const Catalog = React.createClass({
  render() {
    return <div>
      {React.cloneElement(this.props.children, {
        addToCart: this.props.addToCart,
        items: this.props.items,
        cart: this.props.cart,
        familySize: this.props.familySize,
        updateFamilySelection: this.props.updateFamilySelection
      })}
    </div>;
  }
});

export default Catalog;
