import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { login } from "../../actions/auth";
import { Typography } from "@material-ui/core";

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
    const { errors } = this.props;
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm={12} md={6}>
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
              {errors.msg.non_field_errors ? (
                <Paper style={{ padding: 10, background: "rgba(255,0,0,0.3)" }}>
                  <Typography>
                    <b style={{ color: "#B22222" }}>
                      {errors.msg.non_field_errors}
                    </b>
                  </Typography>
                </Paper>
              ) : (
                ""
              )}
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
                error={errors.msg.username ? true : false}
                helperText={errors.msg.username}
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
                error={errors.msg.username ? true : false}
                helperText={errors.msg.username}
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
  isAuthenticated: state.authReducer.isAuthenticated,
  errors: state.errorReducer
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
