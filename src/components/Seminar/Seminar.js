import React, { Component } from "react";

import "./Seminar.css";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class Seminar extends Component {
  render() {
    return (
      <section className="seminar" id="seminar">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="jumbo-title">McGill CS Systems Seminar</h1>
          </Container>
        </Jumbotron>
        <div className="openings-wrapper">
          <div className="openings-section">
            <span className="openings-subtitle">Current Openings</span>

            <div className="openings-current-description">
              I love working with students and I am always looking for
              motivated, curious, and hardworking undergraduate, Master’s, and
              PhD students to join DISCS. Before applying formally, feel free to
              contact me by email. I read all email I receive from prospective
              students.
              <br />
              <br />
              Before writing to me, do keep in mind that I receive a lot of
              email from students interested in applying to McGill. If you would
              like to get a response, please read the following and send me the
              information I request.
              <br />
              <br />
              If you are applying to our <b>graduate</b> programs (PhD and
              Master’s), you should also be aware of the following:

            </div>
          </div>

        </div>
      </section>

    );
  }
}

export default Seminar;
