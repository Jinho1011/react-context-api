import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.deleteNotification = id => {
      this.setState(currState => {
        const newState = delete currState.notification[id];
        return newState;
      });
    };

    this.seeNotification = id => {
      this.setState(currState => {
        return {
          ...currState,
          notification: {
            ...currState.notification,
            [id]: {
              ...currState.notification[id],
              seen: true
            }
          }
        };
      });
    };

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
      },
      deleteNotification: this.deleteNotification,
      seeNotification: this.seeNotification
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
