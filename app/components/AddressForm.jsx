import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const styleAddressForm = {
      height: 300,
      width: 200,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: '#E5FCFF'
    };


const AddressForm = React.createClass({
  render() {
    return <main>
      <Paper style={styleAddressForm} zDepth={3} rounded={false}>
        <TextField
          hintText="Hint Text"
          floatingLabelText="Floating Label Text"
        /><br />
      </Paper>
      <Paper style={styleAddressForm} zDepth={3} rounded={false} />

    </main>
  }
})

export default AddressForm;
