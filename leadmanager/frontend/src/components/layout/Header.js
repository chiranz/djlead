import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export class Header extends Component {
  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1, color: "white" }}>
              Lead Manager
            </Typography>

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
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
