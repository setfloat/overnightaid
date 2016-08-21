import Joi from 'joi';
import Paper from 'material-ui/Paper';
import React from 'react';
import TextField from 'material-ui/TextField';

const schema = Joi.object({
  addressFullName: Joi.string().trim().max(255),
  addressLine1: Joi.string().trim().max(40),
  addressLine2: Joi.string().trim().max(40),
  addressCity: Joi.string().trim().max(40),
  addressState: Joi.string().trim(),
  addressZip: Joi.string().trim().min(5).max(10)
});

const styleAddressForm = {
  height: 300,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#E5FCFF'
};

const AddressForm = React.createClass({
  getInitialState() {
    return {
      address: this.props.address,
      errors: {}
    };
  },

  handleBlur(event) {
    const { name, value } = event.target;
    const nextErrors = Object.assign({}, this.state.errors);
    const result = Joi.validate({ [name]: value }, schema);

    if (result.error) {
      for (const detail of result.error.details) {
        nextErrors[detail.path] = detail.message;
      }

      return this.setState({ errors: nextErrors });
    }

    delete nextErrors[name];

    this.setState({ errors: nextErrors });
  },

  handleChange(event) {
    const nextAddress = Object.assign({}, this.state.address,
      {
        [event.target.name]: event.target.value
      });

    this.setState({ address: nextAddress });
  },

  render() {
    const { address, errors } = this.state;

    console.log(address);
    const styleTextField = {
      display: 'block'
    };

    return <main>
      <Paper
        rounded={false}
        style={styleAddressForm}
        zDepth={3}
      >
        <TextField
          errorText={errors.addressFullName}
          floatingLabelText="Full Name"
          fullWidth={true}
          name="addressFullName"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styleTextField}
          // value={address.addressFullName}
        />
        <TextField
          errorText={errors.addressLine1}
          floatingLabelText="Address Line 1"
          fullWidth={true}
          name="addressLine1"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styleTextField}
          // value={address.addressLine1}
        />
        <TextField
          errorText={errors.addressLine2}
          floatingLabelText="Address Line 2"
          fullWidth={true}
          name="addressLine2"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styleTextField}
          // value={address.addressLine2}
        />
        <TextField
          errorText={errors.addressCity}
          floatingLabelText="City"
          fullWidth={true}
          name="addressCity"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styleTextField}
          // value={address.addressCity}
        />
        <TextField
          errorText={errors.addressState}
          floatingLabelText="State"
          fullWidth={true}
          name="addressState"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styleTextField}
          // value={address.addressState}
        />
        <TextField
          errorText={errors.addressZip}
          floatingLabelText="Zip Code"
          fullWidth={true}
          name="addressZip"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          style={styleTextField}
          // value={address.addressZip}
        />
      </Paper>
      <Paper
        rounded={false}
        style={styleAddressForm}
        zDepth={3}
      />
    </main>;
  }
});

export default AddressForm;
