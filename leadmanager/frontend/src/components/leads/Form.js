import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
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
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };
  render() {
    const { name, email, message } = this.state;
    const { errors } = this.props;
    return (
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <h2>Add Lead</h2>
        <form
          onSubmit={this.handleSubmit}
          className={{ display: "flex", flexWrap: "wrap", marginLeft: "30px" }}
        >
          <TextField
            placeholder="Your name here"
            name="name"
            label="Name"
            margin="normal"
            variant="outlined"
            style={{ width: 500 }}
            value={name}
            onChange={this.handleChange}
            error={errors.msg.name ? true : false}
            helperText={errors.msg.name}
          />
          <br />
          <TextField
            label="Email"
            margin="normal"
            variant="outlined"
            placeholder="Your email here"
            name="email"
            style={{ width: 500 }}
            value={email}
            onChange={this.handleChange}
            error={errors.msg.email ? true : false}
            helperText={errors.msg.email}
          />
          <br />
          <TextField
            label="Message"
            margin="normal"
            placeholder="Tell me something about yourself"
            variant="outlined"
            name="message"
            multiline
            rowsMax="3"
            value={message}
            onChange={this.handleChange}
            style={{ width: 500 }}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginLeft: 400 }}
          >
            Submit
          </Button>
        </form>
        <div>{this.props.message.info}</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  errors: state.errorReducer,
  message: state.messageReducer
});

export default connect(
  mapStateToProps,
  { addLead }
)(Form);
