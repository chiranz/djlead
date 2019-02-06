import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import MainContainer from "./layout/MainContainer";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <MainContainer>
          <Dashboard />
        </MainContainer>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
