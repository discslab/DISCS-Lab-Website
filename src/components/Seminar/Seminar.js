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
            <span className="openings-subtitle">Upcoming Seminars</span>

            <div className="openings-current-description">
              Roughly bi-weekly, the McGill CS systems group is running a seminar, 
              which is open for McGill students and invited speakers to present their 
              latest work. If you would like to present, propose a speaker, or join 
              our mailing list, please get in touch at oana.balmau@cs.mcgill.ca

            </div>
          </div>

        </div>
      </section>

    );
  }
}

export default Seminar;
