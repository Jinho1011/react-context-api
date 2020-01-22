import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: {
        "1": {
          id: 1,
          text: "something 1",
          seen: false
        },
        "2": {
          id: 2,
          text: "something 2",
          seen: false
        },
        "3": {
          id: 3,
          text: "something 3",
          seen: false
        }
      }
    };
  }

  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
