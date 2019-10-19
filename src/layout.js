import React, { Component } from "react";
import Header from "./header";
import DataInputPane from "./dataInputPane";

class Layout extends Component {
  state = { data: [], notifications: null };

  handleData = (menuData, notCount) => {
    this.setState({ menu: menuData, notifications: notCount });
  };

  notificationsChecked = () => {
    this.setState({ notifications: "" });
    console.log("this is parent");
  };

  componentWillMount() {
    fetch("http://localhost/fetch.php", {
      headers: {
        Accept: "application/json",
        method: "GET"
      }
    }); //.then(res => console.log("response", res.json())); //this.setState({ value: rslt, menu:  }));

    //   var num = parseInt(rslt);
  }

  render() {
    return (
      <div>
        <Header
          setHeaderData={this.state.notifications}
          onCheckNotifications={this.notificationsChecked}
        />
        <DataInputPane setNotification={this.handleData} />
      </div>
    );
  }
}

export default Layout;
