import React, { Component } from "react";

class DataInputPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: null,
      lname: null,
      email: null,
      message: null,
      isSeen: false,
      count: 0
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    if (
      this.state.fname == null ||
      this.state.lname == null ||
      this.state.email == null ||
      this.state.message == null
    ) {
      alert("please fill alll the fields");
    } else {
      var postdata = JSON.stringify(this.state);

      console.log("sent data", postdata);

      fetch(`http://localhost/index.php?data=${postdata}`, {
        headers: {
          Accept: "application/json",
          method: "GET"
        }
      })
        .then(res => res.json())
        .then(data => this.props.setNotification(data));
    }
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
                if (e.target.value != "")
                  this.setState({ fname: e.target.value });
                else this.setState({ fname: null });
              }}
            />
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              onChange={e => {
                if (e.target.value != "")
                  this.setState({ lname: e.target.value });
                else this.setState({ lname: null });
              }}
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              onChange={e => {
                if (e.target.value != "")
                  this.setState({ email: e.target.value });
                else this.setState({ email: null });
              }}
            />

            <label>Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              onChange={e => {
                if (e.target.value != "")
                  this.setState({ message: e.target.value });
                else this.setState({ message: null });
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
