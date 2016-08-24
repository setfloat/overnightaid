import AddOn from 'components/AddOn';
import React from 'react';
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
    marginTop: '50px',
    marginLeft: '50px',
    marginRight: '50px',
    paddingBottom: '40px',
    maxWidth: 700,
    width: 'viewPort',
    alignContent: 'centerAlign'
  }
};

const AddOns = React.createClass({
  getInitialState() {
    return {
      addOns: []
    };
  },

  componentWillReceiveProps(nextProps) {
    const nextAddOns = nextProps.items.filter((items) => {
      return items.category === 'optionables';
    });

    this.setState({ addOns: nextAddOns });
  },

  handleButtonTouchTap() {
    const newCartItems = this.state.addOns.filter((item) => {
      return item.quantity && item.quantity > 0;
    });

    this.props.addToCart(newCartItems);
  },

  updateQuantity(item, updatedQuantity) {
    const nextAddOns = this.state.addOns.map((element) => {
      if (item !== element) {
        return element;
      }

      return Object.assign({}, item, { quantity: updatedQuantity });
    });

    this.setState({ addOns: nextAddOns });
  },

  render() {
    const { addOns } = this.state;

    const styleFlexMain = {
      marginBottom: '50px'
    };

    const lrgBtnClassNames = classNames({
      btnLarge: true,
      wavesEffect: true
    });

    return <div>
      <h3 style={styles.headline}>
        Optionables and AddOns
      </h3>
      {addOns.map((addOn, index) => {
        return <AddOn
          item={addOn}
          key={index}
          updateQuantity={this.updateQuantity}
        />;
      })}
      <input
        className={lrgBtnClassNames}
        onTouchTap={this.handleButtonTouchTap}
        style={styleFlexMain}
        type="button"
        value="Add to Cart"
      />
    </div>;
  }
});

export default AddOns;
