import React, { Component } from "react";
import { NavbarMenuItems } from "../InfoItems/NavbarMenuItems";
import "./Navbar.css";
import Scrollspy from "react-scrollspy";
class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <nav style={{ zIndex: 1090 }} className="NavbarItems">
        <span className="navbar-logo"></span>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            style={{ color: this.state.clicked ? "red" : "white" }}
            className="fas fa-bars"
          ></i>
        </div>
        <Scrollspy
          items={[
            "home",
            "news",
            "team",
            "research",
            "publications",
            "teachings",
            "openings",
          ]}
          currentClassName="--active"
          className={this.state.clicked ? "nav-menu active" : "nav-menu"}
          offset={-60}
        >
          {NavbarMenuItems.map((item, index) => {
            return (
              <li className="nav-item" key={index}>
                <a
                  className="nav-links"
                  href={item.url}
                  onClick={this.handleClick}
                >
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </Scrollspy>
      </nav>
    );
  }
}

export default Navbar;
