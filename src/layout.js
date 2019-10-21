import React, { Component } from "react";
import Header from "./header";
import DataInputPane from "./dataInputPane";

class Layout extends Component {
  state = { data: [], notifications: null };

  handleData = notCount => {
    this.setState({ notifications: notCount });
  };

  notificationsChecked = () => {
    this.setState({ notifications: "" });
    console.log("this is parent");
  };

  handlepageLoadData = data => {
    this.setState({ notifications: data.count });
  };

  componentWillMount() {
    fetch("http://localhost/fetch.php", {
      headers: {
        Accept: "application/json",
        method: "GET"
      }
    });
  }

  render() {
    return (
      <div>
        <Header
          setHeaderData={this.state.notifications}
          onCheckNotifications={this.notificationsChecked}
          onPageLoad={this.handlepageLoadData}
        />
        <DataInputPane setNotification={this.handleData} />
      </div>
    );
  }
}

export default Layout;
