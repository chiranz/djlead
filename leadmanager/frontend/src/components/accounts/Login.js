import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log("submmit");
  };
  render() {
    const { name, password } = this.state;
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm={12} md={6}>
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
              <TextField
                autoFocus
                placeholder="Your username"
                name="name"
                label="Name"
                margin="normal"
                variant="outlined"
                style={{ width: 500 }}
                value={name}
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
