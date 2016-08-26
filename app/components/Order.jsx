import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import React from 'react';

const Order = React.createClass({
  render() {
    const styleHeadline = {
      fontSize: '36px',
      fontWeight: 400,
      paddingTop: '5%',
      marginBottom: 15
    };

    const stylePaper = {
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingBottom: '3%'
    };

    const { cart } = this.props;

    return <Paper style={stylePaper} zDepth={3}>
      <h3 style={styleHeadline}>Cart</h3>
      <Divider />
      {cart.map((item, index) => {
        if (item.size) {
          return <div key={index}>
            <div>
              <p>{item.displayName}</p>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <Divider />
          </div>;
        }

        return <div key={index}>
          <div>
            <p>{item.displayName}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <Divider />
        </div>;
      })}
      <h2 style={{ textAlign: 'right' }}>
      Total: ${cart.reduce((result, element) => {
        if (element.category === 'optionables') {
          return result + 10;
        }

        return result;
      }, 30)}
      </h2>
    </Paper>;
  }
});

export default Order;
