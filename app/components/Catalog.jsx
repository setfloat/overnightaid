import React from 'react';

const Catalog = React.createClass({
  render() {
    return <div>
      {React.cloneElement(this.props.children, {
        items: this.props.items,
        cart: this.props.cart,
        familySize: this.props.familySize
      })}
    </div>;
  }
});

export default Catalog;
