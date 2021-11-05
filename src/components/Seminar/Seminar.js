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
            <h1 className="jumbo-title">Systems Seminar</h1>
          </Container>
        </Jumbotron>
      </section>
    );
  }
}

export default Seminar;
