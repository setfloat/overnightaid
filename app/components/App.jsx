import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import axios from 'axios';
import cookie from 'react-cookie';
import { withRouter } from 'react-router';

const App = React.createClass({
  getInitialState() {
    return {
      items: [],
      cart: [],
      familySize: [],
      loggedIn: cookie.load('loggedIn'),
      errorMessage: '',
      showError: false,
      notification: '',
      showNotification: false
    };
  },

  componentWillMount() {
    axios.get('/api/items')
      .then((res) => {
        this.setState({ items: res.data });
      })
      .catch((err) => {
        this.updateErrorMessage(err);
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

  handleLoginTouchTap() {
    this.props.router.push('/login');
  },

  handleLogoutTouchTap() {
    axios.delete('/api/token')
    .then(() => {
      this.updateLogin();
      this.updateNotification('Logged out successfully');
    })
    .catch((err) => {
      this.updateErrorMessage(err);
    });
  },

  updateErrorMessage(newError) {
    if (newError.response) {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      this.setState({
        errorMessage: `Error: ${newError.response.data}`,
        showError: true
      });
    }
    else {
      // Something happened in setting up the request that triggered an Error
      this.setState({
        errorMessage: `Error: ${newError.message}`,
        showError: true
      });
    }
  },

  updateLogin() {
    this.setState({ loggedIn: cookie.load('loggedIn') });

    if (!this.state.loggedIn) {
      this.props.router.push('/');
    }
  },

  updateNotification(newNotification) {
    this.setState({ notification: newNotification, showNotification: true });
  },

  handleCloseNotification() {
    this.setState({ showNotification: false });
  },

  handleCloseError() {
    this.setState({ showError: false });
  },

  handleTitleTouchTap() {
    this.props.router.push('/');
  },

  render() {
    const styleFlatButton = {
      height: '64px',
      lineHeight: '64px'
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
        className="cursorPointer"
        onTitleTouchTap={this.handleTitleTouchTap}
        showMenuIconButton={false}
        title="Overnight Aid"
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
        updateErrorMessage: this.updateErrorMessage,
        updateFamilySelection: this.updateFamilySelection,
        updateFamilySize: this.updateFamilySize,
        updateLogin: this.updateLogin,
        updateNotification: this.updateNotification
      })}
      <Snackbar
        autoHideDuration={4000}
        message={this.state.notification}
        onRequestClose={this.handleCloseNotification}
        open={this.state.showNotification}
      />
      <Snackbar
        autoHideDuration={4000}
        message={this.state.errorMessage}
        onRequestClose={this.handleCloseError}
        open={this.state.showError}
      />
    </div>;
  }
});

export default withRouter(App);
