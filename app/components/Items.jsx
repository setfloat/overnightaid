import Divider from 'material-ui/Divider';
import FamilyItems from 'components/FamilyItems';
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



const Items = React.createClass({

  render() {
    const lrgBtnClassNames = classNames({
      btnLarge: true,
      wavesEffect: true
    });

    const styleFlexMain = {
      fontSize: 24,
      marginBottom: '50px'
    };

    const userFamilySize = this.props.familySize || 5;
    const times = [];

    for (let i = 0; i < userFamilySize; i++) {
      times.push({});
      console.log(userFamilySize);
    }

    return <div>
      <div
        style={styles.tabponent}
      >
        <h3 style={styles.headline}>
          Select Clothing Options
        </h3>
        {console.log(times)}
        {times.map((item, index) => {
          return <FamilyItems key={index} />
        })}
      </div>
      <input
        className={lrgBtnClassNames}
        style={styleFlexMain}
        type="button"
        value="Submit"
      />
    </div>;
  }
});

export default Items;
