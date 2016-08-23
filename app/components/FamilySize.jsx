import Paper from 'material-ui/Paper';
import React from 'react';

const stylePaper = {
  height: 250,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#E5FCFF',
  border: 'solid',
  borderColor: '#FA8072',
  borderWidth: '1px'
};

const FamilySize = React.createClass({
  render() {
    return <div className="flexContainer">
      <Paper zDepth={3}>
        <Paper
          className="flexItems"
          rounded={true}
          style={stylePaper}
          zDepth={3}
        >
          <div className="flexItem">
          Just Me!
          </div>
        </Paper>
        <Paper
          className="flexItems"
          rounded={true}
          style={stylePaper} zDepth={3}
        >
          <div className="flexItem">
            We are Two!
          </div>
        </Paper>
        <Paper
          className="flexItems"
          rounded={true}
          style={stylePaper}
          zDepth={3}
        >
          <div className="flexItem">
            We are Three!
          </div>
        </Paper>
        <Paper
          className="flexItems"
          rounded={true}
          style={stylePaper}
          zDepth={3}
        >
          <div className="flexItem">
            Four of Us!
          </div>
        </Paper>
      </Paper>
    </div>;
  }
});

export default FamilySize;
