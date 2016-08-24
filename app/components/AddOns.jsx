import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import classNames from 'classnames';

const styles = {
  customWidth: {
    width: 150
  },
  headline: {
    fontSize: 36,
    paddingTop: 16,
    marginLeft: 20,
    marginBottom: 12,
    fontWeight: 400
  },
  tabponent: {
    marginTop: '50',
    marginLeft: '50',
    marginRight: '50',
    paddingBottom: '40',
    maxWidth: '700',
    width: 'viewPort',
    alignContent: 'centerAlign'
  },
  personContent: {
    fontSize: 24,
    maxWidth: '95%',
    padding: '5%',
    margin: '20'
  }
};

const AddOns = React.createClass({
  render() {
    const lrgBtnClassNames = classNames({
      btnLarge: true,
      wavesEffect: true
    });

    const styleFlexMain = {
      fontSize: 24,
      marginBottom: '50px'
    };

    return <div>
      <div
        style={styles.tabponent}
        zDepth={3}
      >
        <h3 style={styles.headline}>
          Add-ons: Anything else you would like to order?
        </h3>
        <Paper
          rounded={false}
          style={styles.personContent}
          zDepth={2}
        >
          <h3 style={styles.headline}>Infant Pack
            <SelectField
              onChange={this.handleChange}
              style={{ marginLeft: '20px' }}
              value={1}
            >
              {/* <SelectField
              onChange={this.handleChange}
              value={this.state.value}> */}
              <MenuItem
                default
                disabled
                primaryText="Quantity"
                value={1}
              />
              <MenuItem primaryText="1" value={2} />
              <MenuItem primaryText="2" value={3} />
              <MenuItem primaryText="3" value={4} />
              <MenuItem primaryText="4" value={5} />
            </SelectField>
          </h3>
          <Divider />
        </Paper>
        <Paper
          rounded={false}
          style={styles.personContent}
          zDepth={2}
        >
          <h3 style={styles.headline}>Makeup Kit
            <SelectField
              onChange={this.handleChange}
              style={{ marginLeft: '20px' }}
              value={1}
            >
              {/* <SelectField
              onChange={this.handleChange}
              value={this.state.value}> */}
              <MenuItem
                default
                disabled
                primaryText="Quantity"
                value={1}
              />
              <MenuItem primaryText="1" value={2} />
              <MenuItem primaryText="2" value={3} />
              <MenuItem primaryText="3" value={4} />
              <MenuItem primaryText="4" value={5} />
            </SelectField>
          </h3>
          <Divider />
        </Paper>
        <Paper
          rounded={false}
          style={styles.personContent}
          zDepth={2}
        >
          <h3 style={styles.headline}>Dogs
            <SelectField
              onChange={this.handleChange}
              style={{ marginLeft: '20px' }}
              value={1}
            >
              {/* <SelectField
              onChange={this.handleChange}
              value={this.state.value}> */}
              <MenuItem
                default
                disabled
                primaryText="Quantity"
                value={1}
              />
              <MenuItem primaryText="1" value={2} />
              <MenuItem primaryText="2" value={3} />
              <MenuItem primaryText="3" value={4} />
              <MenuItem primaryText="4" value={5} />
            </SelectField>
          </h3>
          <Divider />
        </Paper>
        <Paper
          rounded={false}
          style={styles.personContent}
          zDepth={2}
        >
          <h3 style={styles.headline}>Cats
            <SelectField
              onChange={this.handleChange}
              style={{ marginLeft: '20px' }}
              value={1}
            >
              {/* <SelectField
              onChange={this.handleChange}
              value={this.state.value}> */}
              <MenuItem
                default
                disabled
                primaryText="Quantity"
                value={1}
              />
              <MenuItem primaryText="1" value={2} />
              <MenuItem primaryText="2" value={3} />
              <MenuItem primaryText="3" value={4} />
              <MenuItem primaryText="4" value={5} />
            </SelectField>
          </h3>
          <Divider />
        </Paper>
        <input
          className={lrgBtnClassNames}
          style={styleFlexMain}
          type="button"
          value="Correct"
        />
      </div>
    </div>;
  }
});

export default AddOns;
