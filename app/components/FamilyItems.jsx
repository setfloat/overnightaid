import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import classNames from 'classnames';

const FamilyItems = React.createClass({
  // getInitialState() {
  //   return this.state = { value: 1 };
  // },

  // handleChange() {
  //
  //   this.props.handleClothingChange();
  // },
  handleSizeChange(event, index, value) {
    this.props.updateSize(this.props.person, value);
  },

  handleStyleChange(event, index, value) {

  },

  render() {
    // const lrgBtnClassNames = classNames({
    //   btnLarge: true,
    //   wavesEffect: true
    // });
    const lrgBtnClassNames = {
      btnLarge: true,
      wavesEffect: true
    };

    const styleFlexMain = {
      fontSize: 24,
      marginBottom: '50px'
    };

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
      personContent: {
        fontSize: 24,
        maxWidth: '95%',
        padding: '5%',
        margin: '20'
      }
    };

    return <Paper
      rounded={false}
      style={styles.personContent}
      zDepth={2}
    >
      <h3 style={styles.headline}>Person</h3>
      <SelectField onChange={this.handleSizeChange} value={1}>
        <MenuItem
          default={true}
          disabled={true}
          primaryText="Size"
          value={1}
        />
        <Divider />
        <MenuItem primaryText="Small" value={2} />
        <MenuItem primaryText="Medium" value={3} />
        <MenuItem primaryText="Large" value={4} />
      </SelectField>
      <br />
      <SelectField onChange={this.handleChange} value={1}>
        <MenuItem
          default={true}
          disabled={true}
          primaryText="Clothing"
          value={1}
        />
        <Divider />
        <MenuItem primaryText="Mens Styles" value={2} />
        <MenuItem primaryText="Womens Styles" value={3} />
      </SelectField>
    </Paper>;
  }
});

export default FamilyItems
