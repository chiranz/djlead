import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import MainContainer from "./layout/MainContainer";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <MainContainer>
            <Dashboard />
          </MainContainer>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
