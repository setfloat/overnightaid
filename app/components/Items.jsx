import FamilyItems from 'components/FamilyItems';
import React from 'react';
import classNames from 'classnames';
import uniqBy from 'lodash/uniqBy';
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
  handleSubmit() {
    let submitVal = true;
    const newArr = this.props.familySize.map((person) => {
      const item = this.props.items.filter((item) => {
        if (person.gender === ''|| person.size === '') {
          submitVal = false;
        }
        return person.gender === item.id;
      })[0];

      return Object.assign({}, item, { size: person.size, quantity: 1 })
    });
    console.log(submitVal);
    console.log(newArr);
    if (submitVal) {
      this.removeDupes(newArr);
      this.toAddons();
    }
  },

  removeDupes(newArr) {
    let size;
    let id;
    const stewArr = [];

    const uniqueBySizeArr = uniqBy(newArr, (elem) => {



      if (elem.size !== size && elem.id !== id) {
        stewArr.push(elem);
      }

      size = elem.size;
      id = elem.id;

    });

    console.log(stewArr);
    // const stewArr = [];
    //
    // for (let i = 0; i < newArr.length; i++) {
    //   for (let j = 0; j < newArr.length; j++) {
    //     if (newArr[i].id === stewArr[j].id &&
    //     newArr[i].size === stewArr[j].size && i !== j) {
    //       receiveArr.push(newArr[i]);
    //     }
    //   }
    // }
    this.props.addToCart(stewArr);
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

    this.props.updateFamilySize(nextStyle);
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
            count={index + 1}
            item={item}
            key={index}
            updateSize={this.updateSize}
            updateStyle={this.updateStyle}
          />;
        })}
      </div>
      <input
        className={lrgBtnClassNames}
        onTouchTap={this.handleSubmit}
        style={styleFlexMain}
        type="button"
        value="Submit"
      />
    </div>;
  }
});

export default withRouter(Items);
