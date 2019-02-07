import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    bio: "",
    rememberMe: false,
    title: "Miss"
  };
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            placeholder="name"
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <textarea
            placeholder="Tell something about yourself"
            type="text"
            value={this.state.bio}
            name="bio"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={this.state.checked}
            name="rememberMe"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <select
            name="title"
            defaultValue={this.state.title}
            onChange={this.handleChange}
          >
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
