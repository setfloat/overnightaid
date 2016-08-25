import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { withRouter } from 'react-router';

const App = React.createClass({
  getInitialState() {
    return {
      items: [],
      cart: [],
      familySize: [],
      loggedIn: cookie.load('loggedIn')
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
    const nextFamilySize = [];

    for (let i = 0; i < amount; i++) {
      nextFamilySize.push({
        size: '',
        gender: ''
      });
    }

    this.setState({ familySize: nextFamilySize });
  },

  updateFamilySize(nextFamilySize) {
    this.setState({ familySize: nextFamilySize });
  },

  updateFamilyStyle(nextFamilySize) {
    this.setState({ familySize: nextFamilySize });
  },

  handleLoginTouchTap() {
    this.props.router.push('/login');
  },

  handleLogoutTouchTap() {
    axios.delete('/api/token')
    .then(() => {
      this.updateLogin();
    })
    .catch((err) => {
      console.log(err);
    });
  },

  updateLogin() {
    this.setState({ loggedIn: cookie.load('loggedIn') });

    if (!this.state.loggedIn) {
      this.props.router.push('/');
    }
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

    let testing;

    if (this.state.loggedIn) {
      testing = <FlatButton
        label="Logout"
        onTouchTap={this.handleLogoutTouchTap}
        style={styleFlatButton}
      />;
    }
    else {
      testing = <FlatButton
        label="Login/Register"
        onTouchTap={this.handleLoginTouchTap}
        style={styleFlatButton}
      />;
    }

    return <div>
      <AppBar
        onTitleTouchTap={this.handleTitleTouchTap}
        showMenuIconButton={false}
        title="Overnight Aid"
        titleStyle={styleTitle}
        zDepth={2}
      >
        {testing}
      </AppBar>
      {React.cloneElement(this.props.children, {
        addToCart: this.addToCart,
        items: this.state.items,
        cart: this.state.cart,
        familySize: this.state.familySize,
        loggedIn: this.state.loggedIn,
        updateFamilySelection: this.updateFamilySelection,
        updateFamilySize: this.updateFamilySize,
        updateFamilyStyle: this.updateFamilyStyle,
        updateLogin: this.updateLogin
      })}
    </div>;
  }
});

export default withRouter(App);
