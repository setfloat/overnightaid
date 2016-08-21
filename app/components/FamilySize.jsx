import Paper from 'material-ui/Paper';
import React from 'react';

const stylePaper = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#E5FCFF'
};

const Catalog = React.createClass({
  render() {
    return <div>
      <Paper style={stylePaper} zDepth={3} rounded={false} />
      <Paper style={stylePaper} zDepth={3} rounded={false} />
      <Paper style={stylePaper} zDepth={3} rounded={false} />
      </div>
  }
})

export default Catalog;
