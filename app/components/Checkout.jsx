import ConfirmOrder from 'components/ConfirmOrder';
import React from 'react';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  loginForm: {
    width: '100%'
  },
  tabponent: {
    marginTop: '50',
    marginLeft: '50',
    marginRight: '50',
    paddingBottom: '40',
    maxWidth: '700',
    width: 'viewPort',
    alignContent: 'centerAlign'
  }
};

const Checkout = React.createClass({
  render() {
    return <div style={styles.tabponent}>
    <ConfirmOrder />
    </div>
  }
});

export default Checkout;
