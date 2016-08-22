import { Tab, Tabs } from 'material-ui/Tabs';
import Login from 'components/Login';
import Paper from 'material-ui/Paper';
import React from 'react';
import Register from 'components/Register';

const styles = {
  // centering: {
  //   marginLeft: '50%',
  //   marginRight: '50%'
  // },
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

const UserAuth = React.createClass({

  render() {
    return <div>
      <Paper style={styles.tabponent} zDepth={5}>
        <Tabs>

          <Tab data-route="/Login" label="Login">
            <div style={styles.loginForm}>
              <Login />
            </div>
          </Tab>
          <Tab data-route="/Register" label="Register">
            <div style={styles.loginForm}>
              <Register />
            </div>
          </Tab>
        </Tabs>
      </Paper>
    </div>;
  }
});

export default UserAuth;
