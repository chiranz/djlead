import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { addLead } from "../../actions/leads";

class Form extends Component {
  static propTypes = {
    addLead: PropTypes.func.isRequired
  };
  state = {
    name: "",
    email: "",
    message: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <Paper>
        <h2>Add Lead</h2>
        <form
          onSubmit={this.handleSubmit}
          className={{ display: "flex", flexWrap: "wrap", marginLeft: "30px" }}
        >
          <TextField
            placeholder="name"
            name="name"
            label="Name"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={this.handleChange}
          />

          <TextField
            label="Email"
            margin="normal"
            variant="outlined"
            placeholder="Tell something about yourself"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <TextField
            label="Message"
            margin="normal"
            variant="outlined"
            name="message"
            multiline
            rowsMax="3"
            value={message}
            onChange={this.handleChange}
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    );
  }
}

export default connect(
  null,
  { addLead }
)(Form);
