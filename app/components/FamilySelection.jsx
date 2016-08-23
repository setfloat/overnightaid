import Paper from 'material-ui/Paper';
import React from 'react';

const FamilySelection = React.createClass({
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
      textAlign: 'center'
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
            rounded={true}
            style={stylePaper}
            zDepth={3}
          >
            <div>
              {amount}
            </div>
          </Paper>;
        })}
      </div>
    </main>;
  }
});

export default FamilySelection;
