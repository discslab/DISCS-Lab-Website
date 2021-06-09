import React, { Component } from "react";
import "./Publications.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class Publications extends Component {
  render() {
    return (
      <section className="publications" id="publications">
        <Jumbotron fluid>
          <Container>
            <h1 className="jumbo-title">Publications coming soon!</h1>
          </Container>
        </Jumbotron>
      </section>
    );
  }
}

export default Publications;
