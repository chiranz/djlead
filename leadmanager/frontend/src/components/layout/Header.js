import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLink = (
      <Fragment>
        <Typography variant="h6" style={{ color: "white" }}>
          {user ? "Welcome " + user.username : ""}
        </Typography>
        <Button
          onClick={this.props.logout}
          color="secondary"
          variant="contained"
          style={{ marginLeft: 10 }}
        >
          Logout
        </Button>
      </Fragment>
    );
    const guestLink = (
      <Fragment>
        <Link to="/login">
          <Button color="secondary" variant="contained">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button
            style={{ marginLeft: 20 }}
            color="secondary"
            variant="contained"
          >
            Register
          </Button>
        </Link>
      </Fragment>
    );
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1, color: "white" }}>
              Lead Manager
            </Typography>
            {isAuthenticated ? authLink : guestLink}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer
});
export default connect(
  mapStateToProps,
  { logout }
)(Header);
