import FamilyItems from 'components/FamilyItems';
import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router';

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
    marginTop: '50px',
    marginLeft: '50px',
    marginRight: '50px',
    paddingBottom: '40px',
    maxWidth: '700px',
    width: 'viewPort',
    alignContent: 'centerAlign'
  },
  personContent: {
    fontSize: 24,
    maxWidth: '95%',
    padding: '5%',
    margin: '20px'
  }
};

const Items = React.createClass({

  handleChange() {

    const newArr = this.props.familySize.map((person) => {
      const item = this.props.items.filter((item) => {
          return person.gender === item.id;
      })[0];

      return Object.assign({}, item, { size: person.size, quantity: 1 })
    });

    console.log(newArr);
  },

  pushToCart() {
    let famArr = this.props.familySize;
    let itemsArr = this.props.items;
    let cartArr = this.props.cart;

    console.log(famArr);
    console.log(itemsArr);
    console.log(cartArr);
  },

  toAddons() {
    this.props.router.push('/order/add-ons');
  },

  updateSize(item, updatedSize) {
    const nextSize = this.props.familySize.map((familyMember) => {
      if (item !== familyMember) {
        return familyMember;
      }

      return Object.assign({}, item, { size: updatedSize });
    });

    this.props.updateFamilySize(nextSize);
  },

  updateStyle(item, updatedStyle) {
    const nextStyle = this.props.familySize.map((familyMember) => {
      if (item !== familyMember) {
        return familyMember;
      }

      return Object.assign({}, item, { gender: updatedStyle });
    });

    this.props.updateFamilyStyle(nextStyle);
  },

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
      >
        <h3 style={styles.headline}>
          Select Clothing Options
        </h3>
        {this.props.familySize.map((item, index) => {
          return <FamilyItems
            item={item}
            key={index}
            updateSize={this.updateSize}
            updateStyle={this.updateStyle}
          />
        })}
      </div>
      <input
        className={lrgBtnClassNames}
        onClick={this.handleChange}
        style={styleFlexMain}
        type="button"
        value="Submit"
      />
    </div>;
  }
});

export default withRouter(Items);
