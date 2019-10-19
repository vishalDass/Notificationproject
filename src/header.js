import React, { Component } from "react";

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notCount: this.props.setHeaderData,
      notificationMenu: this.props.setHeaderData
    };
  }

  notificationsChecked = event => {
    this.props.onCheckNotifications();
    console.log("function call");
  };

  render() {
    const styling = {
      position: "relative; top: 3px"
    };
    return (
      <header classNameName="site-navbar py-2 bg-blue" role="banner">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a
                  className="dropdown-toggle"
                  aria-expanded="false"
                  onClick={this.notificationsChecked}
                >
                  <span
                    className="label label-pill label-danger count"
                    style={{ borderRadius: "10px" }}
                  >
                    {this.props.setHeaderData}
                  </span>{" "}
                  <span
                    className="glyphicon glyphicon-bell"
                    style={{ fontSize: "18px" }}
                  ></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">
                      <strong>e</strong>
                      <br />
                      <small>
                        <em>wfe</em>
                      </small>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <strong>ew</strong>
                      <br />
                      <small>
                        <em>fe</em>
                      </small>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <strong>efw</strong>
                      <br />
                      <small>
                        <em>wfe</em>
                      </small>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <strong>fg</strong>
                      <br />
                      <small>
                        <em>ft</em>
                      </small>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <strong>jkjkj</strong>
                      <br />
                      <small>
                        <em>kjkj</em>
                      </small>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
