import Paper from 'material-ui/Paper';
import React from 'react';
import { withRouter } from 'react-router';

const FamilySelection = React.createClass({
  handleFamilySelectionTouchTap(event) {
    this.props.updateFamilySelection(event.target.textContent);

    const newCartItems = this.props.items.filter((item) => {
      return item.category === 'required';
    }).map((item) => {
      return Object.assign({}, item, {
        quantity: Number.parseInt(event.target.textContent)
      });
    });

    this.props.addToCart(newCartItems);
    this.props.updateNotification('Added Core Package Items to Cart');
    this.props.router.push('/order/items');
  },

  render() {
    const stylePaper = {
      backgroundImage: 'url(familyBackground.png)',
      backgroundSize: '90% 90%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '30vh',
      width: '20vw',
      margin: 20,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      cursor: 'pointer'
    };

    const flexFamilyMembers = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center'
    };

    const flexMain = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
      alignContent: 'flex-start',
      alignItems: 'center',
      height: '100%'
    };

    const familyArray = [1, 2, 3, 4];

    return <main style={flexMain}>
      <h3>How Many Individuals Need Items?</h3>
      <div style={flexFamilyMembers}>
        {familyArray.map((amount, index) => {
          return <Paper
            key={index}
            onTouchTap={this.handleFamilySelectionTouchTap}
            rounded={true}
            style={stylePaper}
            value={amount}
            zDepth={3}
          >
            <div>
              <h1>{amount}</h1>
            </div>
          </Paper>;
        })}
      </div>
    </main>;
  }
});

export default withRouter(FamilySelection);
