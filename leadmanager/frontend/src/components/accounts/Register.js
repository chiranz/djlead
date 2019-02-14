import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

class Register extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    register: PropTypes.func.isRequired
  };
  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { password, password2, username, email } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        username,
        email,
        password
      };
      this.props.register(newUser);
    }
  };
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { name, email, password, password2 } = this.state;
    const { errors } = this.props;
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm={12} md={6}>
            <h2>Register</h2>
            <form
              onSubmit={this.handleSubmit}
              className={{
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "30px"
              }}
            >
              <TextField
                autoFocus
                placeholder="Your Username"
                name="username"
                label="User Name"
                margin="normal"
                variant="outlined"
                style={{ width: 500 }}
                value={name}
                onChange={this.handleChange}
                error={errors.msg.username ? true : false}
                helperText={errors.msg.username}
              />
              <br />
              <TextField
                label="Email"
                margin="normal"
                variant="outlined"
                name="email"
                style={{ width: 500 }}
                value={email}
                onChange={this.handleChange}
                error={errors.msg.email ? true : false}
                helperText={errors.msg.email}
              />
              <br />
              <TextField
                label="Password"
                margin="normal"
                variant="outlined"
                name="password"
                type="password"
                value={password}
                onChange={this.handleChange}
                style={{ width: 500 }}
                error={errors.msg.password ? true : false}
                helperText={errors.msg.password}
              />
              <br />
              <TextField
                label="Confirm Password"
                margin="normal"
                variant="outlined"
                name="password2"
                type="password"
                value={password2}
                onChange={this.handleChange}
                style={{ width: 500 }}
              />
              <br />
              <div>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
                <br />
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  errors: state.errorReducer
});

export default connect(
  mapStateToProps,
  { register, createMessage }
)(Register);
