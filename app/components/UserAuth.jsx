import React from 'react';
import { Tab, Tabs } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const UserAuth = React.createClass({
  render() {
    return <Tabs>
      <Tab label="Item One" >
        <div>
          <h2 style={styles.headline}>Tab One</h2>
          <p>
            This is an example tab.
          </p>
          <p>
            You can put any sort of HTML or react component in here. It even
            keeps the component state!
          </p>
          <Slider defaultValue={0.5} name="slider0" />
        </div>
      </Tab>
      <Tab label="Item Two" >
        <div>
          <h2 style={styles.headline}>Tab Two</h2>
          <p>
            This is another example tab.
          </p>
        </div>
      </Tab>
      <Tab
        data-route="/home"
        label="onActive"
        onActive={handleActive}
      >
        <div>
          <h2 style={styles.headline}>Tab Three</h2>
          <p>
            This is a third example tab.
          </p>
        </div>
      </Tab>
    </Tabs>;
  }
});

export default UserAuth;
