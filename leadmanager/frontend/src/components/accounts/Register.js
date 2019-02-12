import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class Register extends Component {
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
    console.log("submit");
  };
  render() {
    const { name, email, password, password2 } = this.state;
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
                label="Email"
                margin="normal"
                variant="outlined"
                name="email"
                style={{ width: 500 }}
                value={email}
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
