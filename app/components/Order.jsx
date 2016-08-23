import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import React from 'react';

const Order = React.createClass({
  render() {
    const styleHeadline = {
      fontSize: '36px',
      paddingTop: '16px',
      marginBottom: '12px',
      fontWeight: 400
    };

    const stylePaper = {
      // fontSize: 24,
      // maxWidth: '95%',
      // padding: '5%'
    };

    const cart = [
      {
        id: 1,
        displayName: 'Toothbrush',
        quantity: 2
      },
      {
        id: 2,
        displayName: 'Women\'s Clothes',
        size: 'medium',
        quantity: 1
      }
    ];

    return <Paper style={stylePaper}>
      <h3 style={styleHeadline}>Cart</h3>
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
    </Paper>;
  }
});

export default Order;
