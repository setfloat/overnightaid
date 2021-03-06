import Joi from 'joi';
import React from 'react';
import TextField from 'material-ui/TextField';
import classNames from 'classnames';

const schema = Joi.object({
  email: Joi.string().trim().min(3).max(255),
  password: Joi.string().trim().min(8).max(255),
  confirm: Joi.string().trim().min(8).max(255)
});

const styles = {
  headline: {
    fontSize: 36,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  loginContent: {
    fontSize: 24,
    maxWidth: '95%',
    padding: '5%'
  }
};

const Register = React.createClass({
  getInitialState() {
    return {
      register: {
        email: '',
        password: '',
        confirm: ''
      },
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
    const nextRegister = Object.assign({}, this.state.register,
      {
        [event.target.name]: event.target.value
      });

    this.setState({ register: nextRegister });
  },

  handleTouchTap() {
    this.props.acceptRegister(this.state.register);
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

    const { errors } = this.state;
    const styleTextField = {
      display: 'block'
    };

    return <div style={styles.loginContent}>
      <h2 style={styles.headline}>Register</h2>
      <TextField
        errorText={errors.email}
        floatingLabelText="Email"
        fullWidth={true}
        name="email"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        style={styleTextField}
      />
      <TextField
        errorText={errors.password}
        floatingLabelText="Password"
        fullWidth={true}
        name="password"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        style={styleTextField}
        type="password"
      />
      <TextField
        errorText={errors.confirm}
        floatingLabelText="Confirm Password"
        fullWidth={true}
        name="confirm"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        style={styleTextField}
        type="password"
      />
      <input
        className={lrgBtnClassNames}
        onTouchTap={this.handleTouchTap}
        style={styleFlexMain}
        type="button"
        value="Register"
      />
    </div>;
  }
});

export default Register;
