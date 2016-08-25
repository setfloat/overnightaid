import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React from 'react';
import SelectField from 'material-ui/SelectField';

const FamilyItems = React.createClass({

  render() {
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
      <SelectField onChange={(event, index, value) => this.props.updateSize(this.props.item, value)} value={this.props.item.size}>
        <MenuItem
          default={true}
          disabled={true}
          primaryText="Size"
          value={''}
        />
        <Divider />
        <MenuItem primaryText="Small" value={'small'} />
        <MenuItem primaryText="Medium" value={'medium'} />
        <MenuItem primaryText="Large" value={'large'} />
      </SelectField>
      <br />
      <SelectField onChange={(event, index, value) => this.props.updateStyle(this.props.item, value)} value={this.props.item.gender}>
        <MenuItem
          default={true}
          disabled={true}
          primaryText="Clothing"
          value={''}
        />
        <Divider />
        <MenuItem primaryText="Mens Styles" value={1} />
        <MenuItem primaryText="Womens Styles" value={2} />
      </SelectField>
    </Paper>;
  }
});

export default FamilyItems;
