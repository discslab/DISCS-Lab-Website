import React, { Component } from "react";

import "./Openings.css";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class Openings extends Component {
  render() {
    return (
      <section className="openings" id="openings">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="jumbo-title">PhD/MSc/UG OPENINGS</h1>
          </Container>
        </Jumbotron>
        <div className="openings-wrapper">
          <div className="openings-section">
            <span className="openings-subtitle">Current Openings</span>
            <Alert
              className="application-alert"
              id="application-alert-success"
              variant="success"
            >
              <i class="fas fa-check-circle" id="alert-circle" />
              <p className="current-available">
                We have fully funded positions and are currently looking for
                &nbsp;
                <b>PhD students!</b> <br />
                <b>Masters and undergraduate students</b> are also welcome for
                research projects.
              </p>
            </Alert>
            <div className="openings-current-description">
              We are looking for curious and motivated students who share our
              passion in performing groundbreaking computer systems research.
              McGill has a diverse student community, and we encourage all
              students who are interested to apply.
              <br />
              <br />
              You can find examples of our research focus areas below, or read
              more about them <a href="/#research">here</a>. Note that strong
              programming skills are a definite asset.
              <br />
              <br />
              Possible research topics include:
              <ul className="topic-list">
                <li className="topic-list-item">
                  Storage Systems for Data Science
                </li>
                <li className="topic-list-item">
                  Reimagining Storage Building Blocks for Fast Devices
                </li>
                <li className="topic-list-item">
                  Data Management for the Internet of Things
                </li>
              </ul>
            </div>
          </div>
          <div className="openings-section">
            <span className="openings-subtitle">Application</span>
            <Alert
              className="application-alert"
              id="application-alert-danger"
              variant="danger"
            >
              <i className="fas fa-exclamation-triangle" id="alert-triangle" />
              <p className="current-available">
                Please make sure to follow the correct instructions for your
                position (PhD/MSc/UG) when applying,{" "}
                <b>and to note the corresponding deadline(s).</b>
              </p>
            </Alert>
            <div className="openings-app-section">
              <span className="openings-app-subtitle">PhD Students</span>
            </div>
            <div className="openings-app-section">
              <span className="openings-app-subtitle">
                Masters & Undergraduate Students
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Openings;
