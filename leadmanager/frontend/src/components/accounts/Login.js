import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { login } from "../../actions/auth";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm={12} md={6}>
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
              <TextField
                autoFocus
                placeholder="Your username"
                name="username"
                label="Username"
                margin="normal"
                variant="outlined"
                style={{ width: 500 }}
                value={username}
                onChange={this.handleChange}
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
              />
              <br />
              <div>
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
                <br />
                Need an account? <Link to="/register">Register here</Link>
              </div>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
