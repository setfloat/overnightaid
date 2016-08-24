import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React from 'react';
import SelectField from 'material-ui/SelectField';

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
    margin: 20
  }
};

const AddOn = React.createClass({
  handleChange(event, index, value) {
    this.props.updateQuantity(this.props.item, value);
  },

  render() {
    const { item } = this.props;

    return <Paper
      rounded={false}
      style={styles.personContent}
      zDepth={2}
    >
      <h3 style={styles.headline}>{item.displayName}</h3>
      <Divider />
      <p>{item.description}</p>
      <SelectField
        floatingLabelText="Quantity"
        onChange={this.handleChange}
        style={{ marginLeft: '20px' }}
        value={item.quantity}
      >
        <MenuItem primaryText="0" value={0} />
        <MenuItem primaryText="1" value={1} />
        <MenuItem primaryText="2" value={2} />
        <MenuItem primaryText="3" value={3} />
        <MenuItem primaryText="4" value={4} />
      </SelectField>
    </Paper>;
  }
});

export default AddOn;
