import React, { Component } from "react";

class DataInputPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "hello",
      lname: "world",
      email: "fsd",
      message: "asdfsa",
      isSeen: false,
      count: 0
    };
  }

  handleSubmit = async event => {
    var postdata = JSON.stringify(this.state);
    event.preventDefault();
    console.log("sent data", postdata);

    const res = await fetch(`http://localhost/index.php?data=${postdata}`, {
      headers: {
        Accept: "application/json",
        method: "GET"
      }
    });

    const res1 = await fetch("http://localhost/fetch.php", {
      headers: {
        Accept: "application/json",
        method: "GET"
      }
    });

    const data = await Promise.resolve(res1.text());

    const header_data = data.split(" ");

    console.log("response", header_data[header_data.length - 1]);

    this.props.setNotification(
      header_data,
      header_data[header_data.length - 1]
    );
  };

  render() {
    return (
      <div className="App">
        <p>Contact Me</p>
        <div>
          <form action="#">
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              onChange={e => {
                this.setState({ fname: e.target.value });
              }}
            />
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              onChange={e => {
                this.setState({ lname: e.target.value });
              }}
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />

            <label>Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              onChange={e => {
                this.setState({ message: e.target.value });
              }}
            ></textarea>

            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </form>
        </div>
      </div>
    );
  }
}

export default DataInputPane;
