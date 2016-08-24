import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

const App = React.createClass({
  getInitialState() {
    return {
      items: [],
      cart: [],
      familySize: []
    };
  },

  componentWillMount() {
    axios.get('/api/items')
      .then((res) => {
        this.setState({ items: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  addToCart(newItems) {
    const nextCart = this.state.cart.concat(newItems);

    this.setState({ cart: nextCart });
  },

  updateFamilySelection(amount) {
    console.log(this.state.familySize);
    let nextFamilySize = [];
    console.log(nextFamilySize);

    for (let i = 0; i < amount; i++) {
      console.log( amount)
      nextFamilySize.push({
        size: '',
        gender: ''
      })
    }

    this.setState({ familySize: nextFamilySize });
  },

  handleLoginTouchTap() {
    this.props.router.push('/login');
  },

  handleTitleTouchTap() {
    this.props.router.push('/');
  },

  render() {
    const styleFlatButton = {
      height: '64px',
      lineHeight: '64px'
    };

    const styleTitle = {
      cursor: 'pointer'
    };

    return <div>
      <AppBar
        onTitleTouchTap={this.handleTitleTouchTap}
        showMenuIconButton={false}
        title="Overnight Aid"
        titleStyle={styleTitle}
        zDepth={2}
      >
        <FlatButton
          label="Login/Register"
          onTouchTap={this.handleLoginTouchTap}
          style={styleFlatButton}
        />
      </AppBar>
      {React.cloneElement(this.props.children, {
        addToCart: this.addToCart,
        items: this.state.items,
        cart: this.state.cart,
        familySize: this.state.familySize,
        updateFamilySelection: this.updateFamilySelection
      })}
    </div>;
  }
});

export default withRouter(App);
